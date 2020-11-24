class LoaderObserver {
  private static instance: LoaderObserver;

  _isLoading: boolean = false;
  _subscribers: any[] = [];

  public static getInstance(): LoaderObserver {
    this.instance = LoaderObserver.instance || new LoaderObserver();
    return this.instance;
  }

  get isLoading(): boolean {
    return this._isLoading;
  };

  set isLoading(isLoading: boolean) {
    this._isLoading = isLoading;
    this.notify();
  }

  addSubscriber = (callback: Function) => {
    this._subscribers.push(callback);
  }

  notify = () => {
    this._subscribers.forEach(subscriber => {
      subscriber(this.isLoading);
    });
  }
}

export default LoaderObserver.getInstance();
