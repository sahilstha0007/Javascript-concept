// Prototype

let myName = "Sahil    "
let mySurname = "Shrestha    "

console.log(myName.trueLength); //Making a method

let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor: "hamer",
    spiderman: "sling",
    getSpiderPower: function () {
        console.log(`Spider power is ${this.spiderman
            }`);
    }
}
Object.prototype.sahil = function () {
    console.log(`Sahil is present in all objects`);
}

Array.prototype.heySahil = function () {
    console.log(`Sahil say hello`);

}

// heroPower.heySahil()
// myHeros.heySahil()
// heroPower.sahil()
// myHeros.sahil()

//Inheritance 
const user = {
    username: "Sahil",
    email: "sahiltuchhe@gmail.com"
}

const Teacher = {
    matchMedia: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: "Js assignment",
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = user // Outdated 



//Modern Syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "Sahil      "
String.prototype.trueLength = function () {
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"JavaScript".trueLength()
"Spiderman".trueLength()