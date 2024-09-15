for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 5) {
        // console.log("5 is the best number")
    }
    // console.log(element)
}




myArr = ["Batman", "Batman", "Super man", "Flash"]
// console.log(myArr.length);

for (let index = 0; index < myArr.length; index++) {
    const element = myArr[index];
    // console.log(element)

}


// Keywords
// break and continuee

// for (let index = 1; index <= 20; index++) {
//     if( index ==5){
//         console.log(`Detected 5`)
//         break
//     }
//     console.log(`Value of i is ${index}`)
// }




for (let index = 1; index <= 20; index++) {
    if( index ==5){
        console.log(`Detected 5`)
        continue
    }
    console.log(`Value of i is ${index}`)
}
