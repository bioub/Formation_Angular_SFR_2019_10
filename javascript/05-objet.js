const coords = {
  x: 1,
  y: 2,
};

// étends l'objet
coords.z = 3;

// supprimer une clé
delete coords.z;

function Contact(prenom) {
  // arguments[0] === prenom
  // if (prenom.length > 4) {
    this.prenom = prenom;
  // }
}

Contact.getClass = function() {
  return 'Contact';
};

Contact.prototype.hello = function() {
  // Object.getPrototypeOf(this);
  console.log(`Hello ${this.prenom}`);
};

const romain = new Contact('Romain');
console.log(typeof romain); // object
romain.hello();
Contact.getClass();

console.log(romain.hasOwnProperty('prenom')); // true
console.log(romain.hasOwnProperty('hello')); // false
console.log(typeof romain.prenom !== undefined); // true
console.log(typeof romain.hello !== undefined); // true

function Formateur(prenom, specialite) {
  Contact.apply(this, arguments);
  this.specialite = specialite;
}

Formateur.prototype = Object.create(Contact.prototype);

Formateur.prototype.hello = function() {
  Contact.prototype.hello.call(this);
  console.log('Je suis spécialiste ' + this.specialite);
}

const formateur = new Formateur('Romain', 'JS');
formateur.hello();
