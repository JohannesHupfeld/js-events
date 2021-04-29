// Primitives are pass-by-value
function passByValueWithInt(var1, var2) {
    var1 += 1;
    var2 += 2;
    console.log("Inside the function var1 and var2 are: ", var1, var2)
}
let a = 2;
let b = 1;

console.log("Before the function var1 and var2 are: ", a, b)
passByValueWithInt(a, b)
console.log("After the function var1 and var2 are: ", a, b)

// Objects are pass-by-value when reassigned
function passByValueWithObj(var1, var2) {
    var1 = {"second": 2};
    var2 = {"first": 1};
    console.log("Inside the function var1 and var2 are: ", var1, var2)
}
let a = {"first": 1};
let b = {"second": 2};

console.log("Before the function var1 and var2 are: ", a, b)
passByValueWithObj(a, b)
console.log("After the function var1 and var2 are: ", a, b)

// Objects are pass-by-reference when you change their internals
function passByReferenceWithObj(var1, var2) {
    var1.first = 2;
    var2.second = 1;
    console.log("Inside the function var1 and var2 are: ", var1, var2)
}
let a = {"first": 1};
let b = {"second": 2};

console.log("Before the function var1 and var2 are: ", a, b)
passByReferenceWithObj(a, b)
console.log("After the function var1 and var2 are: ", a, b)

// Arrays are pass-by-value when you try to re-assign them
function passByReferenceWithArray(var1, var2) {
    var1 = [1];
    var2 = [2];
    console.log("Inside the function var1 and var2 are: ", var1, var2)
}
let a = [];
let b = [];

console.log("Before the function var1 and var2 are: ", a, b)
passByReferenceWithArray(a, b)
console.log("After the function var1 and var2 are: ", a, b)

// Arrays are pass-by-reference when you change their internals
function passByReferenceWithArray(var1, var2) {
    var1.push(1);
    var2.push(2);
    console.log("Inside the function var1 and var2 are: ", var1, var2)
}
let a = [];
let b = [];

console.log("Before the function var1 and var2 are: ", a, b)
passByReferenceWithArray(a, b)
console.log("After the function var1 and var2 are: ", a, b)