// print function
/*console.log("hello world");
console.log(105); // prints its as such
console.log("1" + 10 + 3);
console.log(10 + 3);
console.log(3 > 4); // gives the boolen thing

//undefined and null
// undefined is given by js
//const name;
//console.log(name);
/* about null? */

//if else condition
//undefined or null gives false
/*const a = 10;
const b = 12;
if (a > b) {
  console.log("a is bigger");
} else {
  console.log("a is smaller");
}*/
/*const n = 10;
for (let i = 0; i < n; i++) {
  console.log(i);
}

for (let i = 0; i < n; console.log(i), i++);*/

// ARRAYS
/*const a = [12, 13, "ayush", null, undefined];
//square bracket helps you to access the values in ARRAYS
//nth element is [n-1]
console.log(a[2]);
for (let i = 0; i < 10; console.log(a[i]), i++);

//JASON=objects

const person_details = {
  name: "Mani",
  surname: "Mozhi",
  age: 5,
  cartoons_liked: ["shinchan", "naruto"],
  schools: [
    {
      name: "KV",
      classes: "1-6",
    },
    {
      name: "nodi school",
    },
  ],
};

// operator to access jason object (.)
console.log(person_details);

// if you want to avoid errors
try{
    const a=10;
    a=11;
}catch (err){
    console.log(10+2);
}

try{
    const a=10;
    throw new error("a is constant");
    }catch (err){
        console.log(err)
    }*/

//functions
/*function square(x) {
  //local variable x
  return x * x;
}

const a = 10;
const b = 12;
if (a > b) {
  let c = true;
  console.log("a is greater ", c);
} else {
  console.log("b is greater");
}
// its exemption in js that even inside main function variables are function specific
// on running the code , it says c is undefined
console.log(c);*/

function break_cake() {
  cake / 4;
}

// functions
function cook_maggie(cake) {
  cake = break_cake;
}

//npm init-- create a node.js project
// npm i-- install librararies
// npm i cowsay
var cowsay = require("cowsay");

console.log(
  cowsay.say({
    text: "I'm a moooodule",
    e: "$$",
    T: "() ",
  })
);
