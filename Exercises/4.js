// Get name initials
// The given input is a string of multiple words with a single space between each of them. Abbreviate the name and return the name initials.
// const input = "George Raymond Richard Martin";
// Result
// "GRRM";

const input = "George Raymond Richard Martin";
const arr = input.split(' ');

const Result = arr.reduce((arr, cur) => arr + cur[0], '');
console.log(Result)