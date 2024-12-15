function foo(a, b) {
  // Handle null values by treating them as 0
  a = (a === null) ? 0 : a;
  b = (b === null) ? 0 : b;
  return a + b; 
}

console.log(foo(1, null)); // 1
console.log(foo(null, 1)); // 1
console.log(foo(1, 2)); // 3

//Alternative solution: Throw an error if either input is null
function foo(a, b) {
  if (a === null || b === null) {
    throw new Error('Inputs cannot be null');
  }
  return a + b;
}

//console.log(foo(1, null)); // Throws an error
//console.log(foo(null, 1)); // Throws an error
console.log(foo(1, 2)); // 3