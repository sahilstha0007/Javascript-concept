// for of Loop

// ["",'',""]
// [{},{},{}]

// const arr = [1,2,3,4,5]
// for (const num of arr) {
//     console.log(num)
// }


const greetings ="Hello world!"
for (const greet of greetings) {
    // console.log(`Each char is ${greet}`)
}


// Constructor function
//Maps  
/* 
Craetes a new array ny performing some operation on each array element
 */

const map = new Map()
map.set("C1","Kathmandu")
map.set("C2","Bhaktapur")
map.set("C3","Patan")
map.set("C4","Ilam")
// console.log(map);


for (const [key, value] of map) {
    console.log(key, ":-", value);
    
}

const myObject ={
    "game1": "NFS",
    "game2": "Spiderman"
}
for (const [key, value] of myObject) {
    console.log(key, ":-", value);
     
    
}