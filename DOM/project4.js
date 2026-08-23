//  now we will write js for our 4 th project 
// the project have algo easy that we have to create one random number and user will have 10 guess to guess that random number if he guess right 
// he won other wise game will end after 10 guesses 
let randomnumber= parseInt(Math.random()*100+1);// it will not give us a decimal value it wil give us a natural nums
//console.log(randomnumber);

// now to create this game we have to select the elements to perfom task on them and they our game will be created 
//1.select the button first 
const submit= document.querySelector("#subt");
//2.select the value that userinput 
const userinput= document.querySelector("#guessfield");
//3. now select the previous guess where will show are user his guesses 
const guesslot= document.querySelector(".guess");
//4. now to update our remaing guesse we have to select it 
const remaining= document.querySelector(".lastresult");
//5. here we will select lowand hi to show user ho closed he is to his answer
const loworHi= document.querySelector(".LoworHi")

// now if our game is over we have to start the game again so we will select the div again 
const startover= document.querySelector(".resultParas")
console.log(startover)

// now we wil create one more element of para when our game is over to start new game it wil guide user 
const p= document.createElement("p")
console.log(p);

// now create some new variable to store the values 
//1. we will have an array in which we can store the previous value 
let previousGuess=[]
//2. to start numGuess and update that guessremaing we need this variable 
let numGuess=1
//3. to playgame again it should give a permision 
let playgame= true

// now if useris there to play game then 
if(playgame){
    submit.addEventListener('click', function(e){
        e.preventDefault();// after click it should wait not let directly go on server 
        const guess= parseInt(userinput.value); // now we will take the valuue from user and store it in guess variable 
        console.log(guess)
        validateGuess(guess)// we call this function and we pass the guess argument in this 
    });
    }
// now we will write multiple function to make our project run 

//1. validateguess: this function is for to check the value that user enter is validat meaans 
// does it is in the 1 to 100 then
function validateGuess(guess){
    if(isNaN(guess)){
        alert("Please enter a valid number")
    } else if(guess<1){
         alert("Please enter a valid number")
}     else if(guess>100){
         alert("Please enter a valid number")
}     else{
         previousGuess.push(guess)// if the number is valiade then push tht number in the array 
         if(numGuess===11){
            displayGuess(guess)// we call another one mehtod and we pass the guess arguments in it 
            displayMessage(`Game is over : Random number is ${randomnumber}`)// we pass this argument and we call another method 
            endGame()// we call one more method 
         }
            else{
                displayGuess(guess)// we call the method again 
                CheckGuess(guess)// we call the method again 
            }
         }
}

//2. CheckGuess: we create this function to check that number is equall to random or lororhigh to random if it is equal then 
// we won if not the we will display some mesaage 
function CheckGuess(guess){
    // in this we called the display method and we pass the arguments as a mesage 
    if(guess===randomnumber){
        displayMessage("You guess is right")
    } else if(guess<randomnumber){
        displayMessage("Number is too low")
    } else if(guess>randomnumber){
        displayMessage(" Number is too high")
    }
}

//3. displayGuess: we create this function to display our previous guess and update our remainng guesses 
function displayGuess(guess){
    userinput.value=''
    guesslot.innerHTML +=`${guess}, `// the value that user will enter will be store in guesslot that our are previous value 
    numGuess++;// user enter the value the count of guesses allwoed will increase 
    remaining.innerHTML=`${11-numGuess}`// here we wil update the remaining guess 
}

//4. displayMessage: we create this function to display some message 
function displayMessage(message){
    loworHi.innerHTML=`<h2> ${message} </h2>`
}

//5. endGame : if user excedd it limit the game should end and we have to start the new game so wee need to end to clear the input box and show 
// user that start the new game 
function endGame(){
userinput.value='';// clear the input box 
userinput.setAttribute("disabled",'');// we set attribut now user cant enter the value 
p.classList.add('button');// we give one class to p name button 
p.innerHTML=`<h2 id="newGame"> Start new Game</h2>`;// now we have h2 element in our div tag of class name pareresult 
startover.appendChild(p);// insert the h2 in div 
playgame=false;// game is over 
newGame(); // we called the new method again 
}

//6 newGame: the new game will start again 
function newGame (){
    // if we have to start newgame we have assign vlaues newely again 
    const newgamebutton= document.querySelector('#newGame');
    newgamebutton.addEventListener('click', function(e){// after we click the button every thing new should get appear 
        randomnumber=parseInt(Math.random()*100+1);
        previousGuess=[];
        numGuess=1;
        guesslot.innerHTML='';
        remaining.innerHTML=`${11-numGuess}`;
        userinput.removeAttribute('disabled');
        //userinput.value='';
        startover.removeChild(p)
        playgame=true
    });
}

