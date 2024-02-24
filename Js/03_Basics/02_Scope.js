//globle scope

let a = 100

if(true) //block scope -  value should not go out side of block // we can use global value in it 
{
let a = 10
const b = 20
// var c = 30
// console.log(`inner ${a}`);
}

// console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const username = "avi"
    function two ()  {
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);
    two()
}
// one()


if (true){
    const username = "hitesh"
    if(username === "hitesh"){
        const website = " youtube"
       // console.log(username+website);
    }
    // console.log(website);
}
// console.log(username);

//------------------------ interesting -------------------------------//
addone(5)
console.log(addone(5));
function addone(num){ // basic function
    return num + 1
}

// addtwo(5) // declare in variable(hold function)
const addtwo = function(num){ // expression (variable can store json, function)
    return num + 2
}
