// 7 types
/* 
#Primitive Datatypess
1. String
2. Number
3. Boolean
4. Null
5. undefined 
6. Sybmol
7. BigInt

#Non primitive
// Array, Objects, Function
*/

const score = 100 //number
const scoreValue = 100.3 //num

const isLoggedIn = false //boolean
const outsideTemp = null //null
let userEmail; // undefined

const id = Symbol("123") //Symbol
const anotherId = Symbol("123")
console.log(id ===anotherId);

const bigNumber = 984223144353131n


const heros = ["sahil","suraz","susan"]
let obj={
    name: "Sahil",
    age:20
}



const myfunction= function(){
    console.log("hello world")
} 

// ++++++++++++++++++++++++++++++++++++

// Stack (Primitive), Heap(Non primitive)


let name = "sahil";


let name2 = name;
name2 ="bhai"


console.log(name);
console.log(name2);

