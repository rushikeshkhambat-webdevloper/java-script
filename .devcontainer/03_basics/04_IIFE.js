//iife: immediately invoked function expresion it used to avoid global polution and to execture code right after function 
// syntax
(function chai(){
    console.log("rushi here");
})();
// we can also pass the value and we can also used iife in the arrow function 
( (name)=>{
    console.log(`${name}is here` );
})("abhi");// abhi is the output here 

