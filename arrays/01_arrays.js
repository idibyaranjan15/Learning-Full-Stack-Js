//array
const arr=["dibya",21,44,true,"hitesh"]
// //javascript arrays are resizable
// console.log(arr)
// console.log(arr[1])
// //array methods
// //push method add an element in the last
// arr.push(6)
// console.log(arr)
// arr.push(7)
// console.log(arr)
// //pop method removes an element from the last 
// arr.pop()
// console.log(arr)
// //unshift opeartion = basically it add an element at the first
// arr.unshift("7")
// console.log(arr)
// //shift opeartion basically remove an element from start
// arr.shift()
// console.log(arr)

// console.log(arr.includes(9))
// //includes opeartion states if the element is in the array or not in boolean

// //index of method actually states about the index of that element
// console.log(arr.indexOf(21))
// //join actually binds the array and convert to string 
// const newArray=arr.join()
// console.log(newArray)
// console.log(typeof(newArray))

//slice and splice method
console.log("A ",arr)
const myn1=arr.slice(1,3)
console.log(myn1)
console.log("B ",arr)
//slice basically return the next value of given index till the exact value of the given index
const myn2=arr.splice(1,3)
console.log("C ",arr)
console.log(myn2)