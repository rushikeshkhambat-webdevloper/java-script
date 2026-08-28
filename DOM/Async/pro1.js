// now as per our target we want random color for our bgc to change so 
// here we need hex valeu which contains 5 digit value form mixed up of hexadecimal 
// generate the random color 
const randomcolour= function(){
    const hex='012345678ABCDEF'// this is the hexadecimal vlaues for our hex color 
    let color='#'// our color will start form #
    for(let i=0; i<6 ; i++){
        color+= hex[Math.floor(Math.random()*16)];
    }
    return color;
}
// now sleect the buttons we havt to work on them 
let id;
const changecolor= function(){
    function changebgc(){
        document.querySelector("body").style.backgroundColor=randomcolour ();
    } 
    if(id==null){
   id=setInterval( changebgc,2000)}// if we click on the start for every two second the color will change 
}
const stopchangecolor= function(){
   clearInterval(id);// we stop the interval 
   id=null;
}
document.querySelector("#start").addEventListener('click', changecolor);
document.querySelector("#stop").addEventListener('click',stopchangecolor)
