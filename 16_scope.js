// Scope
// let var const
// global >> function >> block

// let a =10
// const b = 20
// var c=30

// console.log(a)
// console.log(b)
// console.log(c)

var c = 300

let a = 30
if (true) {
    let a = 10
    const b = 20
    var c = 30
    // console.log("Inner:", a)
}
// console.log(a)

// console.log(a)
// console.log(b)
// console.log(c)



const loop = () => {
    for (let i = 0; i < a.length; i++) {
        const output = a[i];
    }
    console.log(element);
    
}

loop()

// outside{} global level scope
// inside function is function level scope
// a line wise is block level scope