//?Immediately Invoked Function Expression(IIFE)
//?   ()function definition  and () function execution   ()()
//? IIFE is used in order to remove the global scope problem or pollution and used to immediately execute the function

(function immediate() {
  //?named IIFI
  console.log(`Db connected`);
})();
//?unnamed IIFI
(() => {
  console.log(`Db connected using arrow`);
})();
//?semicolon is required otherwise it will show error
((name) => {
  console.log(`Db connected using arrow ${name}`);
})("sk");
