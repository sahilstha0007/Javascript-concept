// console.log(document.getElementById('title').getAttribute("id"))
// console.log(document.getElementById('title').getAttribute("class"))
// console.log(document.getElementById('title').getAttribute("class", "test heading"));


// title.style.backgroundColor = "green"
// title.style.padding = "15px"
// title.style.borderRaduis = "15px"



// console.log(title.innerHTML)// All are visible and also html tags are visible
// console.log(title.textContent)// Hidden content are not visible
// console.log(title.innerText)// All content is visible 


console.log(document.getElementsByClassName("heading"))

// console.log(document.querySelector("h1"))
// console.log(document.querySelector("h2"))
// console.log(document.querySelector("#title"))
// console.log(document.querySelector('input[type="password"]'))
// console.log(querySelector('p:firstChild'))


// document.querySelector('ul')
// const myul = document.querySelector('ul')
// myul.querySelector('li')

// const turnGreen = myul.querySelector('li')
// turnGreen.style.backgroundColor = "green"
// turnGreen.style.padding = "10px"
// turnGreen.innerText
// turnGreen.innerText = "five"

// document.querySelectorAll('li')
// const tempLiList = document.querySelectorAll('li')
// myArr =[1,2,3]
// tempLiList[0].style.color ="green"


// const myH1 = document.querySelectorAll('h1')
// console.log(myH1);
// myH1[0].style.color="red"


// const tempLiList = document.querySelectorAll('li')
// console.log(tempLiList)
// tempLiList.forEach((l)=>{
//     l.style.backgroundColor = "green"
// })

const tempClassList = document.getElementsByClassName("list-item")
// console.log(document.getElementsByClassName("list-item"))
// tempClassList.forEach((li)=>{
//     console.log(li);
    
// })

// Convert HTML
Array.from(tempClassList)

const myConvertedArray =Array.from(tempClassList)

myConvertedArray.forEach((li)=>{
    li.style.color ="orange"
})