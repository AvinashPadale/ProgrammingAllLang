// Immediately Invoked Function Expressions (IIFE)

(function one(){   //named iife
    console.log('DB Conneted');
})();

 
( (name) => { //non named iief
    console.log(`DB Conneted two ${name}`); 
})('Avinash');