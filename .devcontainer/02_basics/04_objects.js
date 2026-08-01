// we will learn more about objects 
// second way to declare objets which is called singelton or object constructor 
const user= new Object()
user.id="1"
user.name="Rushi"
user.IsLoggedIn=false
console.log(user);// output will be will have all this value in our object 
// nesting of objects 
const newuser={
    email:"rushi@gmail.com",
    fullname:{
        name:"Rushi",
        lastname:"khambat"
        // we can do nesting more if we need 
    }
}
//now if i want to axis value in the nested objects 
console.log(newuser.fullname.name);// we get the output as a Rushi
// merge the two objects 
const num1={1:"a",2:"b"}
const num2={4:"c",5:"d"}
// we are using spread method to merge both of the objects 
const num3={...num1,...num2}
console.log(num3);// both the keys and values of bothe objects wil be in num3 object 
// Objects in arrays : when date is came from data base we stored it as a key and value 
// and we store it in one array 
const data=[
    {
        id:"2",
        email:"rushi@gmail.commmmmm"
    },
    {
        //object2// we can have so many object in one single array 
    }
]
// now i want to axis the value of the array and the value of the key of the object 
console.log(data[0].email);// here we will get our output 
// now we can have all the keys and values of objects in one single array and the type of it will be 
// objects 
console.log(Object.keys(user));// we get all the keys in one single array 
console.log(Object.values(user));// we get all the values in one single array 
// we can check entries and the output will be the array form single array for each key and 
// value will be allocated 
console.log(Object.entries(user));
// we can also check does this keys is ther in our object or not the output will be in the form of true and false 
console.log(user.hasOwnProperty('email'));// output will be false for sure 
//+++++++++++++++++++++++++++++++++++
// we will se destructuring: here if we want to axis the value of the object we used .method
// which is so lengthy instad of it we can simpily used data structuring 
console.log(user.id);// if i want id so many time instead of writin this all i can simpily 
// used destructruing 
const {id}=user
console.log(id);// we will get our id 

// now we will learn about api's 
//API: it is an application which brings data for our software or website or app from the 
// servers or database it brings in the form json 
// json: the form of data that api  brings from a database 
// json is an like an object only in which keys and values bothe are in the form of strings 
// {
//     "name":"rushi",
//     "id": "2",
// }
// we can also json in the from of array in that array there will be so many objects 
// [
//     {

//     },
//     {

//     }
// ]
