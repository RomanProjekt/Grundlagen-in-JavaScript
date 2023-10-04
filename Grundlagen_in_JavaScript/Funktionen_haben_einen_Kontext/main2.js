const firstName = "globaler Name";

//Hier wird eine globale Funktion erzeugt, die den den Namen "htis.getFirstNameGlobal" zurückgibt
function getFirstNameGlobal() {
  return this.firstName;
}
console.log(getFirstNameGlobal()); // Fehler: this ist nicht definiert

//anotherPerson ist ein Object, dass der objectbezogen Methoden getFirstName -> getFirstNameGlobal zurückweist
const anotherPerson = {
  firstName: "Moritz",
  getFirstName: getFirstNameGlobal,
};

//anotherPerson ist ein Object, dass der objectbezogen Methoden yetAnotherPerson -> getFirstNameGlobal zurückweist
const yetAnotherPerson = {
  firstName: "Peter",
  getFirstName: getFirstNameGlobal,
};

//Durch das Zugreifen mit dem Punktoperator auf das jeweilige Objekt,
//kommt als Rückgabewert der Name zurück - siehe unten
console.log(anotherPerson.getFirstName()); // Ausgabe: Moritz
console.log(yetAnotherPerson.getFirstName()); // Ausgabe: Peter
