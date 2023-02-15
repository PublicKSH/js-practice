// High Priced Product Categories
// You are given an array of objects representing a collection of products, each with a name, price, and category. Your task is to use map, filter, and reduce to
// calculate the average price of products in each category, and then return an array of objects containing only the categories that have an average price
// above 50.

const products = [
    { name: "Product 1", price: 20, category: "Electronics" },
    { name: "Product 2", price: 30, category: "Clothes" },
    { name: "Product 3", price: 40, category: "Electronics" },
    { name: "Product 4", price: 50, category: "Clothes" },
    { name: "Product 5", price: 60, category: "Clothes" },
    { name: "Product 6", price: 70, category: "Electronics" },
    { name: "Product 7", price: 80, category: "Clothes" },
    { name: "Product 8", price: 90, category: "Electronics" },
];

// [ "Electronics": [20, 40, 70, 90], "Clothes": [30, 50, 60, 80] ] 로 변환
const categoriesPrice = products.reduce((acc, cur) => {
    const category = cur.category;
    if (!acc[category]) {
        acc[category] = [];
    }
    acc[category].push(cur.price);
    return acc;
}, []);

// [ { category: 'Clothes', average: 55 } ]로 변환
const categoryAverageArray = Object.keys(categoriesPrice).map(category => {
    const average = products.reduce((acc, product) => { return product.category === category ? acc + product.price : acc }, 0) / categoriesPrice[category].length
    return { category: category, average }
})

//filter로 평균이 50이상인걸 반환
const Result = categoryAverageArray.filter(item => item.average > 50)
console.log(Result)
