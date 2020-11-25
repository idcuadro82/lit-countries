import ICountry from '@models/country.model';
import deepClone from '@utils/deep-clone';

class ModalObserver {
  private static instance: ModalObserver;

  _isOpened: boolean = false;
  _subscribers: any[] = [];
  _selectedCountry: ICountry = null;

  public static getInstance(): ModalObserver {
    this.instance = ModalObserver.instance || new ModalObserver();
    return this.instance;
  }

  get selectedCountry(): ICountry {
    return this._selectedCountry;
  };

  set selectedCountry(country: ICountry) {
    this._selectedCountry = deepClone(country);
  }

  get isOpened(): boolean {
    return this._isOpened;
  };

  set isOpened(isOpened: boolean) {
    this._isOpened = isOpened;
    this.notify();
  }

  addSubscriber = (callback: Function): void => {
    this._subscribers.push(callback);
  }

  notify = (): void => {
    this._subscribers.forEach(subscriber => {
      subscriber(this.isOpened);
    });
  }
}

export default ModalObserver.getInstance();
