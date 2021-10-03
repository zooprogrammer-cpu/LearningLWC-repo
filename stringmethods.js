let str = "Hello guys doing I  hope you are doing well"

//1. includes() method- 
//The includes() method determines whether
//a string contrains the caracters of a specified string

let check = str.includes("hope")
console.log(check)


//2. indexof method-
//returns the position of the first occurrence //of a specicifc value in a string

let index= str.indexOf("doing")
console.log(index)

//3. startsWith() method - 
// Determines whether a string begins with the caracters of a specified string. 

console.log(str.startsWith("Hello"))


//4. slice() method
// method extracts parts of a string and returns the extracted parts to a new string
let newStr = str.slice(0,5)
console.log(newStr)

//5. toLowerCase()
//converts string to lowerCase letter
let x = "My naMe is Nikhil"
console.log(x.toLowerCase())

//6. toUpperCase()
//converts strinf to UpperCase
console.log(x.toUpperCase())
var z=x.toUpperCase()
console.log(z)

//7. trim()
//removes whitespaces from both side of a string
let searchText = "     salesforce lwc    "
console.log(searchText.trim())







