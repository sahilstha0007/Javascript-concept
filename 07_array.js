const marvel_heros = ["Thor","Ironman","Spideman"]
const dc_heros =["Superman","Flash","Batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);


//Concat method

// const allheros =marvel_heros.concat(dc_heros)
// console.log(marvel_heros);
// console.log(allheros);

// Spread operators
// const all_new_heros =[...marvel_heros,...dc_heros]
// console.log(all_new_heros);


const another_arr =[1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_another_Array =another_arr.flat(Infinity)
console.log(real_another_Array);


console.log(Array.isArray("Sahil"));
console.log(Array.from("Sahil"));
console.log(Array.from({name: "sahil"}));//interesting

let score1 =100
let score2 =200
let score3 =300

console.log(Array.of(score1,score2,score3))