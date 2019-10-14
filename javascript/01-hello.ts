
const firstNames = ['Jean', 'Eric'];

function hello(firstName: string) {
  return `Hello ${firstName.toUpperCase()}`;
}

for (const firstName of firstNames) {
  console.log(hello(firstName));
}
