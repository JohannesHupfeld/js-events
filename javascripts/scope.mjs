// /* Variables and Scopes
// * locals: let, const
// * global: var
// */

// let myName = 'I am global';
// var yourName = "Kevin";

// Example 1
// if (true) {
//     console.log(myName)
// }                           // *** returns "I am global", didnt find variables within block so looked for variables in global
//     ---------------------------------------------------------------------------

// Example 2
// if (true) {
//     let myName = "I am local"
//     var yourName = "Karl"
//     console.log(myName)
//     console.log(yourName)
// }                              // *** returns "I am local " & "Karl" --> scope has one direction, inward to outward, it looks for those variables within the block, if it finds them it uses them if not then goes global 
//     ---------------------------------------------------------------------------

// Example 3
// if (true) {
//     let nestedName = "I am local"
// }

// console.log(nestedName)  // ***  code breaks because nestedName is not defined. If it was var it would print "I am local"
        
      
// With Functions
// Example 1             // *** function expression with ES6 notation (arrow function)
// let myName = 'I am global';
// const printName = () => console.log(myName)

// const newPrintName = () => {
//     let myName = "Luigi"
//     printName()
// }

// newPrintName();     // *** prints "I am global" -->  printName was not defined inside of newPrintName and therefore it doesnt see the newName variable but it sees the global variable. What matters is not where the function got invoked but declared in the matter of scope.

// Example 2
let myName = 'I am global';
function outer () {
    function inner () {
        console.log('Inside inner()');
        
        console.log('myName is currently equal to:', myName);
    } // gets read and hoisted
    
    const myName = 'Cernan'; // this gets read but not hoisted since its not a var 
    inner();  // inner gets invoked here
}
outer(); // prints out inside inner and myName is currently equal to: Cernan. when a function is defined inside another functon it has access to the lexical(see notes) scope

//Implied Globals
//Define three globals
// "use strict"
impliedGlobal = 2; // antipattern
var global_var = 1; // also antipattern since ES6
function thirdGlobal() {
   function_global = 3; // antipattern
}
export default thirdGlobal; // export default as module

// Log the before & after deletion values
console.log("Before deletion: ", typeof global_var);
delete global_var;
console.log("After deletion: ",typeof global_var);

console.log("Before deletion: ", typeof impliedGlobal);
delete impliedGlobal;
console.log("After deletion: ", typeof impliedGlobal);

console.log("Before deletion: ", typeof function_global);
delete function_global;
console.log("After deletion: ", typeof function_global);

// var's cannot be deleted with a dlete key word