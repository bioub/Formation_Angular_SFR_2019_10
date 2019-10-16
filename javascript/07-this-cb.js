class Contact {
  constructor(prenom) {
    this.prenom = prenom;
  }
  hello() {
    console.log(`Hello ${this.prenom}`);
  }
  helloAsync() {
    setTimeout(() => {
      console.log(`Hello ${this.prenom}`);
    }, 1000);
  }
}

const romain = new Contact('Romain');
romain.hello();
romain.helloAsync();
