// Calculate median and mean
// Calculate the mean and median values of the number elements from the input array.
// const input = [12, 46, 32, 64];
// 입력 배열에서 숫자 요소의 평균 및 중앙값을 계산합니다.
// Result
// { mean: 38.5, median: 39 }

// 평균
const input = [12, 46, 32, 64,];
const mean = input.reduce((arr, cur) => arr + cur, 0) / input.length
// 중앙 값 (midleIndex의 값이 홀수면 중간값 두개를 더해서 나누기)
input.sort();
const middleIndex = input.length / 2
console.log(middleIndex)
const median = middleIndex % 2 === 0 ?
    (input[middleIndex - 1] + input[middleIndex]) / 2
    :
    input[Math.floor(middleIndex)]

const Result = {
    mean,
    median
}

console.log(Result)