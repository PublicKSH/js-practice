// Age difference from the youngest and oldest
// Find the difference in age between the oldest and youngest family members, and return their respective ages and the age difference.

const input = [
    {
        name: "John",
        age: 13,
    },
    {
        name: "Mark",
        age: 56,
    },
    {
        name: "Rachel",
        age: 45,
    },
    {
        name: "Nate",
        age: 67,
    },
    {
        name: "Jennifer",
        age: 65,
    },
];

const maxAge = input.reduce((arr, cur) => arr.age >= cur.age ? arr : cur).age
const minAge = input.reduce((arr, cur) => arr.age <= cur.age ? arr : cur).age

const Result = [minAge, maxAge, maxAge - minAge]
console.log(Result)