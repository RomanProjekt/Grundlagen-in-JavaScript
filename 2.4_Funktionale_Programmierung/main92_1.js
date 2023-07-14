let artists = [
  {
    name: "John Haper",
  },
  {
    name: "Sandra Blabal",
  },
];
let names = [];
names = artists.map((artist, index, artists) => artist.name);
console.log(names);
