// document.getElementById("owl").onclick = ()=>{
//     alert("owl clicked")
// }

//attacheEvent() used in internet explorer  
// jQuery -.on onEvent




// types of event , timestamp, defaultPrevented, target, toElement, srcElement, currentTarget
// clientX, clientY, screenX, ScreenY
// altkey, ctrlkey, shift, tab, keycode


// Third parameter false default in addEventListener
document.getElementById("owl").addEventListener("click", (event) => {
    console.log(event)
}, false)

// Event propogation
// diff of false and true in third parameter
// Event bubbling & Event Capcuturing


// Examples
