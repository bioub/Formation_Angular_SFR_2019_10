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

function interval(delayMs) {
  return new Observable(observer => {
    setInterval(() => {
      observer.next(delayMs);
    }, delayMs);
  });
}

const interval$ = interval(1000);

interval$.subscribe(delayMs => console.log(`1 - ${delayMs}ms`));

setTimeout(() => {
  interval$.subscribe(delayMs => console.log(`2 - ${delayMs}ms`));
}, 500);
