//Numbers & mathsAT
const score = 400

const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(2));
// Adds decimal value of 0

const otherNumber = 123.41513

// Precises value 
console.log(otherNumber.toPrecision(3))

const hundreds = 1000000
// console.log(hundreds.toLocaleString("en-IN"))


// Maths

// console.log(Math)

// console.log(Math.abs(-4))// Negative changes to positive in abs

// console.log(Math.round(4.6))
// console.log(Math.round(4.2))
// console.log(Math.ceil(4.2))
// console.log(Math.floor(4.9))
// Round chooses nearest value in decimal
//ceil always choose higher then the actual number
// floor chooses the lowest and acurate one

// console.log(Math.min(4,5,6,7));
// console.log(Math.max(4,5,6,7));
// Min chooses the minimum number in the list
// max chooses the maximum number in the list

// Value of math. random is always 1 or 0

console.log(Math.random())
console.log((Math.random() * 10) + 1)
console.log((Math.floor(Math.random()) * 10) + 1)


const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min);
