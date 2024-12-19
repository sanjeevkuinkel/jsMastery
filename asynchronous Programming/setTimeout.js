//?The setTimeout function in JavaScript is used to execute a function or a block of code after a specified period of time. It’s a built-in function provided by the browser or Node.js.
//?syntax: setTimeout(function, milliseconds, param1, param2, ...)
/*//?Parameters:
function: The function to be executed after the delay.
delay: The time to wait before executing the function, in milliseconds (1000 ms = 1 second).
param1, param2, ... (Optional): Additional arguments passed to the function when it is executed.*/
//?Return Value:Returns a numeric ID that can be used with clearTimeout to cancel the timeout.
setTimeout(() => {
  console.log("Hello after 2 seconds");
}, 2000);

function greet(name) {
  console.log(`Hello, ${name}!`);
}

setTimeout(greet, 3000, "Alice");

const timeoutId = setTimeout(() => {
  console.log("This will not be logged");
}, 5000);

clearTimeout(timeoutId); // Cancels the timeout
//?Notes:setTimeout does not block the execution of other code. It schedules the function to run asynchronously after the delay.If delay is set to 0, the callback will execute as soon as possible after the current execution stack is cleared.

const stopDelay = setTimeout(() => {
  console.log(`hello asnchronous coding`);
}, 7000);
clearTimeout(stopDelay);

const stopSync = setTimeout(() => {
  console.log(1 + 2);
}, 1000);
