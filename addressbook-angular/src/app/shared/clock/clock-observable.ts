import { interval } from 'rxjs';
import { startWith, map } from 'rxjs/operators';

export function clock(delay) {
  return interval(delay).pipe(
    startWith(0),
    map(() => new Date()),
  )
}
