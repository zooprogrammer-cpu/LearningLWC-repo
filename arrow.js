//Normal  Function 
// function abc(){
//     console.log("hello")
// }

// abc()


//Arrow Function 


const abc = ()=>console.log ("hello")
abc()

//sum example with one data

const sum = (data)=>{
    let sum = data + 10
    return sum
}
console.log(sum(4))

//sum example with two data
const sum2 = (data1,data2)=>{
    let sum2 = data1 + data2
    return sum2
}
console.log(sum2(4,5))

//sum example compact
const sum3 =(data1,data2)=>data1+data2+20
console.log(sum3(4,5))




