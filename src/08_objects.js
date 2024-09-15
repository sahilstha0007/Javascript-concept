//singleton
//constructors
// object literals


const mySym = Symbol("key1")


const user ={
    name: "sahil",
    "full name":"Sahil Shrestha",
    [mySym]:"mykey1",
    age:18,
    location:"bagbazar",
    email:"sahiltuchhe123@gmail.com",
    isLoggedIn:false,
    lastLoginDays:["Modeday", "Saturday"]
}
console.log(user.email)
console.log(user["email"])
console.log(user["email"])
console.log(user["full name"])
console.log(user["email"])
console.log(user[mySym])
console.log(typeof user[mySym])
// string ins

user.email = "sahil@facebook.com"
console.log(user["email"])
// change value by over writing it

Object.freeze(user)

user.email = "sahil@insta.com"
console.log(user)

// to reffer symbols use [] in objects