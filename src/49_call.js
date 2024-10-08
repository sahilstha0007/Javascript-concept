// call bind apply

function SetUsername(username) {
    this.username = username;
    console.log("Called");

}

function createUsername(username, email, password) {
    SetUsername.call(this, username)

    this.email = email;
    this.password = password;
}

const sahil = new createUsername("sahil", "sahiltuchhe123@gmail.com", "123")
console.log(sahil);
