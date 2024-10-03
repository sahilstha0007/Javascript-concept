const promise = fetch("https://jsonplaceholder.typicode.com/users", {
    headers:{
        Authentication:"secret"
    }
})

promise.then((response)=>{
    console.log(response.status);
    console.log(response.ok);
    return response.json()
}).then((value)=>{
    console.log(value)
})