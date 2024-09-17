// const coding= ["js","ruby","java","python","cpp"]


// const values = coding.forEach ((item)=>{
//     // console.log(item);
//     return item
//     var score =100
// })
// // console.log(values)
// console.log(score)

// const myNums = [1,2,3,4,5,6,7,8,9,10]

// const newNums =myNums.filter((num)=> num > 4)
// console.log(newNums);


function samriddhi() {
    // var score =200
    // console.log(`The score of  Miss Samriddhi is ${score}`)
}
// let score =200
// console.log(`The score of  Miss Samriddhi is ${score}`)
// let score1 =400
// console.log(`The score of  Miss Samriddhi is ${score}`)
// samriddhi()


// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const newNums = myNums.filter((num) => {
//     return num > 4
// })



// const newNums = []
// myNums.forEach((num) => {
//     if (num > 4) {
//         newNums.push(num)
//     }
// });

// console.log(newNums)


const books = [
    { title: "Book One ", genre: "Computer", publish: 1981, edition: 2003 },
    { title: "Book Two", genre: "Non-Fiction", publish: 1923 , edition: 2004},
    { title: "Book Three", genre: "Computer", publish: 2002 , edition: 2006},
    { title: "Book Four", genre: "History", publish: 1942, edition: 2013 },
    { title: "Book Five", genre: "Science", publish: 1956,  edition:2001},
    { title: "Book Six", genre: "Horror", publish:1980, edition:2003},
    { title: "Book Seven", genre: "Computer", publish:1992, edition:2019},
    { title: "Book Eight", genre: "Data Science", publish:2009,  edition:2018},
    { title: "Book Nine", genre: "Ai", publish:2011,  edition:2021},
];
let userBooks = books.filter((bk)=>bk.genre == "Computer")
// userBooks = books.filter((bk)=>bk.publish >= 2000 )

userBooks = books.filter((bk)=>bk.publish >= 2000 && bk.genre =="Ai")

console.log(userBooks)




// filter()
/*
Filter an array with values that passes a test. Creates a new array

const a =[1,2,3,4,5]
a.filter(greater_than_5)
*/