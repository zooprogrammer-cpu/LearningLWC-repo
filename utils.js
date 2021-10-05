// Normal export
// export const PI = 3.14


// export function add(a,b){
//     console.log(a+b)

// }

//can aslo export the two from above together: 

// const PI =3.14
// function add(a,b){
//     console.log(a+b)
// }
// export {PI, add}


//export with alias
const PI_data =3.14
function add(a,b){
    console.log(a+b)
}

export {PI_data as PI, add}

//export with default

// export default function minus minus(a,b){
//     console.log(a-b)
// }