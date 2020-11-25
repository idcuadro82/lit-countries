function debounce(callback: Function, interval: number = 0) {
  let timeout: ReturnType<typeof setTimeout>;

  return function () {
    const context = this;
    const args = arguments;

    clearTimeout(timeout);
    timeout = setTimeout(function () {
      timeout = null;
      callback.apply(context, args);
    }, interval);
  };
};

export default debounce;
