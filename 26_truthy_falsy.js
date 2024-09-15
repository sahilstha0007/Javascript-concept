const userEmail = []
if (userEmail) {
    console.log("Got user email");

} else {
    console.log("Dont have user email")
}

/*
falsy values
false, 0 is aslo falsy value, -0 too,
BigInt 0n, "", null, undefined, NaN (Not a number)

truthy values
"0", "false", " ", [], {}, function(){}, 
*/

// if (userEmail.length === 0) {
//     console.log("Array is empty");
    
// }
// Check array is empty or not
const emptyObj ={}
if (Object.keys(emptyObj).length ===0) {
    console.log("Object is empty");
    
}

// Nullish Coalescing Operator (??) : null undefined

let val1;
// val1= 5 ?? 10
val1= null ?? 10
// val1= undefined ?? 10
// console.log(val1);




// Terniary Operators
// condtion ? true: false

const iceTeaPrice =100
iceTeaPrice <= 80 ? console.log("less than 80"): console.log("more than 80");



const PriceofChair =1000
PriceofChair <=800 ? console.log("The price of chair is bellow the MRP") : console.log("The pirce of chair is above the MRP");

