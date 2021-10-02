//array destructuring

let arr= ["amazon", "google"]
// let company1 = arr[0]
// let company2 = arr[1]

let[company1,company2] = arr

console.log(company1)
console.log(company2)

//object destructuring

let options ={
    title:"zero to hero",
    age:23,
    type:"CRM"
}
// this is one way to deconstruct objects
// var title = options.title
// var age = options.age

// console.log(title)
// console.log(age)

//better way to destructure. SHorthand notation
let{title,age,type}= options
console.log(title)
console.log(age)
console.log(type)


