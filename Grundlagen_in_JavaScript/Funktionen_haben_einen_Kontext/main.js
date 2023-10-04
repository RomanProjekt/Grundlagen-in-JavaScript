const person = {
  firstname: "Max",
  getfirstName: function () {
    return this.firstname;
  },
};

console.log(person.firstname); //Max
console.log(person.getfirstName()); //Max
