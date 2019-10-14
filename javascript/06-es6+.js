class Contact {
  constructor(prenom) {
    this.prenom = prenom;
  }
  hello() {
    console.log(`Hello ${this.prenom}`);
  }
  static getClass() {
    return 'Contact';
  }
}

const romain = new Contact('Romain');
console.log(typeof Contact); // function
console.log(typeof romain); // object
romain.hello();
Contact.getClass();

console.log(romain.hasOwnProperty('prenom')); // true
console.log(romain.hasOwnProperty('hello')); // false
console.log(typeof romain.prenom !== undefined); // true
console.log(typeof romain.hello !== undefined); // true

class Formateur extends Contact {
  constructor(prenom, specialite) {
    super(prenom);
    this.specialite = specialite;
  }
  hello() {
    super.hello();
    console.log('Je suis spécialiste ' + this.specialite);
  }
}

const formateur = new Formateur('Romain', 'JS');
formateur.hello();
