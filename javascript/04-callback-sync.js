const prenoms = ['Jean', 'Eric', 12];

function bonjour(prenom) {
  return `Hello ${prenom.toUpperCase()}`;
}

prenoms.forEach((prenom, i) => { // cb('Jean', 0, array)
  console.log(prenom, i);
});

console.log('FIN');

// pile d'appels
// ^
// |lg   lg   lg
// |=> - => - =>
// |forEach      - lg
// +-------------------> temps
//  Jean Eric 12   FIN
