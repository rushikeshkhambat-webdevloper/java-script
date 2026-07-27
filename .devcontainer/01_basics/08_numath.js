// Numbers : it is and data type in js for integers 
// ways of writing numbers 
const num=900
console.log(num);// output will be 900
// another way to write nums 
const number= new Number(100);
console.log(number);// here the output will be numbers: 900 but it will specailly tell that 
// 100 is an number 
// methods of the numbers 
const newnum= 400
console.log(newnum.toString().length);// it will give the length 3 and type of string 
console.log(newnum.toFixed(3));// output will be 400.000 it will givce three numbers after 400 
// intersense it convert number into decimal 
const score=250.988
console.log(score.toPrecision(3));// it will round up the digit but used it smarlty the numbeer 
// before decimal used parametere of to precision as per it output is 251
const newscore=100000
console.log(newscore.toLocaleString('en-IN'));// it will convert the 100000 into readable form with 
// comas 10,00,000 something like that 
// then we also have Max_value 
// then we also have Min_value 



//++++++===========++++++++++==Maths in js +++++++++++++++===========+=========//
console.log(Math)// output will be object specially math is an huge library in js 
// methods of maths 
console.log(Math.abs(-4))// abs convert negative to positive and positive remains constant 
console.log(Math.round(4.6))// round round of the digit 
console.log(Math.ceil(4.2))// it round of the digit to possible max value 
console.log(Math.floor(4.9))// it round of the digit to possible min value 
console.log(Math.min(3,4,5,6))// it will find min in array 
console.log(Math.max(1,2,3,4,9))// it will find the max in array 


console.log(Math.random());// this method gives the output in the range of 0 to 1 
// now to take the number above 0 we will declare one formula 

const min=10
const max=20
console.log(Math.floor(Math.random()*(max-min+1))+min)// here we multiply with the formula 
// we created then it will give the value greater than min and greater than 0
