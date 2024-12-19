//!hello
//*hello
//?hello
//hello
////
/* 
Converting Strings to Numbers
Converting Numbers to Strings
Converting Dates to Numbers
Converting Numbers to Dates
Converting Booleans to Numbers
Converting Numbers to Booleans*/
/*
let score = 33;
!two way of checking type
console.log(typeof score);
console.log(typeof score);
let valueInNumber = Number(score);
console.log(typeof valueInNumber);
console.log(valueInNumber);
!..............................
let b = "33abc";
let value = Number(b);
console.log(typeof Number(b));
console.log(value); //NaN
!--------------------------------
let num1 = null;
console.log(num1);
let values = Number(num1);
console.log(typeof values);
console.log(`null after conversion:`, values); //NaN

let val = undefined;
console.log(typeof val);
let value1 = Number(val);
console.log(typeof Number(val));
console.log(`undefined after conversion`, value1); //NaN

let condition = true;
console.log(condition);
let value2 = Number(condition);
console.log(typeof Number(condition));
console.log(`Boolean after conversion`, value2); //NaN

let str = "sanjeev";
console.log(typeof str);
let value3 = Number(str);
console.log(typeof Number(str));
console.log(`string after the conversion`, value3); //NaN"
*/
//?conversion into number
//"33"=>33
//"33abc"=>NaN  type is number
//true=>1;false=>0  type is number
// null=>0  type is number

//undefined=>NaN type is number
//string=>NaN type is number

//?Converting Numbers to Booleans
//?boolean to string
// let a = String(false); // returns "false"
// console.log(a);
// console.log(typeof a);
// String(false);
// console.log(false.toString()); // returns "false"
// console.log(true.toString()); // returns "true"

//?automatic data conversion
console.log(5 + null); // returns 5 because null is converted to 0
console.log("5" + null); // returns "5null" because null is converted to "null"
console.log("5" + 2); // returns "52" because 2 is converted to "2"
console.log("5" - 2); // returns 3 because "5" is converted to 5 (number)
console.log("5" * "2"); // returns 10 because "5" and "2" are converted to 5 and 2 (numbers)
