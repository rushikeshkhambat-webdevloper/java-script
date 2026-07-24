// now we have two types of data 
// primitive : they are pass by value(( pass by value )) in built we can say ex numbers strings undefined symbol 
// null bigInt bollean 
// non primitive : the are pass by reference they are made by user and made using primitive 
//ex Arrays , function , objects 
// Arrays : grp of varibales or collection of differnt dataty pes 
const heroes =["rushi"," Abhi"];
console.log(heroes);// typeof heroes is object 
// objects: they are ther grp of collection of data of similar thing  return type is object 
let person={ 
    name:" rushi",
    age: 20,
}
console.log(" person");
// functions: it is a peice of code written to perform any task 
const myfunction= function(){// return type of function is object
       console.log("hello world");// 
}





// /++++++++++++++++++++++++++++++++++++++


// memory mangament in js 
// Stack memory it only stores the primitive data types means pass by value 
let a=10;
let b=a;
b=30;
console.log(a);// outuput will be 10 onle because of pass by value we are pasiing the copy if w
// if we make changes in value it will not affect the original value 
console.log(b);
// heap memory contains all the non primitive pass by ref
let obj1={
    name: "rushikesh"
}
let obj2=obj1 
obj2.name="rushi";
console.log(obj1.name);// here output changes because of pass by ref here we are passing the ref
// original value we cans say if we make changes in value it will affect the original value 
console.log(obj2.name);