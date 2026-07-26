// let go more in the string 
// string: string is the primitive data type and it is and set of char or we can say they are w
// words etc 
// string intercoplation : the proper way to add two stringn we used ${to inject variable value} and `
// const name="Rushi"
// const repocount=50
// console.log(`My name is ${name} & i have${repocount}on github`);
// now we will se some of the great methods of strings they are so many we will se the some of them 
// string methods are nothing but we can say they are : they are the functio of strings we can 
// perform on string as per our requirement 
// const name="Rushikesh"
// // here as a index of arrays which start from 0 we have keys in string which start from 0
// // means R=0 then u=1 s=2 like that here numbers means key and char menas values 
// console.log(name.length);// output will be9
// console.log(name[0]);// here the output will be R
// console.log(name.__proto__);// the proto type of the string is object because we can say that the 
// // length property of string cames from string so 
// console.log(name.toUpperCase());// output RUSHIKESH
// console.log(name.charAt(2));// output s
// now there are two more intresting property of string 
// substring and slice we can divide the string 
const name="Rushikesh"
// substring 
// console.log(name.substring(0,4))// here we want to give the range upto which key(index)
//we want our value(char) and here in the range it wil not include 4 upto 3 it will work 
// out put is 4 
// slice here slice works same but we can have negative also which start from end 
//(-2,4)// if range is give like this how it works we will conver this -5 to positve index(key 
// key= negativekey+length of the string =  key= 7
console.log(name.slice(-7,4));// output is sh
// here we more 4 methods 
const anothername="   Rushi"
console.log(anothername.trim());// output will be Rushi it wll trim the extra space before the stringh 

// Replace 
const newname="Aushi"
console.log(newname.replace('A','R')); // OUTPUT Rushi 

// Iclude 
const completename=" Rushi-khambat"
console.log(completename.includes('Rushi'));// output true 

// split : change string into arrays req - or"   "
const newString=" Rushikesh-Abhishek-khambat"
console.log(newString.split('-')); //output [ 'Rushikesh', 'ABHISHK', 'khmab']

