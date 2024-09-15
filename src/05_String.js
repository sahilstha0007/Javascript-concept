const name= 'sahil'


// console.log(`Hello my name is ${name} and my repo count  is ${repoCount}`);


// const gamename = new string('sahiil')

// console.log(gamename[0])
// console.log (gamename.__proto_)




// ********** String Methods ()
// length of string
console.log(name.length);

// Upper case
console.log(name.toUpperCase());
// Lower case
console.log(name.toLowerCase());

//check what character is in the given postion
console.log(name.charAt(2));

//check which position is the character in
console.log(name.indexOf('i'))

//from 0 element to 4th  #no negative value
const newString = name.substring(0,4)
console.log(newString)

// negative values start from reverce
const another = name.slice(-4,4)
console.log(another);


// trim removes unecessary spaces
const newString1 = "         sahil         "
console.log(newString1);
console.log(newString1.trim())


// replace
const url= "https://sahil.com/sahil%20shrestha"
console.log(url.replace("%20","-" ));

// checks whether it contains some element or not
console.log(url.includes("sahilbhai"));

console.log(url.split("-"));
