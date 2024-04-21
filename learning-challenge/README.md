# Javascript Functions

#### Environment setup

This challenge will run automated tests to check your solution. To this end we need to install [Jest](https://jestjs.io/), a js testing framework.
Run the package installer `yarn install` or `npm install`

###### Testing

Install babel preset `npm install @babel/preset-env --save-dev`
Finally, run `yarn test` or `npm test` and Jest will print the results of your progress.
___

### Why functions?

Functions are a very abstract concept to grasp, especially for students that do no have a STEM background.

Understanding as soon as possible how they work is extremely important as it will set the foundations for more additional and complex concepts.

The purpose of this lecture is to reinforce the how functions are created, how they work and what they return.

___
### Creating functions

Functions in JavaScript are like small, reusable programs within a program. 

They encapsulate a set of instructions that can be executed whenever needed. There are three common ways to create functions in Javascript.

- Function Declaration: You declare the function using the function keyword followed by the function name and its code block.

```js
// Function declaration
function greet() {
  console.log("Hello!");
}
```

- Function Expression: With function expressions, you can assign a function to a variable. This allows functions to be passed around as values and assigned to other variables.
```js
// Function expression
const sayHello = function() {
  console.log("Hi!");
};
```
- Arrow Functions: Arrow functions provide a more concise syntax for writing functions. They are particularly useful for short, one-line functions.

```js
// Arrow function
const welcome = () => {
  console.log("Welcome!");
};
```
___
### Invoking Functions:
Once we've defined a function, we can call it, or invoke it, to execute the code inside. 
Invoking a function is as simple as writing its name followed by parentheses (). This tells JavaScript to execute the code inside the function.
```js
// Calling functions
greet(); // Output: Hello!
sayHello(); // Output: Hi!
welcome(); // Output: Welcome!
```
___
### Parameters and Arguments:

Functions can accept inputs, called parameters, which allow them to be more flexible and reusable. 
When we define a function, we can specify parameters inside the parentheses. 

When we call the function, we provide values, called arguments, for those parameters and the same code will be executed with a different
```js
// Functions with parameters
function greet(name) {
  console.log(`Hello, ${name}!`);
}

greet("Alice"); // Output: Hello, Alice!
greet("Jason"); // Output: Hello, Jason!
```
___
### Returning Values
So far we have logged test.
Functions can also produce outputs, or return values, using the return keyword. 
This allows functions to compute a result and pass it back to the code that called them. Returned values can then be stored in variables or used in other parts of the program.
```js
// Functions with return values
function add(a, b) {
  return a + b;
}

const result = add(3, 5);
console.log(result); // Output: 8
```
---
### Key take-aways
- Functions are reusable blocks of code.
- Functions are called or invoked using their name followed by parentheses ()
- Functions can accept inputs called parameters, which are specified when defining the function.
- When calling the function, actual values, called arguments, are passed to these parameters.
- Functions can produce outputs using the return keyword.
- Returned values can be stored in variables or used in other parts of the program.


___
##### Challenges:
Go [here](./src//challenges.js) and put your knowledge of functions to the sword!

