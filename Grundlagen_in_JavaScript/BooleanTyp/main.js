console.log("false, 0 und leerer String sind gleich");

console.log(false == 0); // true
console.log(false == ""); // true
console.log(0 == ""); // true

console.log("null und undefined sind nur unteinander gleich");

console.log(null == false); // false
console.log(null == true); // false
console.log(null == null); // true
console.log(undefined == undefined); // true
console.log(undefined == null); // true

console.log("NaN ist zu nichts gleich, sogar zu sich selbst nicht");

console.log(NaN == false); // false
console.log(NaN == null); // false
console.log(NaN == NaN); // false
