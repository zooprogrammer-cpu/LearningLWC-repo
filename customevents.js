// // //manual click of button function
// function firstFunction(){
//     console.log("this is strange676")
// }
    

// // //programmatic click
// let btn = document.querySelector("button")
// btn.addEventListener("click",firstFunction)

// generate random numbers when the mouse moves in HTML page
// document.addEventListener("mousemove",handler)
// function handler(){
//     document.querySelector(".demo").innerHTML = Math.random()
// }

// //remove handler to stop the random number generation
// function removeHandler(){
//     document.removeEventListener("mousemove",handler)
// }

document.addEventListener("hello", function(data){
    console.log("hello has called and send", data.detail)
})

function callCustomMethod(){
    let event= new CustomEvent("hello",{
        detail:{name:"ash"}
    })
    document.dispatchEvent(event)
}
