//?The rest operator in JavaScript, introduced in ES6 (ECMAScript 2015), allows functions to accept an indefinite number of arguments and bundle them into an array. This feature is particularly useful for creating variadic functions, which can handle a variable number of parameters.
//?function myFunction(param1, param2, ...restParams) {restParams is an array containing all additional arguments}

//?Single Rest Parameter:A function can only have one rest parameter, and it must be placed at the end of the parameter list.
//?When a function is called with more arguments than it has explicitly defined parameters, the rest operator collects those extra arguments into an array.
//* curly braces {} to unpack values from objects and square brackets [] to unpack values from arrays.
const month = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
];
function testRest(month) {
  console.log(month);
  return month;
}
console.log(testRest(month));
const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
[first, second, third, ...rest] = days;
function testRest1(first, second, third, ...rest) {
  console.log(first, second, third);
  console.log(rest);
  return rest;
}
console.log(first, second, third, rest);
