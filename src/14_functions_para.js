// Functions and parameters


function saymyname() {
    console.log("S")
    console.log("A")
    console.log("H")
    console.log("I")
    console.log("L")
}
// saymyname()
// saymyname()

// function sum(a, b) { // ab are parameters

//     console.log(a + b); //ab are arguements

// }


function sum(a, b) { // ab are parameters
    let result = a + b
    // console.log()
    // return result// after return not thing can be conslog.log

    return a + b;
}
const result = sum(3, 4)

// console.log("Result:",result);



function loginUserMessage(username ="sam") {
    if(!username ){
        console.log("Please enter username");
        
    }
    return `${username} just logged in`
    // else{
    //     console.log("Username invalid");
    // }
}

console.log(loginUserMessage());
