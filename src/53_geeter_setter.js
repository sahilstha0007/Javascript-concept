class User {
    constructor(email, password) {
        this.email = email
        this.password = password
    }
}

const sahil = new User("sahil@gmail.com", "123")
console.log(sahil.password);
