//Object Property shorthand

const name = "Matt";
const userAge =  33;

const user = {
    name,
    age: userAge,
    location: 'Minnesota'
}

console.log(user)

// Object Destructuring

const product = {
    label: 'Pencil',
    price: 1,
    stock: 1200,
    salePrice: undefined
}

const { label, price, stock: inventory, rating = 5 } = product

console.log(label);
console.log(inventory)
console.log(rating)

const transaction = (type, { label , price}) => {
    console.log(label)
    console.log(price)
}

transaction('order', product)