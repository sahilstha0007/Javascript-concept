class User {
    constructor(username) {
        this.username = username
    }

    logMe() {
        console.log(`Username: ${this.username}`);

    }
    createId() {
        return `123`
    }
}

const sahil = new User("Sahil")
console.log(sahil.createId());


class Teacher extends User {
    constructor(username, email) {
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphun", "i@gmail.com")
iphone.logMe()
console.log(iphone.createId());
