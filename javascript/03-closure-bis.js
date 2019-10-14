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

for (var i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}

for (var i = 0; i < 3; i++) {
  setTimeout(externe(i), 1000);
}

for (let i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}
