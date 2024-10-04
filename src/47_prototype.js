// const newHero = ["hulk","spiderman"]
// newHeroa

const multipleBy5 = (num) => {
    this.num = num
    return num * 5
}

multipleBy5.power = 2

// console.log(multipleBy5(5))
// console.log(multipleBy5.power)
// console.log(multipleBy5.prototype)


function createUser(username, score) {
    this.username = username;
    this.score = score;
};

createUser.prototype.increment = function () {
    this.score++;

};
createUser.prototype.printMe = function () {
    // console.log(`Score is ${this.score}`);
}

// const sahil = new createUser("Sahil", 24)
// const john = new createUser("John", 20)

// sahil.printMe()

function classRoom(name, id) {
    this.name = name
    this.id = id
}
classRoom.prototype.getId = function() {
    return this.id;
}
let sahil = new classRoom("Sahil Shrestha", "mvic0007")
console.log(sahil.getId());

