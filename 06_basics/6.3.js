// const array1=[1,2,3,4]
// const int=0;
// const sumInitial=array1.reduce((acc,curr)=>acc+curr,int)
// console.log(`${sumInitial}`)

// const myNums=[1,2,3]

// const myTotal=myNums.reduce(function(acc,curr){
//     console.log(`${acc} and ${curr} `);
//     return acc+curr
// },0)
// console.log(myTotal)

const shoppingCart=[
    {
        itemName:"js-course",
        price:4999
    },{
        itemName:"cpp-course",
        price:2999
    },
    {
        itemName:"data-science",
        price:12999
    },{
        itemName:"mobile-developement",
        price:5999
    }

]
const total=shoppingCart.reduce((acc,item)=>(acc+item.price),0)
console.log(total)