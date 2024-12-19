//?Rest Operator: Collects multiple elements into a single array. It is primarily used in function parameters to gather all remaining arguments into an array.
function sum(...numbers) {
  return numbers;
}
console.log(sum(1, 2, 3, 4)); // Outputs: 10

///?Spread Operator: Expands an iterable (like an array or string) into individual elements. It is used to spread elements into new contexts, such as function arguments or array literals.
//!Combining Arrays
const arr1 = [1, 2];
const arr2 = [3, 4];
const combined = [...arr1, ...arr2]; // Outputs: [1, 2, 3, 4]
console.log(combined);
//! Copying Arrays
const original = [1, 2, 3];
const copy = [...original]; // Output: [1, 2, 3]
console.log(copy);

//!Working with Objects:The spread operator can also be applied to object literals for merging properties or creating new objects.
const obj1 = { x: 1, y: 2 };
const obj2 = { z: 3 };
const merged = { ...obj1, ...obj2 }; // Output: { x: 1, y: 2, z: 3 }
console.log(merged);

//!Using with Strings:The spread operator can convert a string into an array of characters.
const str = "hello";
const chars = [...str]; // Output: ['h', 'e', 'l', 'l', 'o']
console.log(chars);
