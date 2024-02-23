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

function LoginUserName(username){
    if(username === undefined){   //if(!username){
        console.log("Enter user name");
        return
    }
    return `${username} Just logged in`
}
// console.log(LoginUserName("Avinash")); // Avinash Just logged in
// console.log(LoginUserName()); // undefine Just logged in

function calcCartPrice(val1, val2, ...num1){// rest  operator ... 
    return num1
}
// console.log(calcCartPrice(400,500,600,700,800));

const user = {
    username : "Avinash",
    price : 199
}

function handleobject(anyobject){

    console.log(`Username is ${anyobject.username}`);
    console.log(`price of the product is ${anyobject.price}`);
}

// handleobject(user);
// handleobject({
//     username: "John Doe",
//     price:300
// })


const myNewArray = [200,300,400,500]
function return2ndValue(getArray){
    return getArray[1];
}
// console.log(`The second value of array is ${return2ndValue(myNewArray)}`)
// console.log(return2ndValue([100,200,300,4000]));

