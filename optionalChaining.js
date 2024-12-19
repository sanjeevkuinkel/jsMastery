//?The Optional Chaining Operator (?.)
//?The ?. operator returns undefined if an object is undefined or null (instead of throwing an error).
const obj = null;
const value = obj?.property;
const value2 = obj?.node?.thing ?? "default"; // value will be undefined, no error thrown
console.log(value2);
console.log(value);
const user = { details: null };
const city = user.details?.address?.city; // city will be undefined
// result will be undefined if getAddress is not a function
console.log(city);
const result = user.getAddress?.(); // result will be undefined if getAddress is not a function
console.log(result);
const obj1 = {};
console.log(typeof obj1);
const value1 = obj1.node?.thing ?? "default"; // value will be "default" if obj.node.thing is undefined
console.log(value1);
console.log(obj);
