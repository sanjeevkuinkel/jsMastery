//?Nullish Coalescing operator (??):null undefined
let val1;
// val1 = 5 ?? 10;  if we print give first value if null does not exist in statement
// val1=null??10 print 10 because null exist at first
// val1 = undefined ?? 15; print 15
// val1=null??10??20 first value after null i.e 10
console.log(val1);
let value1;
const value2 = null;
const result = value1 ?? value2;
console.log(result); //output false ,only value2 if value1 is null
// ?If value1 is not null or undefined, result is value1.
// If value1 is null or undefined, result is value2.
