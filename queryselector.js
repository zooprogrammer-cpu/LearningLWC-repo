let element= document.querySelector('div')
console.log(element)
element.style.color='red'

let elementAll = document.querySelectorAll('div')
console.log(elementAll)

Array.from(elementAll).forEach(function(item){
    item.style.color="green"



})
