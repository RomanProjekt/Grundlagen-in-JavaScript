//Funktionen erzeugen über Konstruktorfunktion

const add = new Function(
  "number1", // Erster Parameter
  "number2", // Zweiter Parameter
  "return number1 + number2" // Funktionskörper
);

console.log(add(2, 2));
