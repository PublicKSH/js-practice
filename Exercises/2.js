// Sum of every positive element
// If the given input is an array of numbers, return the sum of all the positives ones.
// If the array is empty or there aren't any positive numbers, return 0.
// const input = [1, -4, 12, 0, -3, 29, -150];
// Result
// 42;

const input = [1, -4, 12, 0, -3, 29, -150];
const initialValue = 0; //초기값을 제공하지 않으면 배열의 첫 번째 요소를 사용한다. 

const Result = input.reduce(
    (accumulator, currentValue) => currentValue >= 0 ? accumulator + currentValue : accumulator
    ,
    initialValue
);

console.log(Result)