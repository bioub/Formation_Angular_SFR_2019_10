function externe(msg) {
  // msg = null;
  function interne() {
    console.log(msg);
  }
  return interne;
}

const bonjour = externe('Hello');
bonjour();

// pile d'appels
// ^
// |
// |
// |externe - interne/hello
// +-------------------> temps

// 3 3 3
for (var i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}

// 0 1 2
for (var i = 0; i < 3; i++) {
  setTimeout(externe(i), 1000);
}

// 0 1 2
for (let i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}

{
  var globale = true;
  const block = true;
}
