let arr= [2,3,5,7,9,10]
//syntax  for any array methods is: 

// arr.methodName(function(currentItem, index, actualArray){
// }

//1. map() method

// newArray= arr.map(function(currentItem, index, array){
//     return currentItem*2
//      })
//  console.log(newArray)


 // a bit more advanced  version of map() to print to console
 let newArray2= arr.map(function(currentItem, index, array){
    console.log(`currentItem is ${currentItem} index is ${index}, array ${array}` )
    return currentItem*2
     })
console.log(newArray2)

//2. filter() method - to get values higher than 5
let newArray3= arr.filter(function(currentItem,index,array){
   return currentItem>5

})
console.log(newArray3)

//3. every()




 






