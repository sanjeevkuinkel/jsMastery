const { c } = require("tar");

//with array destructure
function swapTwoNumber(a, b) {
  //a,b is a parameter
  [a, b] = [b, a];
  console.log(a, b);
}
swapTwoNumber(4, 5); //4,5 is a argument
//with addition and subtraction
function swapNumber(a, b) {
  a = a + b;
  b = a - b;
  a = a - b;
  console.log(a, b);
}
swapNumber(6, 7);
//with multiplication and division
function swapNumberDivision(a, b) {
  a = a * b;
  b = a / b;
  a = a / b;
  console.log(a, b);
}
swapNumberDivision(5, 10);

//bitwise operator
function swap(a, b) {
  a = a ^ b; // Step 1: a becomes the XOR of both numbers
  b = a ^ b; // Step 2: b becomes the original value of a
  a = a ^ b; // Step 3: a becomes the original value of b
  return [a, b]; //any code after return doesnot execute
}
const number = swap(5, 15);
const [a, b] = number;
console.log("a:", a); // 10
console.log("b:", b); // 5
//function must return the value inorder to store the result while calling function

//?access function result without return statement
let resultA, resultB; // Global variables

function swapWithoutReturn(a, b) {
  a = a ^ b; // Step 1: a becomes the XOR of both numbers
  b = a ^ b; // Step 2: b becomes the original value of a
  a = a ^ b; // Step 3: a becomes the original value of b
  resultA = a; // Store swapped value in global variable
  resultB = b; // Store swapped value in global variable
}
swapWithoutReturn(5, 15);
console.log("resultA:", resultA); // Outputs: resultA: 15
console.log("resultB:", resultB); // Outputs: resultB: 5

function loginUserMessage(username) {
  //function loginUserMessage(username="sk") {we can pass default value as an parameter
  if (username === undefined) {
    //if(!username)undefined is bydefault false,empty string is false
    console.log("Please enter a username");
    return;
  } else {
    return `${username} just logged In`;
  }
}
console.log(loginUserMessage("sanjeev kuikel"));
//if nothing is passed then if we print it,it results the undefinded

//?rest operator
function calculateCartPrice(...num1) {
  return num1;
}
console.log(calculateCartPrice(2, 3, 4));

//?accessing object
const user = {
  username: "sanjeev",
  price: 222,
};
function handleObject(anyobject) {
  console.log(
    `Username is ${anyobject.username} and price is ${anyobject.price}`
  );
}

handleObject(user);
handleObject({ username: "kuikel", price: 111 });

//?array
const myNewArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
function returnSecondValue(getArray) {
  return getArray[1];
}
console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));
