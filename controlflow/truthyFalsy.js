const userEmail = "s@gmail.com";
//?const userEmail=""  false value
//? const userEmail=[]  true value
if (userEmail) {
  console.log("Got User Email.");
} else {
  console.log("dont have user email");
}

/*falsy values
false,0,-0(negative zero), BigInt 0n,"",null,undefined,NaN
*/

/*//?truthy values
"0","false"," "(space between ""),[],{},function(){}
*/

/*
false==0   true
false== ""  true
0==""   true
*/
//?check object is empty or not
const emptyObj = {};
if (Object.keys(emptyObj).length === 0) {
  console.log("OBject is empty.");
}
//?check array is empty or not
const emptyArray = [];
if (emptyArray.length === 0) {
  console.log("Array is empty");
}
