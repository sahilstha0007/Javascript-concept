// const addLanguage = (langName) => {
//     const li = document.createElement("li")
//     li.innerHTML = `${langName}`
//     document.querySelector('.langauge').appendChild(li)
// }
// addLanguage("pythons")

function addLanguage(langName) {
    const li = document.createElement("li");
    li.innerHTML = `${langName}`
    document.querySelector('.language').appendChild(li)
}
addLanguage("pythons")
addLanguage("TypeScript")

const addOptiLanguage = (langName) => {
    const li = document.createElement("li")
    li.appendChild(document.createTextNode(langName))
    document.querySelector('.language').appendChild(li)
}
addOptiLanguage("Golang")



//Edit
const secondLang = document.querySelector("li:nth-child(2)")
// secondLang.innerHTML= "Mojo"
const newli = document.createElement("li")
newli.textContent = "Mojo"
secondLang.replaceWith(newli)

// Edit
const firstLang = document.querySelector("li:firstChild")
firstLang.outerHTML = "<li>TypeScript</li>"

//remove
const lastLang = document.querySelector('li:last-child')
lastLang.remove()