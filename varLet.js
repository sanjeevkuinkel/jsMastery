//var is introduced when js is introduced.
//let is introduced when es6 is introduced in2015

//var is function scope and let is block scope
function setup() {
  console.log(x);
  var x = 100;
  console.log(x);
}
setup();

// {
// TDZ starts at beginning of scope
//   console.log(bar); // "undefined"
//   console.log(foo); // ReferenceError: Cannot access 'foo' before initialization
//   var bar = 1;
//   let foo = 2; // End of TDZ (for foo)
// }

{
  // TDZ starts at beginning of scope
  const func = () => console.log(letVar); // OK

  // Within the TDZ letVar access throws `ReferenceError`

  let letVar = 3; // End of TDZ (for letVar)
  func(); // Called outside TDZ!
}
