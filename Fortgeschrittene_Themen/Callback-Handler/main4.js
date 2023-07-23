
//Normalfall und Fehlerfall über zwei getrennte Callback-Funktionen [ES2015]

function asyncFunction(success, error) {
  setTimeout(function() {
    const result = 4711; // Hier normalerweise mehr Code
    if(result < 0) {
      error(new Error('Ergebnis kleiner 0'));
    } else {
      success(result);
    }
  }, 2000);
}
asyncFunction(
  // anonyme Implementierung von success()
  (result) => console.log(result),
  // anonyme Implementierung von error()
  (error) => console.error(error)
);