// if 
// const user = {
//     name: "Sahil",
//     greet: function () {
//         const user = () => {
//             const isUserLoggedIn = true
//             if (isUserLoggedIn) {
//                 console.log(`Yess user is logged in ${this.name}`)
//             }
//         }
//         user()
//     }
// }
// user.greet()

// const temperature = 41
// if(temperature===40){
//     console.log("Less than 50");
// }
// else{
//     console.log("Temprerature is greater than 50");
// }



// const score = 200
// if (score > 100) {
//     const power = "fly"
//     console.log(`User power: ${power}`)
// }
// console.log(`User power: ${power}`) // Scope so power is not defined



// Implicit Scope
// const balance =1000
// if (balance> 500) console.log("test"),
// console.log("test2");
// Not recommanded



// Nesting
// const balance = 1000
// if (balance < 500) {
//     console.log("Less than 500");

// }
// else if (balance < 750) {
//     console.log("Less than 750");
// }
// else if (balance < 900) {
//     console.log("Less than 900");
// }
// else {
//     console.log("Less than 1200");
// }



const userLoggedIn = true
const debitCard = true
// if (userLoggedIn || debitCard || 2 == 3) {
//     console.log("Allowed to buy courses")
// }
const loggedInFromGoogle = false
const loggedInFromEmail = true

// if (userLoggedIn && debitCard && 2==3) {
//     console.log("Allowed to buy courses")
// }

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User Logged In");
    
}



