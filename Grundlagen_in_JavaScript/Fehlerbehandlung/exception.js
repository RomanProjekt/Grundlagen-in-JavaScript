//Eine Funktion, die einen Fehler wirft

console.log(checkAge(22)); // true
console.log(checkAge(-22)); // Error: Alter darf nicht negativ sein
function checkAge(age) {
  if (age < 0) {
    throw new Error("Alter darf nicht negativ sein.");
  } else {
    return true;
  }
}

/*
C:\Users\roman\Desktop\Grundlagen in JavaScript\Grundlagen_in_JavaScript\Fehlerbehandlung\exception.js:7
    throw new Error("Alter darf nicht negativ sein.");
    ^

Error: Alter darf nicht negativ sein.
    at checkAge (C:\Users\roman\Desktop\Grundlagen in JavaScript\Grundlagen_in_JavaScript\Fehlerbehandlung\exception.js:7:11)
    at Object.<anonymous> (C:\Users\roman\Desktop\Grundlagen in JavaScript\Grundlagen_in_JavaScript\Fehlerbehandlung\exception.js:4:13)
    at Module._compile (node:internal/modules/cjs/loader:1254:14)
    at Module._extensions..js (node:internal/modules/cjs/loader:1308:10)
    at Module.load (node:internal/modules/cjs/loader:1117:32)
    at Module._load (node:internal/modules/cjs/loader:958:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:81:12)
    at node:internal/main/run_main_module:23:47
*/
