let products = [
    {name: "Cadeira", price: 400},
    {name: "Mesa", price: 600},
    {name: "TV", price: 1500}
]

const sumPrice = products.reduce((acc, products) => acc + products.price, 0)

console.log(sumPrice)