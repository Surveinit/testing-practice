const {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
  analyzeArray,
} = require("./practice.js");

// Capitalize test
it("capitalize, takes hello returns Hello", async () => {
  expect(capitalize("hello")).toBe("Hello");
});

// -------------------------------------------------------------------

// ReverseString test
it("reverseString, takes hello returns olleh", async () => {
  expect(reverseString("hello")).toBe("olleh");
});

// -------------------------------------------------------------------

// Calculator tests
// -> add
it("calculator.add, takes 2, 4 returns 6", async () => {
  expect(calculator.add(2, 4)).toBe(6);
});

// -> sub
it("calculator.sub, takes 2, 4 returns -2", async () => {
  expect(calculator.sub(2, 4)).toBe(-2);
});

// -> mul
it("calculator.mul, takes 2, 4 returns 8", async () => {
  expect(calculator.mul(2, 4)).toBe(8);
});

// -> divide
it("calculator.divide, takes 2, 4 returns 0.5", async () => {
  expect(calculator.divide(2, 4)).toBe(0.5);
});

// -------------------------------------------------------------------

// caesarCipher test
it("caesarCipher, takes a string and a shift factor and returns it ", async () => {
  expect(caesarCipher("abc", 2)).toBe("cde");
});

it("caesarCipher, wrapping from z to a ", async () => {
  expect(caesarCipher("xyz", 3)).toBe("abc");
});

it("caesarCipher, Punctuation, spaces, and other non-alphabetical characters should remain unchanged ", async () => {
  expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
});

// -------------------------------------------------------------------

// analyzeArray
it("analyzeArray, should return correct average, min, max, and length ", async () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});
