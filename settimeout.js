//setTimeout
// print hello after 2 seconds

// window.setTimeout(function(){
// console.log("hello")

// },2000) 

//store the timer in a variable

let timerId = window.setTimeout(function(){
    console.log("hello")
    
    },2000) 
console.log(timerId)
//clearTimeout(timerId)


//setInterval for repetetive tasks after a delay

let intervalId = window.setInterval(function(){
    console.log("hello")


}, 5000)

//clearInterval(intervalId)
