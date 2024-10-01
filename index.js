var name="pooja";//Declaring and assigning the value;
name='riya';//re-assigning
var name="sana"
console.log(name);//accesing the value


let firsName ;//declaring
firstName='pooja';//initializing the value
firstName='neha';//re-assigning
// let firstName='sana';//Re-declaring does not works in let
console.log(firstName);

const lastName ="Omkar";
lastName="Rangaswamy"

console.log(lastName);

let a = 1;

if (a === 1) {
    let a = 2;

    console.log(a); //2
}

console.log(a); //1

const x = 1;

if (x === 1) {
    const y = 2; // You cannot re-assign the value similar to let variable

    console.log(y); //2
}

console.log(x); //1

// var
var x1 = 10;
var x1 = 20; // Redeclaring is allowed

// let
let y = 10;
y = 20; // Reassigning is allowed
// let y = 30; // Redeclaring in the same scope throws an error

// const
const z = 10;
// z = 20; // Error: Reassignment is not allowed

function testVar() {
    if (true) {
      var x = 10;
    }
    console.log(x); // 10 (even though declared inside the if-block, it's available outside)
  }
  testVar();
  
  function testLetConst() {
    if (true) {
      let y = 10;
      const z = 20;
    }
    // console.log(y); // Error: y is not defined (block-scoped)
    // console.log(z); // Error: z is not defined (block-scoped)
  }
  testLetConst();
  
  console.log(a1); // undefined (due to hoisting)
var a1 = 10;


// console.log(b); // ReferenceError: Cannot access 'b' before initialization
let b = 20;


var x2 = 10;
var x2 = 20; // No error, allowed


let y1 = 10;
y1 = 20; // Reassignment is allowed
// let y = 30; // Error: Cannot redeclare 'y'

const z1 = 10;
// z = 20; // Error: Assignment to constant variable

const obj = { a: 1 };
obj.a = 2; // Allowed: object properties can be changed

for (var i = 0; i < 3; i++) {
    setTimeout(function () {
      console.log(i);
    }, 1000);
  }
  // Output: 3, 3, 3 (all 3s because 'var' is function-scoped)
  
  function test() {
    console.log(x); // ReferenceError: Cannot access 'x' before initialization
    let x = 10;
  }
  test();
  
  