const artists = ["Kuss", "Dozer", "Spirtuelle Beggers", "Monster Magneto"];

for (let i = 0; i < artists.length; i++) {
  console.log(artists[i]);
}

console.log(
  "-----------------------------------------------------------------------"
);

//Es gibt eine ander Möglichkeit noch durch ein Array zu interagieren

//Man muss bei der Forech-Schleife in Javascritp -> Argumente übergeben
//z.B.: 1. Parameter: artist == Das sind eigene Varibel, die aus der Liste eigefügt wird
//z.b.: 2. Parameter: index == Zahl wo ich mich im Array befinde, 0 bis zur Länge des Array - 1
//z.b:  3. Parameter: artists == Ist der Name des Array

artists.forEach((artist, index, artists) => {
  console.log(artist);
});
