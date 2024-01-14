/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-types */
export const Konami = (() => {
  // up, up, down, down, left, right, left, right, b, a, enter
  const SEQUENCE: Array<number> = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65, 13];

  let head: number = 0;
  let isActive: boolean = false;

  let callback: Function | undefined;

  const start = (cb: Function): void => {
    if (isActive) {
      return;
    }

    window.addEventListener("keydown", onKeyDown);

    callback = cb;
    isActive = true;
  };

  const stop = (): void => {
    if (!isActive) {
      return;
    }

    isActive = false;

    window.removeEventListener("keydown", onKeyDown);
  };

  const onKeyDown = (event: any) => {
    if (event.keyCode === SEQUENCE[head]) {
      head++;

      if (head === SEQUENCE.length) {
        if (callback instanceof Function) {
          callback();
        }
        head = 0;
      }
    } else {
      head = 0;
    }
  };

  return {
    start,
    stop,
  };
})();
