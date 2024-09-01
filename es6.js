// 1
const name = "Alice";
if (true) {
    let name = "Bob";
    console.log(name);
}
console.log(name);
// let只在函数block中有效， const可在全局使用

// 2
var add = (a,b) => a+b;

// 3
let greeting = "Hello," + name + "\n" + "Welcome"

// 4
const person = {
    name:"Alice",
    age:25,
    city:"Sydney"
};

const {name, age} = person;

const greet =  (name, age)=> {
    console.log(`Hello, my name is ${name} and I am ${age} years old.`);
  }

//   5
const calculateArea = (weight, height = weight) =>weight * height;

// 6
const sum = arr => arr.reduce((acc, num) => acc + num, 0);