//?this represent current context or values
//?An arrow function in JavaScript is a concise syntax for writing functions introduced in ES6 (ECMAScript 2015). It allows you to create functions in a cleaner and shorter way compared to the traditional function keyword.

/*?Key Characteristics
Shorter Syntax: Eliminates the need for the function keyword.
Implicit Return: If the function body contains only one expression, the result of that expression is returned automatically (without needing the return keyword or braces {}).
No Own this: Arrow functions do not have their own this; they inherit this from their surrounding lexical context.
Cannot Be Used as Constructors: Arrow functions cannot be used with the new keyword.*/

//?Arrow functions are ideal for small, quick functions and callbacks but may not be suitable for more complex use cases where traditional functions provide more flexibility.
const user = {
  username: "sanjeev",
  price: 1000,
  welcomeMessage: function () {
    console.log(`${this.username} Welcome to website`);
    console.log(this);
  },
};
user.welcomeMessage();
user.username = "kuikel";
user.welcomeMessage();
console.log(this); //?result the empty object in node if it is print globally and if we do same in browser then it will print global window object

function code() {
  let username = "sanjeev";
  console.log(this); //?if we print this  in function it provide the a object with multiple values in console
  console.log(this.username); //?return undefined in function beacause it is used on object
}
code();

const arrow = () => {
  let username = "sanjeev";
  console.log(this); //?return empty object
  console.log(this.username); //?return undefined
};
arrow();

//?arrow function implicit return:no requirement of return keyword and curly braces, parenthesis may be used
const addTwo = (num1, num2) => num1 + num2;
console.log(addTwo(3, 4));
//?returning object with implicit return
const returnObject = (num3, num4) => ({
  username: "sanjeev",
});
console.log(returnObject());

//? Single expression with implicit return
const add = (a, b) => a + b;

console.log(add(1, 2));
// Arrow function with no parameters
const greet = () => console.log("Hello, World!");
greet(); // Output: Hello, World!
// With braces, you need an explicit return
const multiply = (a, b) => {
  const result = a * b;
  return result;
};

console.log(multiply(3, 4)); // Output: 12
