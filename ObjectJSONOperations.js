let obj1={
    name1: "salesforce",
    age: 23,
    dob:"23/10/1990"

}
// 1. Object.key()
// Keys are all the properties in the object such as name1, age and dob
console.log(Object.keys(obj1))

//2. Object.values()
console.log(Object.values(obj1))

//3. JSON.stringify - convert the object to string formats
let str= JSON.stringify(obj1)
console.log(str)

// 4. JSON.parse - reverse of Stringify. Converts strings back to object
console.log(JSON.parse(str))


