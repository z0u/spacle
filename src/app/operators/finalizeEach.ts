import { Observable, defer, finalize, tap } from 'rxjs';

/**
 * Run a cleanup function for every previous value, and also for the final value
 * when the observable is complete.
 */
function finalizeEach<T>(callback: (value: T) => void) {
  return (source: Observable<T>) =>
    defer(() => {
      let lastValue: T | undefined = undefined;
      return source.pipe(
        tap((value) => {
          if (lastValue !== undefined) callback(lastValue);
          lastValue = value;
        }),
        finalize(() => {
          if (lastValue !== undefined) callback(lastValue);
        })
      );
    });
}

export default finalizeEach;
