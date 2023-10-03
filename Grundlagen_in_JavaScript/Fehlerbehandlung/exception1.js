//Um auf einzelne Fehler reagieren zu können, müssen die entsprechenden
//Funktionsaufrufe mit einem »try-catch«-Block umgeben

try {
  console.log(checkAge(-22));
} catch (error) {
  console.log(error); // RangeError: Alter darf nicht negativ sein
}
