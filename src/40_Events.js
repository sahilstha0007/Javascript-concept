// document.getElementById("owl").onclick = ()=>{
//     alert("owl clicked")
// }

//attacheEvent() used in internet explorer  
// jQuery -.on onEvent




// types of event , timestamp, defaultPrevented, target, toElement, srcElement, currentTarget
// clientX, clientY, screenX, ScreenY
// altkey, ctrlkey, shift, tab, keycode


// Third parameter false default in addEventListener
// document.getElementById("images").addEventListener("click", (event) => {
//     console.log("clicked inside the ul")
// }, false)

// Event propogation
// diff of false and true in third parameter
// Event bubbling & Event Capcuturing


// Examples
// Bubbling
// document.getElementById("owl").addEventListener("click", (event) => {
//     console.log("owl clicked")
// }, false)
// //Capturing
// document.getElementById("owl").addEventListener("click", (event) => {
//     console.log("owl clicked")
//     event.stopPropagation
// }, true)



// document.getElementById("images").addEventListener("click", (event) => {
//     console.log("clicked inside the ul")
// }, false)

// document.getElementById("owl").addEventListener("click", (event) => {
//     console.log("owl clicked")
//     event.stopPropagation()
// }, false)

// document.getElementById('google').addEventListener("click", (event) => {
//     event.preventDefault()
//     event.stopPropagation()
//     console.log("Google clicked");
// }, false)


document.querySelector("#images").addEventListener("click", (event) => {
    console.log(event.target.tagName);
    if (event.target.tagName ==="IMG"){
        console.log(event.target.id);
        let removeIt = event.target.parentNode
        // removeIt.parentNode.removeChild(removeIt)
        removeIt.remove()
        
    }
    // removeIt.remove()
}, false)
