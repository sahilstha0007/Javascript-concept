// Reduce method
/*
Recudes an array to a signle value

const n [1,8,7,11]
let sum = number. reduce(add)
*/

// const n = [1, 7, 11]
// let sum = n.reduce(add => {
//     return add + add
// })
// console.log(sum)


const myNums = [1, 2, 3]
// const mytotal = myNums.reduce((acc, currval) => {
//     console.log(`acc: ${acc} and currval:${currval}`);
    
//     return acc + currval
// },0)
// console.log(mytotal);



const mytotal = myNums.reduce((acc,curr)=>{
    return acc + curr
},)
console.log(mytotal);
