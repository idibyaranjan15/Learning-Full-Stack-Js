// map method

const myNum=[1,2,3,3,4,4,5,5,6]
// const newNum=myNum.map((num)=>{ return num+10
// })
// console.log(newNum)

// chaining 
const newNums=myNum.map((num)=>num*10)
.map((num)=>num+1)
.filter((num)=>num>=40)
console.log(newNums)