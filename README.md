# JS_02
**Definition:** A variable is a container for storing data in JavaScript.

**Declaration:** Variables are declared using the **`var`** keyword.

**Naming Rules:** Variable names should start with a letter or underscore, followed by letters, numbers, or underscores.

1. Scope:
var:

Function-scoped: Variables declared with var are available throughout the function in which they are declared, regardless of block scope.
Interview Tip: You might be asked to identify issues caused by using var inside loops or conditions, as var doesn’t respect block-level scope.
Example:
javascript
Copy code
function testVar() {
  if (true) {
    var x = 10;
  }
  console.log(x); // 10 (even though declared inside the if-block, it's available outside)
}
testVar();
let and const:

Block-scoped: Variables declared with let and const are limited to the block (e.g., {}) in which they are defined.
Interview Tip: You might be asked how let and const solve problems of variable leaks and unexpected behavior in loops or conditionals.
Example:
javascript
Copy code
function testLetConst() {
  if (true) {
    let y = 10;
    const z = 20;
  }
  // console.log(y); // Error: y is not defined (block-scoped)
  // console.log(z); // Error: z is not defined (block-scoped)
}
testLetConst();
2. Hoisting:
var:

Variables declared with var are hoisted to the top of their scope and initialized with undefined, which means you can reference them before the actual declaration, but this can lead to errors.
Interview Tip: Be ready to explain how hoisting works and why it can lead to bugs if you’re unaware of it.
Example:
javascript
Copy code
console.log(a); // undefined (due to hoisting)
var a = 10;
let and const:

These variables are hoisted but are not initialized, which results in a "Temporal Dead Zone" (TDZ). You cannot access them before the declaration line.
Interview Tip: Interviewers often ask about the TDZ and why it exists in let and const declarations.
Example:
javascript
Copy code
// console.log(b); // ReferenceError: Cannot access 'b' before initialization
let b = 20;
3. Reassignment and Redeclaration:
var:

Can be reassigned and redeclared within its scope.
Interview Tip: Interviewers may ask you to compare how var leads to variable overwriting, causing hard-to-debug issues in larger applications.
Example:
javascript
Copy code
var x = 10;
var x = 20; // No error, allowed
let:

Can be reassigned but cannot be redeclared within the same scope. This is useful for preventing accidental overwrites.
Interview Tip: Demonstrate why let is more predictable in larger codebases.
Example:
javascript
Copy code
let y = 10;
y = 20; // Reassignment is allowed
// let y = 30; // Error: Cannot redeclare 'y'
const:

Cannot be reassigned or redeclared. Once a value is assigned to a const, it cannot be changed, ensuring immutability (for primitive types). However, for objects, properties can still be modified.
Interview Tip: Explain the use cases of const for immutable values and how it can be used for objects/arrays.
Example:
javascript
Copy code
const z = 10;
// z = 20; // Error: Assignment to constant variable

const obj = { a: 1 };
obj.a = 2; // Allowed: object properties can be changed
4. Best Practices:
Prefer const: When writing modern JavaScript, always use const by default unless you specifically need to reassign the variable.
Use let: When you anticipate the need to reassign a value later (like in loops or conditionally changing values).
Avoid var: In modern JavaScript development, var is rarely used due to its function-scoping and hoisting behavior, which can lead to bugs.
5. Interview Scenarios:
Scenario 1: Variable Scoping in Loops:

javascript
Copy code
for (var i = 0; i < 3; i++) {
  setTimeout(function () {
    console.log(i);
  }, 1000);
}
// Output: 3, 3, 3 (all 3s because 'var' is function-scoped)
In the above example, var is function-scoped, so the value of i is shared across iterations of the loop, causing all the timeouts to log the same value (3).

Solution using let:

javascript
Copy code
for (let i = 0; i < 3; i++) {
  setTimeout(function () {
    console.log(i);
  }, 1000);
}
// Output: 0, 1, 2 (each iteration has its own scoped 'i')
Scenario 2: Temporal Dead Zone:

javascript
Copy code
function test() {
  console.log(x); // ReferenceError: Cannot access 'x' before initialization
  let x = 10;
}
test();
This demonstrates the TDZ, where let and const are not initialized until their declaration, preventing accidental access before they are defined.
