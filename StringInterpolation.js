//String Interpolation

//complexities without string interpolation

//var name= "Sales"
// var name1 = "force"
// console.log(name+name1)

// var name3= "Ash"
// var age = 37

// var str ="my name is " + name3 + "and my age is " + age
// console.log(str)


// var a =2 
// var b = 3

// var str1 = "the sum of " + a + " and" + b+ " is" + a+b
// console.log(str1) //note that it is not adding a and b. It is just concatenating

//this is where string interpolation comes handy
var name3="Ash"
var age = 23
console.log(`My name is ${name3}`)

var a =10
var b = 20
console.log(`the sum of ${a} and ${b} is ${a+b}`)


//use case is salesforce
var recordId= 1234234342
console.log(`http://salesforce.com/${recordId}`)


