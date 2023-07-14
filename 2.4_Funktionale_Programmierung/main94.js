const artists = [
  {
    name: "Nick Cave",
    albums: [
      {
        title: "Push the Sky Away",
      },
      {
        title: "No more shall we part",
      },
    ],
  },
  {
    name: "Ben Harper",
    albums: [
      {
        title: "Live from Mars",
      },
      {
        title: "The Will to Live",
      },
    ],
  },
];

let totalNumberOfAlbums = 0;
for (let i = 0, l = artists.length; i < l; i++) {
  totalNumberOfAlbums += artists[i].albums.length; //1 Album: 2 und 2. Album auch 2 sind 4
}
console.log(totalNumberOfAlbums);

//Funktionale Variante zur Ermittlung der gesamten Anzahl an Musikalben

const anderetotalNumberOfAlbums = artists.reduce(
  (result, artist, index, artists) => {
    return result + artist.albums.length;
  },
  0
);

console.log(anderetotalNumberOfAlbums);
