const start = document.getElementById("start")
const stop = document.getElementById("stop")


let i = 1;
const run= ()=>{
    const buttonClick =()=>{

        const button =  setInterval(() => {
            console.log(`Sahil's game roll is ${i}`)
            i++;
        }, 2000);
        stop.addEventListener("click", () => {
            clearInterval(button)
        })
    }
        start.addEventListener("click", () => {
            buttonClick()
        })
}
run()