const user = {
    username: "Avinsah",
    price : 999,

    welcomeMSG: function(){
        console.log(`${this.username}, Welcome to Website!`);
        console.log(this);
    }
}
// user.welcomeMSG()
// user.username= 'John'
// user.welcomeMSG()

// console.log(this);


// function one(){
//     let username ="Avinash"
//     console.log(this.username); // does not workk in funtion work in object
// }
// one()


// const one = function(){
//     let username ="Avinash"
//     console.log(this.username);
// }


// const one = () => {
//     let username ="Avinash"
//     console.log(this);
// }
// one()

// const addTwo = (a,b) => {  /// explicit return {using return word}
//     return a + b;
// }
// console.log( addTwo(3,4));


//const addTwo = (a,b) =>  (a + b); //implicite return () without retun word
// const addTwo = (a,b) =>  ({username:"Avinash"}); 
// console.log( addTwo(3,4));
