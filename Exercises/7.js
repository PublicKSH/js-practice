// n! with Map and Reduce
// If the given input is a number, you should return the factorial of that number. The factorial of a natural number n is the product of the positive integers less
// than or equal to n. So, 2! = 2, 3! = 6, 4! = 24 and so on.


const input = 6;
const Result = Array(input).fill().map((v, i) => i + 1).reduce((arr, cur) => arr * cur, 1)

// 0! = 1
console.log(Result);