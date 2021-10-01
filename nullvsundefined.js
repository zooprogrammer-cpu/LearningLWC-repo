//Equality comparison
//normal comparison
//strict comparison

//1. Normal comparison (==). Compares the value but not the type. 

console.log(3==3)
console.log(2==3)
console.log("nikhil"=="nikhil")
//Compares the value but not the type. 
console.log(3=="3")

//2. strict comparison (===)
//compares value+data type
console.log(3==="3")

/// Null vs undefined
var x // note that you don't need to assign var x= undefined. undefined is automatically assigned. 
console.log(x)

var y = null
console.log(y)
//== this shows as true since the value of x and value of y are null
console.log(x==y)

//=== this shows as false since the type of x and type of y are not same
console.log(x===y)





