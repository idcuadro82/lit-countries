import { BaseObserver } from './base.observer';
class LoaderObserver extends BaseObserver<LoaderObserver> {
  private static instance: LoaderObserver;

  private _isLoading: boolean = false;

  public static getInstance(): LoaderObserver {
    this.instance = LoaderObserver.instance || new LoaderObserver();
    return this.instance;
  }

  get isLoading(): boolean {
    return this._isLoading;
  };

  set isLoading(isLoading: boolean) {
    this._isLoading = isLoading;
    this.notify(this._isLoading);
  }
}

export default LoaderObserver.getInstance();
