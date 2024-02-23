//globle scope

let a = 100

if(true) //block scope -  value should not go out side of block
{
let a = 10
const b = 20
// var c = 30
console.log(`inner ${a}`);
}

console.log(a);
// console.log(b);
// console.log(c);