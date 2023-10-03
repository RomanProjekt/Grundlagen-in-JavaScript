//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments

function addAll() {
  let result = 0;
  for (let i = 0; i < arguments.length; i++) {
    result += arguments[i];
  }
  return result;
}

function func1(a, b, c) {
  console.log(arguments[0]);
  // Expected output: 1

  console.log(arguments[1]);
  // Expected output: 2

  console.log(arguments[2]);
  // Expected output: 3
}

func1(1, 2, 3);
