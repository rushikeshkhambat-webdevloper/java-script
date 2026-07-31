// objects: it is a grp of info about similar things in the form of key and value 
// two ways to declare the object 
// object literals we are going to see and another is object.create which singelton we will se it later 
// declare the symbol data type and used in objects 
const mySym= Symbol("key1");
const Jsuser={
    name: " Rushikesh",
    [mySym]:"mykey1",// here if we want to used symbol in objects we have syntax of brackets  
    age:20,
    location: "Maharashtra",
    email: "@gmail.com",
    isLoggedIN: false,
    lastLoggedIn: ["Monday","tuesday"]
}
console.log(Jsuser);
// Axis the value of the objects 
//1 first .way
console.log(Jsuser.email);// we used this way but 
// 2nd way // if in the object the key is string and the value is also string then we need the 
// second way to axis the value in the objects 
console.log(Jsuser["email"])// when key is also and object 
console.log(Jsuser[mySym]);// here the outpur will be the value in mySym and the type of will be symbol 
// to change the value in objects and freeze the value in objects 
Jsuser.email="Abhi@gmai.com"// we can change the value of email in our object 
//Object.freeze(Jsuser)// now here the email which i had changed will be fixed in the object
Jsuser.email="rush@gmail.com"// here gmail will not change becaused we had freeze it 
console.log(Jsuser);// output will be abhi gmail only 
// we can also used functio in object 
Jsuser.greeting= function(){
    console.log("Hello Js user");// here we will be g
}
console.log(Jsuser.greeting());// here we will get the output as we return the code in function 
Jsuser.greetingtwo = function(){
    // we are axising the value of the key from object to used in our funtion 
   // string intercoplation we are using 
    console.log(`hello js user ${this.name}`);// this is used to ref same object 
}
console.log(Jsuser.greetingtwo());

