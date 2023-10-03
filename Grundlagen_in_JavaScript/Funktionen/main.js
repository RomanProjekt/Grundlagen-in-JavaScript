function add(x, y) {
  return x + y;
}

console.log(add(4, 3));

const operation = add;
console.log(operation); //[Function: add]

const result = add(2, 2);
const result2 = operation(2, 2);

console.log(result);
console.log(result2);

console.log("================================");

console.log(add.name); // Ausgabe: add
console.log(operation.name); // Ausgabe: add

//Funktionen in Arrays verwenden
