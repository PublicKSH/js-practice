// Count elements in array of arrays
// Count the occurrences of distinct elements in the given 2D array. The given input is an array, the elements of which are arrays of strings. The result is an
// object whose property names are the values from the arrays and their value is the number of their occurrences.

const input = [
    ["a", "b", "c"],
    ["c", "d", "f"],
    ["d", "f", "g"],
];

// 중첩배열 풀어주기
const arr = input.reduce(function (acc, cur) {
    return acc.concat(cur);
}, []);

// 풀어준 배열로 계산
const Result = arr.reduce((a, i) => { return a[i] = (a[i] || 0) + 1, a }, {});
console.log(Result);