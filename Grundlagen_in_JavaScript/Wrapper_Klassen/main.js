//Die Typen von primitiven Datentypen und Wrapper-Objekten stimmen nicht überein.

let aNumberObject = new Number(3);

let anotherNumberObject = new Number(4.4);

let aStringObject = new String("Hallo");

let aBooleanObject = new Boolean(true);

let aNumber = 4;
let anotherNumber = 4.4;
let aString = "Hallo";
let aBoolean = true;

console.log(typeof aNumber); // number
console.log(typeof aNumberObject); // object

console.log(typeof anotherNumber); // number
console.log(typeof anotherNumberObject); // object

console.log(typeof aString); // string
console.log(typeof aStringObject); // object

console.log(typeof aBoolean); // boolean
console.log(typeof aBooleanObject); // object
