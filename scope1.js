// function exampleFunction() {
//   const x = "declared inside function"; // x can only be used in exampleFunction
//   console.log("Inside function");
//   console.log(x);
// }
// exampleFunction();
// console.log(x); // Causes error

// const x = "declared outside function";

// exampleFunction();

// function exampleFunction() {
//   console.log("Inside function");
//   console.log(x);
// }

// console.log("Outside function");
// console.log(x);

// // block scope is not applicable for var keyword like example below
// {
//   var a = 1;
// }
// console.log(a); // 1

//block scope is applicable in let,const and code having {}

// {
//   const b = 1;
// }
// console.log(b); // ReferenceError: x is not defined

// var c = 1;
// {
//   var c = 2;
// }
// console.log(c); // 2

// const c = 1;
// {
//   const c = 2;
// }
// console.log(c); // 1; does not throw SyntaxError
/*Note that the block-scoped const c = 2 does not throw a SyntaxError: Identifier 'c' has already been declared because it can be declared uniquely within the block.*/
// "use strict";

{
  foo(); // Logs "foo"
  function foo() {
    console.log("foo");
  }
}

// foo(); // ReferenceError: foo is not defined
