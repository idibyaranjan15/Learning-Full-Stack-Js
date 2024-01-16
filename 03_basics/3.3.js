//iife
//immedialtely invoked function expressions
//so we use iife to reduce global polution in js
(function chai(){ // it is also called named iife
    console.log(`DB CONNECTED FIRST`)
})();
// so we use semicolon to end the first function 
 ((number)=>console.log(`DB CONNECTED to ${number}`))(1) // this is called no named iife

// +++++++++++ important notes +++++++++++
// no named iife means no arrow function used i.e no name
// if any one want to use two iife then we have to use semicolon in the end of first iife and then we have to use another one 


