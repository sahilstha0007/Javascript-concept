// Immediately Invoke

// (function chai(){
//     console.log(`DB connected`)
// })()


// (function sh(){
//     console.log("This is sahil");
// })()



(function () {
    console.log("Db connected ")
})();
(() => {
    console.log("Db connected two")
})();



((name)=>{
    console.log(`DB CONNECTED ${name}`);
    
})('sahil')