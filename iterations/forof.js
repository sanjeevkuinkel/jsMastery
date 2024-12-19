//for of
//Array specific loops
const arr = [1, 2, 3, 4, 5];
for (const num of arr) {
  //   console.log(num);
}
const month = ["jan", "feb", "march", "april"];
for (const mon of month) {
  //   console.log(`Four first month are ${mon}`);
}
const greetings = "Hello world";
for (const greet of greetings) {
  if (greet == " ") {
    break;
  }
  //   console.log(`Each Character is ${greet}`);
}

//?map
const map = new Map();
map.set("NP", "Nepal");
map.set("USA", "United states of america");
map.set("FR", "france");
// console.log(map);
for (const [key, value] of map) {
  console.log(key, value);
}
//forof loop is not iterable for object
const myObject = {
  game1: "NFS",
  game2: "pubg",
};
// for (const [key, value] of myObject) {
//   console.log(key, value);
// }
