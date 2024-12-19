//?Destructuring in JavaScript is a powerful feature introduced in ES6 (ECMAScript 2015) that allows you to unpack values from arrays or properties from objects into distinct variables. This technique simplifies the process of extracting data from complex structures, making your code more concise and readable.

//!Array Destructuring with rest operator
let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let [first, second, third, ...rest] = number;
console.log(first, second, third);
console.log(rest);
console.log(typeof number);

//!object Destructuring
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
};

// Destructuring
const { firstName, lastName } = person;

console.log(firstName); // Output: John
console.log(lastName); // Output: Doe

//!Nested Destructuring
const user = {
  id: 1,
  profile: {
    name: "Alice",
    age: 25,
  },
};

// Nested Destructuring
const {
  id,
  profile: { name, age },
} = user;

console.log(name); // Output: Alice
console.log(age); // Output: 25
console.log(id);
