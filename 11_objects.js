// const tinderUser = new Object() // singleton object
const tinderUser = {} // nonsingletone object

tinderUser.id = "123abc"
tinderUser.name = "sahil"
tinderUser.isLoggedIn = "false"

// console.log(tinderUser);
const regularUser = {
    email: 'sahilgmail.com',
    fullname: {
        userfullname: {
            firstname: "Sahil",
            lastname: "Shrestha"
        }
    }
}
// console.log(regularUser.fullname.userfullname.firstname);

// Object Combine

// const obj1 = { 1: 'a', 2: 'b' }
// const obj2 = { 3: 'a', 4: 'b' }
// const obj4 = { 5: 'a', 6: 'b' }

//Optional {} for combining
// const obj3 = Object.assign({},obj1, obj2, obj4)
// const obj3 ={obj1,obj2}


const obj1 = { 1: 'a', 2: 'b' }
const obj2 = { 3: 'a', 4: 'b' }
const obj4 = { 5: 'a', 6: 'b' }

const obj3 = {...obj1,obj2}
console.log(obj3);

