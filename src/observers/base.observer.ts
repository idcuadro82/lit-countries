export class BaseObserver<T> {
  _subscribers: Function[] = [];

  addSubscriber = (callback: Function): void => {
    this._subscribers.push(callback);
  }

  removeSubscriber = (subscriber: Function) => {
    const removeIndex = this._subscribers.findIndex((subs: Function) => subscriber === subs);
    if (removeIndex !== -1) this._subscribers = this._subscribers.slice(removeIndex, 1);
  }

  notify = <S>(data: S): void => {
    this._subscribers.forEach(subscriber => {
      subscriber(data);
    });
  }
}
