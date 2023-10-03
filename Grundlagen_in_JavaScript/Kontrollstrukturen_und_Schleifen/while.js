//Verwendung einer »while«-Schleife

const { bindNodeCallback } = require("rxjs");

let i = 10;
while (i > 0) {
  console.log(i);
  i--;
}

// Verwendung einer »do-while«-Schleife
let b = 10;
do {
  console.log(b);
  bindNodeCallback--;
} while (b > 0);

//Verwendung der »for«-Schleife
for (let i = 10; i > 0; i--) {
  console.log(i);
}
