// now we have to work on clock so we need to select the clock to dispaly date and time 
const clock=document.querySelector("#clock")
console.log(clock)
// now we want our time to be update after every interval and our interval is our 
// second so we have one method for it 
// set interval 
setInterval(function(){
    let time= new Date();// we stored 
    clock.innerHTML=time.toLocaleTimeString();// it will show our time 
},1000);// the 1000 are miliseconds means 1 seconds after every it will update its time 