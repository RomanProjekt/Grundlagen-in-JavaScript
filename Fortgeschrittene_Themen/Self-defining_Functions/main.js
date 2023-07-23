//2.5.8    Self-defining Functions
//Seite 113

function firstPrintOneThenPrintTwo() {
  console.log(1);
  firstPrintOneThenPrintTwo = function() {
    console.log(2);
  }
}

firstPrintOneThenPrintTwo(); // Ausgabe: 1
firstPrintOneThenPrintTwo(); // Ausgabe: 2