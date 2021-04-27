/* Variables and Scopes
* locals: let, const
* global: var
*/

let myName = 'I am global';
var yourName = "Kevin";

//Example 1
if (true) {
    console.log(myName)
}

//Example 2
if (true) {
    let myName = "I am local"
    var yourName = "Karl"
    console.log(myName)
    console.log(yourName)
}

//Example 3
if (true) {
    let nestedName = "I am local"
}

console.log(nestedName)


// With Functions
//Example 1
const printName = () => console.log(myName)

const newPrintName = () => {
    let myName = "Luigi"
    printName()
}

newPrintName();

//Example 2
function outer () {
    function inner () {
        console.log('Inside first()');
        
        console.log('myName is currently equal to:', myName);
    }
    
    const myName = 'Cernan';
    inner();
}
outer();

//Implied Globals
//Define three globals
impliedGlobal = 2; // antipattern
var global_var = 1; // also antipattern since ES6
function thirdGlobal() {
   function_global = 3; // antipattern
}
thirdGlobal; // export default as module

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