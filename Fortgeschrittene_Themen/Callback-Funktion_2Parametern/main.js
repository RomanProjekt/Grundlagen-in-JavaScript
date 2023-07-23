//Normalfall und Fehlerfall über eine Callback-Funktion mit zwei Parametern [ES2015]
//Seite 112

/*


*/

function asyncFunction(callback) {
  setTimeout(function() {
    const result = 4711; // Hier normalerweise mehr Code
    if(result < 0) {
      callback(new Error('Ergebnis kleiner 0'), result);
    } else {
      callback(null, result);
    }
  }, 2000);
}


asyncFunction(
  (error, result) => {
    if(error) {
      console.error(error);
    } else {
      console.log(result);
    }
  }
);


