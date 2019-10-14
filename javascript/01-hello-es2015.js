// Module IIFE
// Immediately Invoked Function Expression
// (function() {
  const prenoms = ['Jean', 'Eric', 12];

  function bonjour(prenom) {
    return `Hello ${prenom.toUpperCase()}`;
  }

  for (const prenom of prenoms) {
    console.log(bonjour(prenom));
  }
// }());
