//How does JavaScript executed code + call stack

// JavaScript Execution Context


// {} =>Global Execution Context -> this(globally refered)

// Functional / Function Exectution context

// mongos==> Eval Exectution context

let val1=10
let val2= 5
function addNum(num1,num2){
    let total = num1 +num2
    return total
}
let result1=addNum(val1,val2)
let result2=addNum(10,2)

/*
Step 1: Global Execution -> this
Step 2: Memory phase( all varaibles are stored)
            val1= undefined
            val2= undefined
            addNum= defination
            result1 = undefined
            result2 undefined
Step 3: Exeution phase
            val1 = 10
            val2 = 5
            addNum =     New varaiable Environmemt 
                            +
                    Execution thread
            result1 = 
            result2 =
*/


// Call Stack
/*
# Global Execution [one()]
LIFO last in first out
*/