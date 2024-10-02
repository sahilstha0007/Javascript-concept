// Promises
// The Promise object repesents the eventual completion (or failure) of an asynchronous

// fetch("https://google.com").then().catch().finally()

const promiseOne = new Promise((resolve, reject) => {
    // Do an async task
    // Db calls, cryptography, network
    setTimeout(() => {
        console.log("Async task is complete");
        resolve()
    }, 1000);
})
promiseOne.then(() => {
    console.log("Promise Consumed");
})


new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Async Task 2");
        resolve()
    }, 1000);
}).then(() => {
    console.log("Async 2 resolved");
})

const promiseThree = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({ username: "Sahil", email: "sahiltuchhe123@gmail.com" })
    }, 1000);
})
promiseThree.then((user) => {
    console.log(user);
})

const promiseFour = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true
        if (!error) {
            resolve({ username: "sahil", password: "1234" })
        }
        else {
            reject("ERROR: Something went wrong")
        }
    }, 1000);
})


const username = promiseFour.then((user) => {
    console.log(user);
    return user.username
})
    .then((username) => {
        console.log(username);
    })
    .catch((err) => {
        console.log(err);
    })
    .finally(() => {
        console.log("The promise is either resolved or rejected")
    })

const promiseFive =