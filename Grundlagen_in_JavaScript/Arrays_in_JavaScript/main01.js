meinArr = [10, 20, 30, 40, 50];
meinArr2 = [65, 16, 81, 18, 25];

//concat() 	Hängt Elemente oder Arrays an ein bestehendes Array an.
console.log("Hängt Elemente oder Arrays an ein bestehendes Array an.");
meinArr.concat(meinArr2);
console.log(meinArr);

//filter() 	Filtert Elemente aus dem Array auf Basis eines in Form einer Funktion übergebenen Filterkriteriums.
console.log("Filtert Elemente aus dem Array");
meinArr.filter(checkAdult);
function checkAdult(age) {
  return age >= 18;
}
console.log(meinArr);

//forEach() 	Wendet eine übergebene Funktion auf jedes Element im Array an.
console.log("Wendet eine übergebene Funktion auf jedes Element im Array an.");
meinArr.forEach((element) => {
  console.log(element);
});

//join() 	Wandelt ein Array in eine Zeichenkette um.
console.log("Wandelt ein Array in eine Zeichenkette um.");
console.log(meinArr.join());

//map() 	Bildet die Elemente eines Arrays auf Basis einer übergebenen Umwandlungsfunktion auf neue Elemente ab.
console.log(
  "Bildet die Elemente eines Arrays auf Basis einer übergebenen Umwandlungsfunktion auf neue Elemente ab."
);
const array1 = [1, 4, 9, 16];
// Pass a function to map
const map1 = array1.map((x) => x * 2);
console.log(map1); // Expected output: Array [2, 8, 18, 32]

//pop() 	Entfernt das letzte Element eines Arrays.
meinArr2.pop();
console.log("pop() 	Entfernt das letzte Element eines Arrays.");
console.log(meinArr2);

//push() 	Fügt ein neues Element am Ende des Arrays ein.
console.log("push() 	Fügt ein neues Element am Ende des Arrays ein.");
meinArr2.push(2222);
console.log(meinArr2);

//reduce() 	Fasst die Elemente eines Arrays auf Basis einer übergebenen Funktion zu einem Wert zusammen.
console.log(
  "Fasst die Elemente eines Arrays auf Basis einer übergebenen Funktion zu einem Wert zusammen."
);
//meinArr2.reduce();
//console.log(meinArr2);

//reverse() 	Kehrt die Reihenfolge der Elemente im Array um.
console.log("reverse() 	Kehrt die Reihenfolge der Elemente im Array um.");
meinArr.reverse();
console.log(meinArr);

//shift() 	Entfernt das erste Element eines Arrays.
console.log("shift() 	Entfernt das erste Element eines Arrays.");
meinArr2.shift();
console.log(meinArr2);

//slice() Schneidet einzelne Elemente aus einem Array heraus.
console.log("slice() Schneidet einzelne Elemente aus einem Array heraus.");
meinArr.slice();
console.log(meinArr);

//splice() 	Fügt neue Elemente an beliebiger Position im Array hinzu.
console.log(
  "splice() 	Fügt neue Elemente an beliebiger Position im Array hinzu."
);
meinArr.splice(1, 2, 123456789);
console.log(meinArr);

//sort() 	Sortiert das Array, optional auf Basis einer übergebenen Vergleichsfunktion.
console.log("Sortieren der Elemente");
meinArr.sort();
console.log(meinArr);

//unshift() 	Fügt ein Element oder mehrere Elemente an den Anfang eines Arrays hinzu.
console.log(
  "Fügt ein Element oder mehrere Elemente an den Anfang eines Arrays hinzu."
);
meinArr.unshift(1, 2, 3, 4, 5);
console.log(meinArr);
