// Truthy values and falsy values there are some of the values in js we assume it as a true and false 
// truthy values : "0" 'false' " ", [],{}. function(){}
// falsey values: 0 -0 BigInt on , "".null , undefined , NaN
let username=" rushi "
if(username){// assum that codition is true 
    console.log(" truthy values ");// it will run because it assume that rushi is true 
}
else{
    console.log(" falsy values");
}
let name=0
if(name){// it assume that codition is false so if block wil not run 
    console.log("not falsy value");
}
else{
   console.log(" falsy value");
}
// some of the new operators 
// nullish coalesicng operator ?? it used when we have two or three values in that values we 
// have something lie number then null the undefined then we will select the num because we can used it 
// and if we dont have null and undefined in it then it wll always choose the first 
let val1;
val1=null??10// if null is there then it will choose 10 same for undefined 
console.log(val1);// output will be the first value 
// ternamry operator : we can also says it as a conditional operator because it works like an if and else 
    const teaprice=100
teaprice<=80? console.log(" less than 80"): console.log(" more than 80")// if the
// conditin is true then first console will print if cond is false second console wil print 