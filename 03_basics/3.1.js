// const user={
//     userName:"dibya",
//     age:21,

//     welcomeMessage : function(){
//         console.log(`${this.userName}, welcome to home `)
//         console.log(this)
//     }
    
// }
// user.welcomeMessage()
// user.userName="harish"
// user.welcomeMessage()
// // console.log(this)

// function chai(){
//     let name="dibya"
//     console.log(this.name)
// }
// chai()


const chai = function(){
    let userName="dibya"
    console.log(this.userName)
}
chai()