// here we will write the js for the project 1 using dom and we are also going to used events  
// if i slecet any one of the color it will changes the bgc accr to that color  
// first slect color button  
const button= document.querySelectorAll(".button") 
console.log(button) 
const body= document.querySelector("body") 
console.log(body) 
// now to when i click on any color the bgc should change and its  
// 4 color i have to do thing repeatively so button is a nodelist  
// i can used for each on it  
button.forEach(function(button){ 
    console.log(button) 
    // now i click on any butoon the color should change this is the event  
    // event: something that takespalce on webapge ex: i click on button  
    // i move my mouse page reloaded everything is an event  
    // now when i click on any color button the bgc wil change so  
    // here im using click event so if i used event someone should listen it  
    // so it should change the color and it will listen it as a function  
    button.addEventListener('click',function(e){ 
        console.log(e) 
        console.log(e.target)// on which i will have curser it will give mi that element  
        if(e.target.id==="grey"){ 
            body.style.backgroundColor="#726c6c" 
        } 
         if(e.target.id==="blue"){ 
            body.style.backgroundColor="#2808f7" 
        } 
         if(e.target.id==="white"){ 
            body.style.backgroundColor="#f6eeee" 
        } 
         if(e.target.id==="yelow"){ 
            body.style.backgroundColor="#f5db30" 
             
        } 
    }) 
})
