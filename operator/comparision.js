//?double equal == equal to
let condition = true;
let a = 2;
let b = 2;
if (condition == a) {
  console.log(`Double equal executed`);
} else {
  console.log(`not equal`);
}
//?equal value and equal type
if (condition === a) {
  console.log(`Double equal executed`);
} else {
  console.log(`not equal`);
}
console.log(typeof condition);
console.log(typeof a);

if (condition != a) {
  console.log(`not equal`);
} else {
  console.log(`both are equal with ==`);
}

//?!==	not equal value or not equal type

if (condition !== a) {
  console.log(`not equal`);
} else {
  console.log(`both are equal with ==`);
}

//greater than,less than
if (a < b) console.log(`b is greater number`);
else if (b < a) console.log(`A is greater number`);
else if (a > b) console.log(`a is greater number`);
else if (b > a) console.log(`b is greater number`);
else if (a <= b) console.log(`a is less than or equal to b`);
else if (b <= a) console.log(`b is less than or equal to a`);
else if (a >= b) console.log(`a is greater than or equal to b`);
else if (b >= a) console.log(`b is greater than or equal to a`);
