function MyName (){
    console.log("A");
    console.log("v");
    console.log("i");
}

// MyName() // referenece and excute

function add(num1,num2){ // parameter2
    return num1 + num2
}
// add(5, 7); // calling the function with parameters
// add(5, "7");
// add(5, "a"); //argument
// add(5, null);
const result = add(5,7)
// console.log(`result : ${result}`);

function LoginUserName(username = "Sam"){
    if(username === undefined){   //if(!username){
        console.log("Enter user name");
        return
    }
    return `${username} Just logged in`
}


// console.log(LoginUserName("Avinash")); // Avinash Just logged in
console.log(LoginUserName()); // undefine Just logged in
