class User {
    constructor(username) {
        this.username = username
    }
    logMe() {
        console.log(`USERNAME is ${this.username}`);

    }
}
class Teacher extends User {
    constructor(username, email, password) {
        super(username)
        this.email = email
        this.password = password
    }
    addCourse() {
        console.log(`A new course was added by ${this.username}`);

    }
}
const sahil = new Teacher("sahil", "sahil@gmail.com", "123")

sahil.addCourse()
const userSahil = new User("userSahil")
userSahil.logMe()

// console.log(sahil instanceof Teacher);
console.log(sahil instanceof User);
