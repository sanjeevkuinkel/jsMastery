//?foreach return undefined manually or automatically
//foreach and map are injected at their prototype which can be seen on browser by default.Higher order functions

//?he forEach() method is an iterative method. It calls a provided callbackFn function once for each element in an array in ascending-index order.
// forEach() always returns undefined
/*There is no way to stop or break a forEach() loop other than by throwing an exception. If you need such behavior, the forEach() method is the wrong tool.*/
/*forEach() expects a synchronous function — it does not wait for promises. Make sure you are aware of the implications while using promises (or async functions) as forEach callbacks.

js
*/
const month = ["jan", "feb", "march", "april", "", ,]; //sparse arrays
//callbackFn is invoked only for array indexes which have assigned values. It is not invoked for empty slots in sparse arrays
// month.forEach(function (item) {
//   console.log(item);
// });
month.forEach((item) => {
  console.log(item);
});
function printMe(item) {
  console.log(item);
}
month.forEach(printMe);
month.forEach((item, index, arr) => {
  console.log(item, index, arr);
});
const myCoding = [
  {
    languageName: "JavaScript",
    languageFileName: "js",
  },
  {
    languageName: "JAVA",
    languageFileName: "java",
  },
  {
    languageName: "python",
    languageFileName: "py",
  },
  {
    languageName: "typescript",
    languageFileName: "ts",
  },
];
const values = myCoding.forEach((item, index, array) => {
  //   console.log(item.languageFileName);
  //   console.log(array);
  console.log(`Index ${index}:`, item);
});
