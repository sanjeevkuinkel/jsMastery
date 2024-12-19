//?A closure is formed when a function is defined within another function, allowing the inner function to access the variables and parameters of the outer function even after the outer function has completed execution.

function one() {
  const username = "sanjeev";
  function two() {
    const website = "youtube";
    console.log(username);
  }
  //   console.log(website); //?throw error because website is not declare in this scope
  two();
}
one();

if (true) {
  const username = "sanjeev";
  if (username === "sanjeev") {
    const website = "youtube";
    console.log(username + website);
  }
  //   console.log(website);//?throw error
}
// console.log(username);//?throw error
//?Two types of function  while calling one cause error
//?calling before declaration is valid
addOne(5); //?doesnot throw error and execute the function
function addOne(num) {
  return num + 1;
}
//?calling before declaration is not valid
//addTwo(5);//?throw error if we print this statement
const addTwo = function (num) {
  return num + 2;
};
addTwo(5);
