// we will learn some more methods of arrays  here 
// if we want to add the elments of two arrays we have some methods 
//1 push : but it will create arrays of arrays 
// concat: it will add the elments of the both arrays in single arrays and concat need new 
// variable for output 
const num=[1,2,3,4,5]
const num2=[6,7,8,9]
// const num3= num.concat(num2)// here elements of num and num2 are added in single arrays num3
// console.log(num3);
// spread method : its also used for to add elements of the two arrays in single array 
// we need another variable for it 
const num3=[...num,...num2]
console.log(num3);
// one more method  we not useely used it more 
// array.flat : what it does if we have so many arrays in single  array then it put all elements 
// multi arrays in single  arrays 
// more methods 
console.log(Array.isArray("Rushi"));// this method is used to check does the thing in parenthisis 
// is array or not 
console.log(Array.from("Rushikesh")); // it convert the thing into array 
// if we had key and value in the array so for now it will give us and empty array 
console.log(Array.from({name: "Rsk"}));// this will give us an empty array because we are passing 
// key and its value in this 
// we can also convert many variables value into array 
let s1=100
let s2=200
let  s3=500
console.log(Array.of(s1,s2,s3));// it will  add all the values of the given variable in two single 
// array 
