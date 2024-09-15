// Most used loop for array for each
const coding =["js","ruby","java","c","cpp","python"]
// coding.forEach(item => {
//     console.log(item);
    
// }); 
// coding.forEach( function(val){
//     console.log(val);
    
// });

// function printMe(val){
//     console.log(val)
// }
// coding.forEach(printMe)
// coding.forEach((item, index,array) => {
//     console.log(item);
// }); 

const myCoding =[
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
    {
        languageName: "c programming",
        languageFileName: "c"
    },
    {
        languageName: "Swift by apple",
        languageFileName: "swift"
    },
]

myCoding.forEach((item) => {
    console.log(item.languageFileName);
});