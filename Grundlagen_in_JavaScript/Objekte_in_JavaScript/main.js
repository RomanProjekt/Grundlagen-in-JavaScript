const { last } = require("rxjs");

const person = {
  firstname: "Max",
  lastname: "Musterman",
  talk: function () {
    console.log("Hallo", person.firstname, person.lastname);
  },
};

person.talk();
console.log(person.firstname); // Max

//Why problem by this line -> is it because of the javascript version??
//console.log(person[lastname]); // Mustermann

person.firstname = "Moritz";
person["lastname"] = "Tester";
console.log(person.firstname); // Moritz
console.log(person.lastname); // Tester
person.talk(); // Hallo

//Why is here a problem by this line -> is it because of the javascript version??
//person[talk](); // Hallo

delete person.firstname; // Must
console.log(person.firstname); // Ausgabe: undefined
delete person["lastname"];
console.log(person.lastname); // Ausgabe: undefined
