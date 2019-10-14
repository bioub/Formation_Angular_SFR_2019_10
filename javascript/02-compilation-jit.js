function bonjour(prenom) {
  return 'Hello ' + prenom;
}

console.time("bonjour('Romain')");
console.log(bonjour('Romain'));
console.timeEnd("bonjour('Romain')");

console.time("bonjour('Romain')");
console.log(bonjour('Romain'));
console.timeEnd("bonjour('Romain')");

console.time("bonjour('Romain')");
console.log(bonjour('Romain'));
console.timeEnd("bonjour('Romain')");

console.time("bonjour('Romain')");
console.log(bonjour('Romain'));
console.timeEnd("bonjour('Romain')");

console.time("bonjour(123)");
console.log(bonjour(123));
console.timeEnd("bonjour(123)");

console.time("bonjour('Romain')");
console.log(bonjour('Romain'));
console.timeEnd("bonjour('Romain')");
