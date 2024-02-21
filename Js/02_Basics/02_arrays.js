const MVheros = ["thor", "ironman", "spider"]
const DCheros = ["superman", "batman", "flash"]

// MVheros.push(DCheros)
// console.log(MVheros); // [ 'thor', 'ironman', 'spider', [ 'superman', 'batman', 'flash' ] ]
// console.log(MVheros[3][1]); // batman

// const newHero = MVheros.concat(DCheros)
// console.log(newHero);

// const newHero = [...MVheros, ...DCheros]
// console.log(newHero); 

// const anotherArray = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
// const real_array = anotherArray.flat(2);
// console.log(real_array);

console.log(Array.isArray(["Avi", "dipu"])); // true
console.log(Array.isArray("Avi")); // false
console.log(Array.from("Avi"));
console.log(Array.from({name:"Avi"})); // array from key/value       //intresting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));