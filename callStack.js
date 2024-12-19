//?How does javascript code execute
/*javascript execution context=how a javasciprt file gets executed or run

When a js get a code file, the first thing created is global execution context which is set in the this variable which is empty {} incase of node or editor but incase of browser there is window global object i.e global EC 

Javascript is a single threaded programming language.

Global Execution context
Function Execution context
Eval Execution context

{}
Memory /creation phase
Execution phase
*/
let val1 = 10;
let val2 = 5;
function addNum(num1, num2) {
  let total = num1 + num2;
  return total;
}
let result1 = addNum(val1 + val2);
let result2 = addNum(10, 2);

//global execution =>this.............global environment
/*memory phase==>collect all variable and put undefined in all variable
//?1st cycle
val1=>undefined
val2=>undefined
addNum=>definition
result1=>undefined
result2=>undefined
*/
/*execution phase
val1=10
val2=5
addNum=another execution context created for addnum function=new variable environment +execution thread

//?memory phase for addnum
val1=undefined
val2=undefined
total=undefined

//?execution context for addnum
 num1=10
 num2=5
 total=15
 //? total is returned to parent executional context or global executional context
 //? the new global executional context created at the mid got deleted after its work is done

 NVE+THREAD

 memory phase
 execution phase
 //?same as above case

 //? Call Stack
 
 three()
 two()
 one()//removed after it is executed from stack//one function get executed one at a time
 global execution context

 //? incase of nested function in callstack it follow the stack rule like lIFO...assume two is inside one and three is inside two
 three()
 two()
 one()
 global execution context

 //?in this case three get execute first and remove from stack ,and then two get executed and remove from stack and one get executed and remove form stack
 */
