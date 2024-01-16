//control flow 

// if statement
// opearator == < > <= >= === !== !=

//whenever we use === it is actusally used for its datatype along with value but in == it only check with its value 
//example

// if(2=="2"){
//     console.log("true")
// }else{
//     console.log("false")
// }

//diff between let and var in control flow

// const score =200
// if(score >150){
//     var power="fly"
//     console.log(`User power :${power}`)
// }
// console.log(`user will ${power}`)


//short-hand notation
const balance=4500
// if(balance>4000) console.log(`you are rich`)
//nested if 
if(balance<500){
    console.log(`less than`)
}
else if(balance<750){
console.log(`less than 750`)
}
else if(balance < 900){
    console.log("less than 900")
}