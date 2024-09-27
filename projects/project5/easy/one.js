
// setTimeout(() => {
//     console.log("sahil");

// }, 1000);

// setInterval(() => {
//     console.log("sahil 2")
// }, 1000);


const sahil22 = () => {
    console.log("Hii Sahil");
}
const changeText = () => {
    document.querySelector("h1").innerHTML = "Learing Web develop"
}
const textChanger = setTimeout(() => {
    changeText()
}, 2000);

// const buttonStop = 
document.querySelector("#stop").addEventListener("click", () => {
    clearTimeout(textChanger)
    console.log("stopped")
})
// clearTimeout(textChanger)
// Clears timeout after specified

