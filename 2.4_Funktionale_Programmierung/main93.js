const albums = [
  {
    title: "Push the Sky Away",
    artist: "Nick Cave",
    released: 2013,
  },
  {
    title: "No more shall we part",
    artist: "Nick Cave",
    released: 2001,
  },
  {
    title: "Live from Mars",
    artist: "Ben Harper",
    released: 2003,
  },
  {
    title: "The Will to Live",
    artist: "Ben Harper",
    released: 1997,
  },
];

console.log("------------------------------------------------------------");
//Normale Forschlefe mit zählervariable
const releasedBefore2000 = [];
for (let i = 0, l = albums.length; i < l; i++) {
  if (albums[i].released < 2000) {
    releasedBefore2000.push(albums[i]);
  }
}
console.log(releasedBefore2000);

//For-Each mit let variable of Liste
console.log("------------------------------------------------------------");

for (let album of albums) {
  if (album.released < 2000) {
    releasedBefore2000.push(album);
  }
}

console.log(releasedBefore2000);

//Filtern bestimmter Elemente eines Arrays mit funktionaler Programmierung
console.log("------------------------------------------------------------");

const andereRealedBefore2000 = albums.filter(
  (album, index, albums) => album.released < 2000
);

console.log(andereRealedBefore2000);
