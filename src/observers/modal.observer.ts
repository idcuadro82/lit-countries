import ICountry from '@models/country.model';
import deepClone from '@utils/deep-clone';
import { BaseObserver } from './base.observer';

class ModalObserver extends BaseObserver<ModalObserver> {
  private static instance: ModalObserver;

  private _isOpened: boolean = false;
  private _selectedCountry: ICountry = null;

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
    this.notify(this._isOpened);
  }
}

export default ModalObserver.getInstance();
