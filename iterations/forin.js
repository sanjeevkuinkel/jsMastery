//?forin looop is mainly used for object
const myObject = {
  js: "javascript",
  ts: "typescript",
  cpp: "c++",
};
for (const key in myObject) {
  //   console.log(key);
  //   console.log(myObject[key]);
  //   console.log(`${key} shortcut is  for ${myObject[key]}`);
}

const programming = ["js", "ruby", "cpp"];
for (const key in programming) {
  //   console.log(key);
  console.log(programming[key]);
}

//?forin loop is not iterable for map
const map = new Map();
map.set("NP", "Nepal");
map.set("USA", "United states of america");
map.set("FR", "france");
for (const key in map) {
  console.log(map[key]);
}
