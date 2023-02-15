// HR VS IT Department
// You are given an array of objects representing a collection of employees, each with a name, salary, and department.Your task is to use map, filter, and
// reduce to calculate the average salary for each department and then return an array of objects containing only the departments that have an average salary
// above 65000.

// 10번이랑 풀이방식 동일

const employees = [
    { name: "John", salary: 50000, department: "IT" },
    { name: "Jane", salary: 60000, department: "HR" },
    { name: "Bob", salary: 55000, department: "IT" },
    { name: "Sophie", salary: 75000, department: "HR" },
    { name: "Mike", salary: 65000, department: "IT" },
    { name: "Emily", salary: 80000, department: "HR" },
    { name: "David", salary: 70000, department: "IT" },
];

const departmentPrice = employees.reduce((acc, cur) => {
    const department = cur.department;
    if (!acc[department]) {
        acc[department] = [];
    }
    acc[department].push(cur.salary);
    return acc;
}, []);

const departmentAverageArray = Object.keys(departmentPrice).map(department => {
    const average = employees.reduce((acc, employee) => { return employee.department === department ? acc + employee.salary : acc }, 0) / departmentPrice[department].length

    return { department: department, average: Math.floor(average) }
})

const Result = departmentAverageArray.filter(item => item.average > 65000)
console.log(Result)

