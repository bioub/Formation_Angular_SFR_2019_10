// Module IIFE
// Immediately Invoked Function Expression
// (function() {
  var prenoms = ['Jean', 'Eric'];

  function bonjour(prenom) {
    return 'Hello ' + prenom;
  }

  for (var i = 0; i < prenoms.length; i++) {
    var prenom = prenoms[i];
    console.log(bonjour(prenom));
  }
// }());
