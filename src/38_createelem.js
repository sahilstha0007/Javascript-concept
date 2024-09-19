const div = document.createElement('div')
console.log(div);
div.className = "main"
div.id = Math.round(Math.random() * 10 + 1)
div.setAttribute("title","generated titile")
div.style.backgroundColor ="green"
div.style.padding ="12px"
div.style.color ="orange"
// div.innerText ="Creating element from HTML"

const addText =document.createTextNode("Creating element through document")
div.appendChild(addText)

// Attaching
document.body.appendChild(div)