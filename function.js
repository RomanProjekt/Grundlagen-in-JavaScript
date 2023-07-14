function addFour(x) {
    return x + 4;
}

function multiplyWithSeven(x) {
    return x * 7;
}



const addFourThenMultiplyWithSeven = compositionWithContext(
  multiplyWithSeven, 
  addFour
);
const multiplyWithSevenThenAddFour = compositionWithContext(
  addFour, 
  multiplyWithSeven
);


console.log(multiplyWithSeven(addFour(2)));