/*
strict mode ist keine Anweisung, sondern bringt eine leicht abweichende Semantik 
und fordert die Einhaltung strikter Programmierkonventionen, um typische Fehlerquellen im 
Vorfeld zu vermeiden (z.B. die Verwendung undefinierte Variablen, fehlende Semikolons
*/

"use strict";
let variable = 4;
variable2 = 4711;

/*

C:\Users\roman\Desktop\Grundlagen in JavaScript\Grundlagen_in_JavaScript\Strikter_Modus\main.js:3
variable2 = 4711;
          ^

ReferenceError: variable2 is not defined
    at Object.<anonymous> (C:\Users\roman\Desktop\Grundlagen in JavaScript\Grundlagen_in_JavaScript\Strikter_Modus\main.js:3:11)
    at Module._compile (node:internal/modules/cjs/loader:1254:14)
    at Module._extensions..js (node:internal/modules/cjs/loader:1308:10)
    at Module.load (node:internal/modules/cjs/loader:1117:32)
    at Module._load (node:internal/modules/cjs/loader:958:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:81:12)
    at node:internal/main/run_main_module:23:47

*/
