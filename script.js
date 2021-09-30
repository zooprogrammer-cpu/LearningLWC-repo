//*****var keyword****//
//It can be updated and also can be re-declared
//var keyword two type of scope global and function
//not block level scope

var course ="zero to hero"
console.log(window.course)

function abc(){
    var anotherCourse= "hero in lwc"
    console.log(anotherCourse)
}

abc()
abc()

//console.log(anothercourse)

//block scope
if(2===2){
    var x = 10
}
console.log(x)
console.log(window.x)
/***************let keyword **************/
//It can be uodated and also cannot be re-declared

let course2 = "zero to hero 2"
course2 ="zero to hero in lwc"
console.log(course2)
//let course2 ="kk"

function xyz(){
    let y ="nikhil"
    console.log(y)
}

xyz()
//console.log(y)
if (2 ==2){
    let z= "salesforce"
    console.log(z)
}
//console.log(z)
//*************consts keyword************//
//It cant be updated and also cannot be re-declared
// const keyword supports function and block level scope
const course3 ="zero to god"
console.log(course3)
//const course3="lwc"

function def(){
    const f=20
    console.log(f)
}
def()
const f = 40
console.log(f)

if (1==1){
    const f = 50
    console.log(f)
}
console.log(f)












