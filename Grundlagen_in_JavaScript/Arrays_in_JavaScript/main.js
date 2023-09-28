//Erzeugung eines Arrays

const artistsNormal = new Array();
artistsNormal[0] = "Kuyss";
artistsNormal[1] = "Baby Woodrose";
artistsNormal[2] = "Hermano";
artistsNormal[3] = "Monster Magnet";
artistsNormal[4] = "Queens of the Stone Age";

//Kurzschreibweise für die Erzeugung von Arrays

const artists = [
  "kuyss",
  "Bla Bla Woodrose",
  "Heermano",
  "Monster Magnet",
  "Queens of the Stone Age",
];

artists.forEach((artist) => console.log(artist));

//Erzeugen eines Arrays mit 10 Werten

const meinArraymitElementen = new Array(10);
//meinArraymitElementen[0] = "1 Element";
//meinArraymitElementen[1] = "2 Element";

meinArraymitElementen.forEach((elements) => console.log(elements));

//Erzeugen eines Arrays mit 2 Elementen
const meinArr = new Array(2, 10, 32);

meinArr.forEach((elemeents) => console.log(elemeents));
