import {
  sum,
  multiply,
  greetUser,
  sumResult,
  introduceUser,
} from "./challenges.js";

describe("Challenges", () => {
  test(" sum function - adds 1 and 2 to equal 3", () => {
    expect(sum(1, 2)).toBe(3);
  });

  test("multiply function - multiply 2 and 4 to equal 8", () => {
    expect(multiply(2, 4)).toBe(8);
  });
  test("greetUser function - it should return 'Hi Ervis!'", () => {
    expect(greetUser("Ervis")).toBe("Hi Ervis!");
  });

  test("sumResult should be 110", () => {
    expect(sumResult).toBe(110);
  });
  test("introduceUser should return the correct string", () => {
    const firstName = "Jack";
    const age = 22;
    const catsNumber = 21;
    expect(introduceUser(firstName, age, catsNumber)).toBe(
      `Hi, I am Jack and I am 22 years old. I have 21 cats.`
    );
  });
});
