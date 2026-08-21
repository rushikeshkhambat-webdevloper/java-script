// here we will going to write js for our bmi project 
// now here we are working on one form the event will be on form so we have to
// select the form first 
const form=document.querySelector("form")
//console.log(form)
// now here we will have an event listneer now here the evnet submit event 
// because we are submitting the form 
form.addEventListener('submit',function(e){
    e.preventDefault()// weight until user not click the calculate button or 
    // we can say that wait until user not enter the height and weight 
    // now to calculate bmi we need height and weight and to store the 
    // result we also have to select result 
    const height= parseInt(document.querySelector("#height").value)// because 
    // we have input as a text so we wil get string to calculate the bmi 
    // we will need integer so we typecast it into int form string and we want vlaue 
    // of height so we used .value 
    const weight= parseInt(document.querySelector("#weight").value)
    const result= document.querySelector("#result")// no need to typecast becaue 
    // height and weight wil be int only so defaluty result will be also in int
    const result2= document.querySelector("#result2")
    console.log(result2)
    // we need some check 
    if(height==='' || height<=0 || isNaN(height)){
        result.innerHTML=`Please enter a valid height ${height}`;
    }
    else if(weight==='' || weight<=0 || isNaN(weight)){
        result.innerHTML=` Please enter a valid weight ${weight}`;
    }
     else {
        const bmi= Number((weight/ ((height*height)/10000)).toFixed(2));// to calculate the bmi 
        // to save result and display it 
        result.innerHTML=`<span> ${bmi} </span>`
        // to see in which range you are 
         if (bmi<=18.6){
        result2.innerHTML=" You are under weight "
    }
     else if (bmi>18.6 && bmi<=24.9){
        result2.innerHTML=" You are in normal weight range "
    }
    else {
        result2.innerHTML=" You are over weight"
    }
    
}})
