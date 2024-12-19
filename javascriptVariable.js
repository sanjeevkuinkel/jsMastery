//?Variables are containers for storing values.
//?The let and const keywords were added to JavaScript in 2015.It's a good programming practice to declare all variables at the beginning of a script.

/*The general rules for constructing names for variables (unique identifiers) are:

Names can contain letters, digits, underscores, and dollar signs.
Names must begin with a letter.
Names can also begin with $ and _ (but we will not use it in this tutorial).
Names are case sensitive (y and Y are different variables).
Reserved words (like JavaScript keywords) cannot be used as names.*/
//?JavaScript identifiers are case-sensitive.
let carName;
var busName;
//?After the declaration, the variable has no value (technically it is undefined).
const myId = 1432;
let myEmail = "sk@gmail.com";
var myPassword = "sk@1234";
myCity = "bhakundebeshi";
//myId=2  not allowed to change constant
myEmail = "sk";
myPassword = "skfofei";
myCity = "dhulikhel";
console.table([myId, myEmail, myPassword, myCity]);
/*//?result undefined while consoling before initalization in var but throw error on const,let It is considered good programming practice to always declare variables before use.
console.log(num);
var num = 5; */
// ?-----------One Statement, Many Variables---------
let person = "John Doe",
  cacyclrName = "Volvo",
  price = 200;
let person1 = "John Doe",
  ca1rName = "Volvo",
  pr1ice = 200;

//?Re-Declaring JavaScript Variables is only possible with var and doesnot lose it value,You cannot re-declare a variable declared with let or const.
//?You can also add strings, but strings will be concatenated:
//?If you put a number in quotes, the rest of the numbers will be treated as strings, and concatenated.
let x = "John" + " " + "Doe";
let y = "5" + 2 + 3;
console.log(x, y);

//?JavaScript Dollar Sign $
/*Since JavaScript treats a dollar sign as a letter, identifiers containing $ are valid variable names:*/
let $ = "Hello World";
let $$$ = 2;
let $myMoney = 5;
