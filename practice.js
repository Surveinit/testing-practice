function capitalize(word) {
  return String(word).charAt(0).toUpperCase() + String(word).slice(1);
}

function reverseString(word) {
  reverse = "";
  for (let index = word.length - 1; index >= 0; index--) {
    reverse += word[index];
  }
  return reverse;
}

const calculator = {
  add: (var1, var2) => {
    return parseInt(var1) + parseInt(var2);
  },

  sub: (var1, var2) => {
    return parseInt(var1) - parseInt(var2);
  },

  mul: (var1, var2) => {
    return parseInt(var1) * parseInt(var2);
  },

  divide: (var1, var2) => {
    return parseInt(var1) / parseInt(var2);
  },
};

function analyzeArray(array) {
  function sum(array) {
    sum = 0;
    for (let index = 0; index < array.length; index++) {
      sum += array[index];
    }
    return sum;
  }

  function average(array) {
    return sum(array) / array.length;
  }

  function min(array) {
    return Math.min(...array);
  }

  function max(array) {
    return Math.max(...array);
  }

  let obj = {
    average: average(array),
    min: min(array),
    max: max(array),
    length: array.length,
  };

  return obj;
}

function caesarCipher(word, shift) {
  const smallAlphabets = Array.from({ length: 26 }, (_, index) =>
    String.fromCharCode(97 + index),
  );
  const bigAlphabets = Array.from({ length: 26 }, (_, i) =>
    String.fromCharCode(65 + i),
  );

  const specialCharacters = [
    "!",
    "@",
    "#",
    "$",
    "%",
    "^",
    "&",
    "*",
    "(",
    ")",
    "-",
    "_",
    "=",
    "+",
    "[",
    "]",
    "{",
    "}",
    "\\",
    "|",
    ";",
    ":",
    "'",
    '"',
    ",",
    ".",
    "<",
    ">",
    "/",
    "?",
    "`",
    "~",
    " ",
  ];

  let encode = "";

  for (let index = 0; index < word.length; index++) {
    if (smallAlphabets.includes(word[index])) {
      const new_index = (smallAlphabets.indexOf(word[index]) + shift) % 26;
      encode += smallAlphabets[new_index];
    } else if (bigAlphabets.includes(word[index])) {
      const new_index = (bigAlphabets.indexOf(word[index]) + shift) % 26;
      encode += bigAlphabets[new_index];
    } else if (specialCharacters.includes(word[index])) {
      encode += word[index];
    }
  }
  return encode;
}

module.exports = {
  capitalize,
  reverseString,
  calculator,
  analyzeArray,
  caesarCipher,
};
