// const myNums = [1, 2, 3]
// const myTotal = myNums.reduce((acc, currval) => {
//     console.log(`acc: ${acc} and currval:${currval}`)

//     return acc + currval
// }, 0)

// console.log(myTotal);


const shoppingCart = [
    {
        itemName: "js course",
        price: 2000
    },
    {
        itemName: "react course",
        price: 3999
    },
    {
        itemName: "python course",
        price: 1999
    },
    {
        itemName: "mobile app dev course",
        price: 5000
    },
    {
        itemName: "data science course",
        price: 12000
    },
    {
        itemName: " AR/MR course",
        price: 20000
    }
]
const cp = shoppingCart.reduce((acc, item) => {
    return acc + item.price
}, 0)
console.log(cp);
