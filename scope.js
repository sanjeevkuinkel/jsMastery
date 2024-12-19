//?global scope :it is differ with browser console and other editor console
let a = 300;
const b = 100;
var c = 200;
if (true) {
  //?  {}block scope
  let a = 1;
  const b = 2;
  var c = 3; ///c=20
}
console.log(a);
console.log(b);
console.log(c);

//?global scope variable can be used inside the other scope but vaiable inside the some scope cannot be used globally
