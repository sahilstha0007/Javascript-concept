// OOPs programming prototypes

// Object
// - collection of properties and methods -> building blocks

// Why use OOPs 
/*
-Construnctor Function
-Prototypes
-Classes
-Instances (new,this)
*/

/*
#4 pillars 
- Abstraction
- Encapsulation
- Inheritance
- Polymorphism
*/


// const user = {
//     username: "Sahil",
//     id: "ab32311",
//     loginCount: 8,
    // signedIn: true,

    // getUserDetails: function () {
        //console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);
        // console.log(this);

    // }
// }


// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);



// constructor 
// const promiseOne = new Promise()
// const date = new Date()
// Constructor function multiple instance from one object instance


function User(username, loginCount, isLoggedIn) {
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn
    
    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
        
    }
    return this
}


const userOne = new User("Sahil",11,true)
const userTwo = new User("John",1,false)
console.log(userOne.constructor)
// console.log(userTwo)

