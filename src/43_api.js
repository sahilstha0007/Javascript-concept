// Ajx
const requestUrl = "https://api.github.com/users/sahilstha0007";
const xhr = new XMLHttpRequest()
xhr.open("GET", requestUrl)
xhr.onreadystatechange = () => {
    console.log(xhr.readyState);
    if (xhr.readyState === 4) {
        // convert typeof into json
        // const data =  JSON.parse{this.responseText}

        const data = JSON.parse(this.responseText)
        console.log(typeof data);
        console.log(data.follower);
        
    }
}

xhr.send();