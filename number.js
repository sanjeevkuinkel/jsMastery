//!JavaScript Numbers
//?Floating point arithmetic is not always 100% accurate:
let x = 0.2 + 0.1;
console.log(x);
let y = (0.2 * 10 + 0.1 * 10) / 10;
console.log(y);
let a = "10";
let b = "20";
let c = a + b;
console.log(c);
//?If you add a number and a string, the result will be a string concatenation:
let d = 10;
let e = "20";
let f = d + e;
console.log(f);
//*If you add a string and a number, the result will be a string concatenation:
let g = "30";
let h = 40;
let i = g + h;
console.log(i);
//?A common mistake is to expect this result to be 30:
let num1 = 5;
let num2 = 10;
console.log(`the result of num1+num2 is ${num1 + num2}`);
console.log(`the result of num1+num2 is ` + num1 + num2);
//?JavaScript will try to convert strings to numbers in all numeric operations:
let result4 = "100" / "10";
console.log(result4); //?output 10
let result5 = "100" * "10";
console.log(result5); //?output 1000
let result6 = "100" - "10";
console.log(result6); //?output 90
//?exception in this case
let result7 = "100" + "10";
console.log(result7); //?output 10010

//!NaN - Not a Number
//?NaN is a JavaScript reserved word indicating that a number is not a legal number.
let xw = 100 / "Apple";
console.log(xw); //?output NaN
//?However, if the string is numeric, the result will be a number:
let x1 = 100 / "10";
console.log(x1); //?output 10
//?You can use the global JavaScript function isNaN() to find out if a value is a not a number:
let x2 = 100 / "Apple";
console.log(isNaN(x2)); //?output true
//?If you use NaN in a mathematical operation, the result will also be NaN:
let x3 = NaN;
let y3 = 5;
let z3 = x3 + y3;
console.log(z3); //?output NaN
//?the result might be a concatenation like NaN5:
let x4 = NaN;
let y4 = "5";
let z4 = x4 + y4;
console.log(z4); //?output NaN5
//?NaN is a number: typeof NaN returns number:
let x5 = NaN;
console.log(typeof x5); //?output number

//?Infinity (or -Infinity) is the value JavaScript will return if you calculate a number outside the largest possible number.
let myNumber = 2;
while (myNumber != Infinity) {
  myNumber = myNumber * myNumber;
}
console.log(myNumber); //?output Infinity

//?Division by 0 (zero) also generates Infinity:
let x6 = 2 / 0;
console.log(x6); //?output Infinity

//?Infinity is a number: typeof Infinity returns number.
let x7 = Infinity;
console.log(typeof x7); //?output number

let myNumber2 = 32;
myNumber.toString(32);
myNumber.toString(16);
myNumber.toString(12);
myNumber.toString(10);
myNumber.toString(8);
myNumber.toString(2);

//?numbers can also be defined as objects with the keyword new
let y12 = new Number(123);
console.log(typeof y12); //?output object
console.log(y12); //?output [Number: 123]
//?Do not create Number objects.The new keyword complicates the code and slows down execution speed.Number Objects can produce unexpected results:

//?When using the == operator, x and y are equal:
let x8 = 5;
let y8 = new Number(5);
console.log(x8 == y8); //?output true

//?When using the === operator, x and y are not equal, because the === operator expects equality in both type and value.
let x9 = 5;
let y9 = new Number(5);
console.log(x9 === y9); //?output false

//?javascript object cannot be compared with each other,Comparing two JavaScript objects always returns false.
let x10 = {};
let y10 = {};
console.log(x10 == y10); //?output false
console.log(x10 === y10); //?output false
