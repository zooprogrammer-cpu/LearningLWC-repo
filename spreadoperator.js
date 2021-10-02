// //spread operator

// //1. Array
// var arr = ["a","b","c"]
// console.log(arr)

// //array index starts from zero

// console.log(arr[0])
// console.log(arr[1])
// //to add one more value to the array, arr.push
// arr.push("3")
// console.log(arr)

// //2. Objects
// var obj2={
//     "name":"salesforce",
//     "age": 23,
//     "full name": "John Doe"
// }
// // one way of accesing values in objects- dot notation
// console.log(obj2.name)
// console.log(obj2.age)
// //console.log(obj2.full name)//cannot access value with space in between with dot notation 

// //another way of accessing values in objects- array notation. Allows acces to value when there is a space in between words. 
// console.log(obj2["name"])
// console.log(obj2["full name"])

// obj2.hobbies="cricket"
// console.log(obj2)


// 3. Expanding if strings
let greeting = "Hello everyone" 
let charList =[...greeting]
console.log(charList)
console.log(charList[6])

//4. Combining array
let arr1=["amazon", "google"]
let arr2=["instagram"]
let arr3= [...arr1,...arr2]
console.log(arr3)

//5. Adding values to an array
let arr4=["a","b","c"]
let arr5 =[...arr4, "nikhil"]
console.log(arr5)

//6. Combining objects
let obj1 = {name:"salesforce", age:23, date:"23/10/1990"}
let obj2 = {name:"facebook", age:55, "next":"helo"}
let obj3= {...obj1, ...obj2}
console.log(obj3)

//7. Shallow Copy
var arr10 = ["x","y","z"]
// arr10.push(20)
// console.log(arr10)
// var arr11 = arr10
// arr11.push("nikhil")
// console.log(arr10)
// console.log(arr11)  // the problem here is when arr10 got copied into arr11, the value of arr10 also got updated with value of arr11. so never use push operator. 

//Here is how to do shallow copy an array correctly: 
var arr11 = [...arr10]
arr11.push("nikhil")
console.log(arr10)
console.log(arr11)

//8. Nested copy
var arrObj =[
    {name:"nikhil"},
    {name:"salesforce"}

]

// var arrObj1=[...arrObj]
// console.log(arrObj1)
// arrObj1[0].name ="superman"
// console.log(arrObj)
// console.log(arrObj1) // shallow copy did not work in nested object since it replaced "nikhil" with "Salesforce" in arrObj also

//Hack for nested copy
var arrObj1 = JSON.parse(JSON.stringify(arrObj)) // JSON.stringify converts into string and JSON.parse  converts into object. 
arrObj1[0].name="superman"
console.log(arrObj1)
console.log(arrObj)// you can see that the original arrObj still has nikhil and the new arrObj1 has superman





















