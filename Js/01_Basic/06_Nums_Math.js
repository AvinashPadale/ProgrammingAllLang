/*
const score = 500
console.log(score ,typeof score);

const bal = new Number(500)
console.log(bal); // number : 500

console.log(bal.toString().length); //3
console.log(bal.toFixed(2)); // 500.00

const Num2 = 23.4584
console.log(Num2.toPrecision(4)); // 23.46

const hundreds = 1000000000
console.log(hundreds.toLocaleString('en-IN')); // 1,00,00,00,000

*/

//------------------------------- Math --------------------------------
/*
console.log(Math.abs(-2)); //2
console.log(Math.round(4.6));// 4 <.5 > 5
console.log(Math.floor(4.9)); // 4  
console.log(Math.ceil(4.2)); // 5
console.log(Math.sqrt(49));  // 7
console.log(Math.pow(4,3)) ; // 64
console.log(Math.min(4,3,6,8)); // 3
console.log(Math.max(4,3,6,8)); // 8
console.log(Math.random()); // random decimal between 0 and 1
console.log(Math.floor(Math.random()*10) + 1);
*/

const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max - min + 1)) + min ) //