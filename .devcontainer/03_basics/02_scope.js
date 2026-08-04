// scope: the variable declare in curly bracket can only be used in that barcket or the area where
// only we can used that scope 
if (true) {
    let a=10
    console.log(a);// we will get and output 
}
//console.log(a);// herer it will give us an error because a is declared in the if block so 
// it can olny be used in if block 
// global scope : it is declare globally and we can axis it form any where 
let b=300
if(true){
    let b=44
    console.log(b);// it wil print 44 it will acees the scope value 
}
console.log(b);// it will give us an output of 300 becz b is declare globally 
// nested scope 
function one() {
const username="rushi"
function two(){
    const website=" youtube"
    console.log(username);// it will print rushi becz for function two fucntion one is a parent 
    // and username is declared in function one so function two can axis it easily 
}
    //console.log(website);// it will give us an error because func is declare in func two so it 
    //cant axis outside function two 
    two();// rushi will be printed 
}
 
// hoisting : different ways to declare func and calling of func
console.log(addone(5));
function addone(num1){
    return num1+2
}// we will get the outpur 7 still function is called before function is define 
// 2nd way we stored the func in variable 
console.log(sum(4));
const sum= function (num){
    return num+2
}// here it will will not work becz we stord the function in variable sum and befor intalization we cant used it 

