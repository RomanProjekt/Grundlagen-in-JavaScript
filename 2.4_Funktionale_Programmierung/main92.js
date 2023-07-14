const artists = [
  {
    name: "Jonna Wicker",
    age: 23,
  },
  {
    name: "Ben Haper",
    age: 2323,
  },
];

export const names = [];
for (let i = 0; i < artists.length; i++) {
  names.push(artists[i].name + " " + artists[i].age);
}

console.log(names);
