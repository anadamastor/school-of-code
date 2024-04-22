# Javascript Functions

#### Environment setup

This challenge will run automated tests to check your solution. To this end we need to install [Jest](https://jestjs.io/), a js testing framework.

Go into the `learning-challenge` folder and run the package installer `yarn install` or `npm install`.

###### Testing

Run `yarn test` or `npm test` and Jest will print the results of your progress.

---

### Why functions?

Functions are a very abstract concept to grasp, especially for students that do no have a STEM background.

Understanding them as soon as possible and how they work is extremely important as it will set the foundations for more additional and complex concepts.

The purpose of this lecture is to give a solid overview on how functions are created and how they work.

---

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

- Function Expression: With function expressions, you can assign a function to a variable. This allows functions to be passed around as values and assigned to other variables for greater code flexibility.

```js
// Function expression
const sayHello = function () {
  console.log("Hi!");
};
```

- Arrow Functions: Arrow functions provide a more concise syntax for writing functions. They are particularly useful for short, one-line functions. Extremely important for event handlers.

```js
// Arrow function
const welcome = () => {
  console.log("Welcome!");
};
```

---

### Invoking Functions:

When you define a function, you're creating a reusable block of code. 
However, until you invoke or call that function, the code inside it won't execute. 

Invoking a function triggers the execution of the code it contains, allowing you to perform tasks, manipulate data, or produce outputs.

```js
// Calling functions
greet(); // Output: Hello!
sayHello(); // Output: Hi!
welcome(); // Output: Welcome!
```

---

### Parameters and Arguments:

Functions can accept inputs, called parameters, which allow them to be more flexible and reusable.
When we define a function, we can specify parameters inside the parentheses.

When we call the function, we provide values, called arguments, for those parameters, and the same code will be executed with a different set of data each time, allowing for dynamic and flexible behavior in our programs.

```js
// Functions with parameters
function greet(name) {
  console.log(`Hello, ${name}!`);
}

greet("Alice"); // Output: Hello, Alice!
greet("Jason"); // Output: Hello, Jason!
```

---

### Returning Values

So far we have only logged text.
Functions can also produce outputs, or return values, using the `return` keyword.
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
- Functions are called or invoked using their name followed by parentheses ().
- Functions can accept inputs called parameters, which are specified when defining the function.
- When calling the function, actual values, called arguments, are passed to these parameters.
- Functions can produce outputs using the `return` keyword.
- Returned values can be stored in variables or used in other parts of the program.

---

##### Challenges:

Go [here](./src//challenges.js) to put your knowledge of functions to the sword!
