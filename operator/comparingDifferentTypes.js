console.log(2 < 12);
console.log(2 < "12");
console.log(typeof "12");
console.log(typeof (2 < "12"));
console.log(2 < "John");
console.log(2 > "John");
console.log(2 == "John");
console.log("2" < "12");
console.log("2" > "12");
console.log("2" == "12");
console.log(12 == "12");
console.log("2" + "12");
console.log(typeof "12" == typeof 2);
console.log(2 == "12");
/*//?Type Coercion in JavaScript
Comparison Operators:
When using comparison operators like <, JavaScript attempts to convert the operands to a common type before making the comparison. This is known as type coercion.
String and Number Comparison:
In this case, you are comparing a number (2) and a string ("12"). JavaScript converts the string "12" into a number for the comparison. This conversion is done using the Number() function implicitly.
Conversion Process:
The string "12" is converted to the number 12. Thus, the comparison effectively becomes:
2
<
12
2<12
Evaluation of the Expression:
Since 2 is indeed less than 12, the expression evaluates to true.*/
