// class User {
//     constructor(username, email, password) {
//         this.username = username
//         this.email = email
//         this.password = password
//     }
//     encryptPassword() {
//         return `${this.password}abv`
//     }

//     changeUsername() {
//         return `${this.username.toUpperCase()}`
//     }
// }
// const sahil = new User("sahil", "sahil@gmail.com", "123")
// console.log(sahil.encryptPassword());
// console.log(sahil.changeUsername());
// Behind the scene

function user(username, email, password) {
    this.username = username
    this.email = email
    this.password = password
}
user.prototype.encryptPassword = function () {
    return `${this.password}abc`
}
user.prototype.changeUsername = function () {
    return `${this.username.toUpperCase()}`
}

const tea = new user("tea", "tea@gmail.com", "123")
console.log(tea.encryptPassword());
console.log(tea.changeUsername());
