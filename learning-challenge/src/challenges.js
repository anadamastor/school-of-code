// README: In order for the tests to run successfully, keep the "export" keyword and do not change the name of the functions.

// TESTING: Go to learning-challenge and execute `npm run test` in your terminal to check your progress.

// __________________________________________
// TICKET 1a: Create a function
// Instructions: Implement a function called sum() that takes two parameters and returns their sum.

// export const sum = () => {};
export const sum = (a, b) => {
  return a + b;
};

// __________________________________________
// TICKET 1b: Create a function
// Instructions: Implement a function called multiply() that takes two parameters and returns their product.

export const multiply = () => {};
// export const multiply = (a, b) => {
//   return a * b;
// };

// __________________________________________
// TICKET 1c: Create a function
// Implement a function called greetUser() that takes a parameter name and returns a greeting message including the name.
// Example: Hi Derek!

// export const greetUser = () => {};
export const greetUser = (name) => {
  return `Hi ${name}!`;
};

// __________________________________________
// TICKET 2: Invoke a function
// Call the sum function with a = 100 and b = 10 and save it within a variable called sumResult.

// export const sumResult = () => {};
export const sumResult = sum(100, 10);

// __________________________________________
// Ticket 3 - Optional
// Implement a function that returns "Hi, I am Jordan* and I am 25* years old. I have 2* cats." - the words with asterisks are meant to be dynamic! What do you need to do that?

// export const introduceUser = () => {};
export const introduceUser = (firstName, age, catsNumber) => {
  return `Hi, I am ${firstName} and I am ${age} years old. I have ${catsNumber} cats.`;
};
