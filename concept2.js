// Data

//Variables
// - Stores the value of the data
// - labels the data

// Old way of declaring variables
var name = "Sebastian";

// New way of declaring variables - Introduced in ES6
let name1 = "Sebastian"; // Can be changed
const name2 = "Sebastian"; // Cannot be changed

name1 = "Nabil"; // it will show Nabil because it reassigned the value 

// Arrays
             //0  1  2  3  4 = index number
let numbers = [1, 2, 3, 4, 5]; // can store multiple values
console.log(numbers);
console.log(numbers[3]); // will show 1 because it is the first value in the array

// Objects
let person = {
    name: "Sebastian",
    age: 25,
    isStudent: false
};

console.log(person);
console.log(person.age); // will show Sebastian because it is the first value in the object (dot notation)
