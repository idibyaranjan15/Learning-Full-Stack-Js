let button=document.querySelector('.clickMe')

// console.log(button)

button.addEventListener('click',(e)=>{
    // console.log(e)
    console.log("you clicked")
})

let elements=document.querySelectorAll('li')
elements.forEach((e)=>{

e.addEventListener('click',(f)=>{
    f.target.style.textDecoration="line-through"
console.log(f.target)
})



})