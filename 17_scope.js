//Hoisting 
/*
Hoisting refers to the process whereby the interpreter appers to move the declarations to the top of the code before the executions
*/

// nested scope
function one() {
    const username = "Sahil"

    function two() {
        const website = "youtube"
        // console.log(username)
    }
    // console.log(website);
    two()

}
one()
if (true) {
    const username = "Sahil"
    if (username === "Sahil") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website)
}
// console.log(username)

//closure


// Function level scope

/*
function parent(){
const a =10
    function children(){
    const b = 20
    console.log(a) // this can be executed because parent function becomes the global scope for this children function
    }
    console.log(b)
    children()
}
parent()


*/



//*88888888888888888888888 interesting 8888888-


console.log(addone(5))
// addone(5)
function addone(num) {
    return num + 1

}
// console.log(addone(5))

addTwo(5)   
const addTwo = function (num) {
    return num + 2
}
//Hoisting^