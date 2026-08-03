// functions: a piece of code written to perform any task and we can used it multiple times 
// declareation of function and its a pass by value max time 
// add two numbers using function m
function addtwonumbers(num1,num2){   //(num1,num2) this is called as parameters // this is called as function defination 
    let result= num1+num2
    return result// return statment it means that we are returning something fron the function to to our 
    // variable 
}
const result=addtwonumbers(3,2)// function call here we called function and the value we get from 
// function wil be sotred in result (3,2) are argumenst we are passing value 
console.log(result);
// if basics and when we dont pass arguments 
function loginmessage(username){
    // we want to check does we pass username or not 
    if(!username){ // !username is equal too username===undefined// here we had used not logical operator it reversed the bollean values such as 
        // true to false and false to true and the condn in the paraenthisis of the if gets true then onlly the block of if wil run 
        console.log("Please enter an user name ")//if i did not pass usename then output will be this 
        return // this return is to excute block of if after this we write anything it will not execute 
    }
    return `${username}is looged in `// if i pass rushi as a username then output wil rushi is logged in 
}
console.log(loginmessage("rushi"));
// we can also pass the values in parameters 
function username(name="rushi"){
    return `${name} welcome to web development`
}
console.log(username());
// when we have multiple arguments passed to the function then we cna used rest operator 
function price(...num){
    return num
}
console.log(price(200,300,400,500,600));// here we had passed multiple argumensts so 
// using rest operator it wil store every valeu in arrya and return us an array 
// pass the object in function 
const worker={
    name: "rsk",    
    age: 19
}
function handleobject(anyobject){
    return `${anyobject.name} is the worker in our company and age of the worker is ${anyobject.age}`
}
console.log(handleobject(worker));
// we can define object here also 
// pass array in function 
const array=[200,300,400,500]
function findthe2ndindex(myarray){
    return myarray[2]
}
console.log(findthe2ndindex(array));