//for loop
for (let i = 0; i <= 10; i++) {
  const element = i;
  //   console.log(element);
}
//multiplication table 0 to 10
for (let i = 0; i <= 10; i++) {
  //   console.log(`Outer loop Value:${i}`);
  for (let j = 0; j <= 10; j++) {
    // console.log(`Inner loop Value:${j} and inner loop ${i}`);
    // console.log(i + "*" + j + "=" + i * j);
  }
}

let myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(myArray.length);
for (let i = 0; i < myArray.length; i++) {
  //if increment or decrement is not done for loop work for one conditions in infinite loop
  const element = myArray[i];
  console.log(element);
}

//?break and continue
for (let i = 1; i <= 20; i++) {
  if (i == 5) {
    // console.log(`Detected 5`);
    break;
  }
  //   console.log(`Value of i is ${i}`);
}
for (let i = 1; i <= 20; i++) {
  if (i == 5) {
    console.log(`Detected 5`);
    // break;//break from the loop or current scope
    continue; //skip the condition for once ,but loop continue after that
  }
  console.log(`Value of i is ${i}`);
}
