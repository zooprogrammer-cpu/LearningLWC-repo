
function checkIsSuccess(data){
    return new Promise(function(resolve,reject){
        if(data === "success"){
            return resolve("successfully executed")
        }
        else {
            return reject("unsuccessfully executed")// reject prints in red color in the console
        }
     })
}
checkIsSuccess('success').then(function(result){
    console.log(result)  //then method to extract data in real life//if succes is not in this, unsucessfully executed shows up. 

}).catch(function(error){
   console.error(error)

})

//fetch data from server

fetch('https://api.github.com/users/karkranikhil').then(function(result){
    // console.log(result)
    return result.json()

}).then(function(response){
    console.log(response)


})








