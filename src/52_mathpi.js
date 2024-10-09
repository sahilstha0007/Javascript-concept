const descripter = Object.getOwnPropertyDescriptor(Math, "PI")
console.log(descripter);



// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI);

const sahil = {
    name: "Sahil",
    id: "mvic1a2",
    isAvailable: true,
    playSahil: function(){
        console.log("Sahil is playing");
        
    }
}


Object.defineProperty(sahil, "name", {
    // writable: false,
    enumerable: false
})
console.log(Object.getOwnPropertyDescriptor(sahil, "name"));

for (let [key, value] of Object.entries(sahil)) {
    if(typeof value !== "function"){
        console.log(`${key} : ${value}`);
    }

}