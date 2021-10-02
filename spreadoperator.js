//spread operator

//1 Array
var arr = ["a","b","c"]
console.log(arr)

//array index starts from zero

console.log(arr[0])
console.log(arr[1])
//to add one more value to the array, arr.push
arr.push("3")
console.log(arr)

//2 objects
var obj2={
    "name":"salesforce",
    "age": 23,
    "full name": "John Doe"
}
// one way of accesing values in objects- dot notation
console.log(obj2.name)
console.log(obj2.age)
//console.log(obj2.full name)//cannot access value with space in between with dot notation 

//another way of accessing values in objects- array notation. Allows acces to value when there is a space in between words. 
console.log(obj2["name"])
console.log(obj2["full name"])

obj2.hobbies="cricket"
console.log(obj2)


