// Pomise: it is an object which represent the result asynchronourswork( the work which dont wait its execute )
// now we create promise and we havce consume it 
// we have three stage pending completed rejected 
// lets have some example 
const promisone= new Promise(function(resolve,rejected){
    // here the resolve and reject are the two operations of the promise 
    // when operation get succesful we used to resolve to handle it 
    // and we used reject to handle the error 
    setTimeout(() => {
        console.log(" Async task is completed ")
        resolve();
    }, 1000);
});
// now lets consume this promise 
// now here we are resolve means our task or operatio we will used then key workd to consume it 
promisone.then(function(){
    console.log("pormise is consumed ")
})


// we can also pass the values in the parenthesis of resolve 
new Promise(function(resolve,reject){
    setTimeout(() => {
        resolve({username:"Rushikesh", age:"18"})
    }, 1000);
}).then(function(user){
    console.log(user);// we will get an output that we had passed in the parenthesis of resolve 
    
})

// now lets handle the error and with error we will also channing of then and catch to handle we need reject to stay that error is there and 
// to consume this promise we need the catch keyword 
const promisethree= new Promise(function(resolve,reject){
      setTimeout(() => {
        let error=false;
        if(error===false){
            resolve({username: "rushi", email:"gmail.com"})
        }else{
            console.log(" Eroor in the promise ");
            reject();// to handle the error 
        }
      }, 1000);
});
// lets consume promisthre using chanin 
promisethree
// this is the thenabler or chain and finaaly is used to tell us that either the promise is resolved or the promisd is reject because having error in that 
    .then(function(user){// if conditon  gets ture it will run 
    console.log(user)
    return user.username;
}).then(function(username){
    console.log(username)
}).catch(function(error){// else it will run 
    console.log(error);
}).finally(()=> console.log(" finally the promise will be resolved or rejected "))

// async: async is an keyword used before the function it tell us about the operation we are going to perform in the functin in an asynchronous 
// await: it means that wait for promise to complete 
const promisefour= new Promise(function(resolve,reject){
      setTimeout(() => {
        let error=false;
        if(error===false){
            resolve({username: "rushi", email:"@gmail.com"})
        }else{
            console.log(" Eroor in the promise ");
            reject();// to handle the error 
        }
      }, 1000);
});
 async function consumepromisfour () {
    try {
        // if the promis is resolved this will run 
        const response= await promisefour;
        console.log(response);
        
    } catch (error) {
        // if it have rejection means error we will used it like this 
        console.log(error); 
    }
 }
 consumepromisfour();

 // fetch: fetch is an funciton of js which makes the api request(It asks the server for response(data))
 // we get the data in the form of string we have to convert in it the form of object 
 async function getAuser() {
    try {
        const response= await fetch('https://jsonplaceholder.typicode.com/users');
        const data= await response.json()
        console.log(data)
    } catch (error) {
        console.log(" Eroor is there "); 
    }
 }
 getAuser();

 // we have one another way of using then and catch
 fetch('https://jsonplaceholder.typicode.com/users').then((response)=>{
    return response.json;
 }).then((data)=>{
    console.log(data);
     }).catch(function(error){
        console.log("Eroor is there "); 
     })
     