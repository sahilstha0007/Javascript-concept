const user = {
    username: "Sahil",
    age: "18",

    welcomeMessage: function () {
        console.log(`${this.username}, WELCOME TO WEBSITE    `)
        console.log(this)
    }
}
// user.welcomeMessage()

// user.username = "Stha"
// user.welcomeMessage()

console.log(this)

// const group = {
//     person1: "Sahil",
//     person2: "Nishant",
//     person3: "Abhinav",
//     greet: function () {
//         console.group("Heelo", this.person1)
//     }
// }
// group.greet()

// Arrow function .this
// const college = {
//     name: "mvic",
//     greet: function () {
//         const arrow = () => {
//             console.log('hello, ' + this.name)
//         }
//         arrow()
//     }
// }
// college.greet()

// const opp={
//     name:"Ash",
//     age:18,
//     greet: function (){
//         const arr =()=>{
//             console.log(`My name is ${this.name} and i am ${this.age} years`)
//         }
//     arr()
//     }
// }
// opp.greet()


// function chai (){
//     let username = 'Sahil'
//     console.log(this.username);
// }
// chai()
// Not working in functions but in object



// Arrow functions 

// const chai = function(){
//     let username = 'Sahil'
//     console.log(this.username)
// }
// chai




// const chai = () => {
//     let username = 'Sahil'
//     console.log(this.username)
// }
// chai()



// const chair = {
//     type: "wodden",
//     name: "sofa",
//     color: 'red',
//     how: function () {
//         const result = () => {
//             console.log(`This is a ${this.name} of ${this.color} color which is a ${this.type}`)
//         }
//         result()
//     }
// }
// chair.how()

// ********* Arrow
// Implicit return
const addTwo = (num1, num2) => (num1 + num2)
console.log(addTwo(2,3));
