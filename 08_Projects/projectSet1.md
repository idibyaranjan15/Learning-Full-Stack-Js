# project related to DOM

## project link [click] (https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# solution Code

## project 1

``` javascript
console.log("dibya)

const buttons=document.querySelectorAll(".button")
// console.log(buttons)
const body=document.querySelector("body")
// console.log(body)

buttons.forEach((button)=>{
  console.log(button)
  button.addEventListener("click",(e)=>{
    if(e.target.id==='grey'){
body.style.backgroundColor=e.target.id
    }else if(e.target.id==='blue'){
      body.style.backgroundColor=e.target.id
    }
    else if(e.target.id==='white'){
      body.style.backgroundColor=e.target.id
    }
    else if(e.target.id==='yellow'){
      body.style.backgroundColor=e.target.id
    }
    else if(e.target.id==='purple'){
      body.style.backgroundColor=e.target.id
    }
  })
})


```


