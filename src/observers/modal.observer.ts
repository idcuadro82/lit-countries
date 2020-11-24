import Country from '@models/country.model';
import deepClone from '@utils/deep-clone';

class ModalObserver {
  private static instance: ModalObserver;

  _isOpened: boolean = false;
  _subscribers: any[] = [];
  _selectedCountry: Country = null;

  public static getInstance(): ModalObserver {
    this.instance = ModalObserver.instance || new ModalObserver();
    return this.instance;
  }

  get selectedCountry(): Country {
    return this._selectedCountry;
  };

  set selectedCountry(country: Country) {
    this._selectedCountry = deepClone(country);
  }

  get isOpened(): boolean {
    return this._isOpened;
  };

  set isOpened(isOpened: boolean) {
    this._isOpened = isOpened;
    this.notify();
  }

  addSubscriber = (callback: Function) => {
    this._subscribers.push(callback);
  }

  notify = () => {
    this._subscribers.forEach(subscriber => {
      subscriber(this.isOpened);
    });
  }
}

export default ModalObserver.getInstance();
