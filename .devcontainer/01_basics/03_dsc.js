// data types conversion in js 
// first we will understannd everything with an examples 
// convert string into numbers datatype 
//let  score="33"// now we  created a variabel and we give it value 33 now note one thing here 33 is wriiten in " double code "// so it is the string 
let score="77abc"
console.log(score);
console.log(typeof score);// here we will get the type of data 
// now we change string datatype to number 
let changedScore= Number(score)
console.log(typeof changedScore);// here the output will be  the number because we changed the data type 
console.log(changedScore);// NAN it give us not an number it means that we changed the  string  
// datatype to number and but the value in that varibles is not number then it will give us nan not an number 
// now if we change that variable score to 
/* score=true it will give us an output of 1 // becuae we changed the data type in numbner and 
and true have the valueu of 1 
similarly false will give us a 0
*/
// bollean conversion 
let isLoggedin=true
console.log(typeof isLoggedin);// we get the output as  a bollean 
// now if i changed  the value of varibale to 
/* isloogged in to = 1 output will be true 
                   ="rushi" output will be true 
                   =""output will be false
*/
// string conversion 
let num= 44
let newnum= String(num)
console.log(typeof newnum)//  the output will be the string 
console.log(newnum)//  so the output will be 44 because if we still have the value as a number it will give us an output of 
// because num can change into string 