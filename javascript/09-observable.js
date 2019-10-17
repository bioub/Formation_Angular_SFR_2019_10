// function timeout(delayMs) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(delayMs);
//     }, delayMs);
//   });
// }

// timeout(1000)
//   .then((delayMs) => console.log(`${delayMs}ms`));

// API Observable
// Lib : RxJS
// Stage 1 TC39

const { Observable } = require("rxjs");
const { map, take } = require('rxjs/operators');

function interval(delayMs) {
  return new Observable(observer => {
    const id = setInterval(() => {
      observer.next(delayMs);
    }, delayMs);

    setTimeout(() => {
      observer.error(new Error('1400'));
    }, 1400);

    return () => {
      console.log('unsubscribe');
      clearInterval(id);
    };
  });
}

const interval$ = interval(1000);

// ----(1000)----(1000)----(1000)----(1000)----(1000)----(1000)
// map((delayMs) => delayMs / 1000)
// ----(  1 )----(  1 )----(  1 )----(  1 )----(  1 )----(  1 )
// take(3)
// ----(  1 )----(  1 )----(  1 )|

const subscription = interval$
  .pipe(
    map((delayMs) => delayMs / 1000),
   // take(3),
  )
  .subscribe(delayS => console.log(`1 - ${delayS}s`), (err) => console.log(err.message), () => console.log('Complete'));

// setTimeout(() => {
//   interval$.subscribe(delayMs => console.log(`2 - ${delayMs}ms`));
//   subscription.unsubscribe();
// }, 500);
