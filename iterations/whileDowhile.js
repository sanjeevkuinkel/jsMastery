//? while and dowhile loop
let i = 0;
while (i <= 10) {
  //   console.log(`Value of i is ${i}`);
  i += 2;
}
let myArray = ["a", "b", "c"];
let j = 0;
while (j < myArray.length) {
  //   console.log(`Value of j is ${myArray[j]}`);
  j++;
}
//?dowhile loop
//? check conditions at last
//let score=11;exception it will get printed in dowhile loop
let score = 1;
do {
  console.log(`Score is ${score}`);
  score++;
} while (score <= 10);
