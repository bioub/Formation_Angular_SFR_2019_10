setTimeout(() => console.log('A'), 500);
setTimeout(() => console.log('B'), 0);
setTimeout(() => console.log('C'), 1000);
setTimeout(() => console.log('D'), 500);
// setTimeout(() => console.log('E'), Math.random() * 1001);
// setTimeout(() => console.log('F'), Math.random() * 1001);

console.log('FIN');

// pile d'appels
// ^
// |
// |                           lg      lg    lg      lg
// |st - st - st - st - lg ... cbB ... cbA - cbD ... cbC
// +----------------------------------------------------> temps
//                      FIN    B       A     D       C

// file d'attente (0ms) : cbB
// file d'attente (3ms) :
// file d'attente (500ms) : cbA - cbD
// file d'attente (501ms) : cbD
// file d'attente (502ms) :
// file d'attente (1000ms) : cbC
// file d'attente (1001ms) :

// Jake Archibald : In the loop JS Asia 2018

