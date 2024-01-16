//map , filter , reduce


// filter methods 
const myNums=[1,2,3,4,5,6,7,8,9,0]
const res=myNums.filter((num)=>num<4)
const res1=myNums.filter((num)=>{
    return num>4
})
console.log(res)
console.log(res1);

const newNums=[]
const value=myNums.forEach((item)=>{
    if(item<4){
        newNums.push(item)
    }
})
console.log(newNums)