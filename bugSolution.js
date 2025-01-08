function foo(a, b) {
  if (a === null || a === undefined || b === null || b === undefined) {
    return null;
  }
  return a + b;
}

console.log(foo(1, 2)); // Output: 3
console.log(foo(null, 2)); // Output: null
console.log(foo(1, null)); // Output: null
console.log(foo(null, null)); // Output: null
console.log(foo(0, 2)); // Output: 2
console.log(foo(1, 0)); // Output: 1