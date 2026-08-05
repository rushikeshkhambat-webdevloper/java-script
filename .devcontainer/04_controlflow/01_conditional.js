// control flow : we should have control on our program with some condtion 
let temp=40
if(temp<50){// if the conditon in this temp is true the if block will run 
    console.log("survivng temp");// it will run because condtion is true here 
}
else{// if conditon in temp is false if block will run 
    
    console.log("cant survive");
}
// nested if else when we have multiple condition so we need multiple if esle inside if else 
let score=200
if(score<100){
    console.log(" less than 200");
} 
else if(score<150){
    console.log("socre is less than 150");
}
else{
    console.log(" score is equal to 200");
}
// && and logical operator 
let a=10
let b=20
if(a===10&&b===20){// and operator stays that both the condtion in the parenthesis of if should be true then only blck of if wil run 
    console.log(" code is excuted");
}
else{
    console.log("code is not executed");
}
// || or logical operator 
let c=2
let d=4
if(c===2||d===1){// here one of the condition from both gets true then if block will run only one should get true 
    console.log(" logical operator works ");
}
else{
    console.log(" condtions are true");
}
