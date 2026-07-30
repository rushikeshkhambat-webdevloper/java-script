// Arrays: grp of variables but in js the variables can have diff data type its valid 
// two ways to declare the array 
const myArr=[0,1,2,3,4,5]
console.log(myArr);// array index start from 0 
// another way 
const newArr= new Array(1,2,3,4,5)
console.log(newArr);

// Methods of Arrays 
myArr.push(6)// it will add the element at last 
console.log(myArr);
myArr.pop(6)// it will remove six 
console.log(myArr);
//console.log(myArr.unshift(9));// the outpput of this will be it will give us 9 at the first index 
// myarr.shift// it will shift the array one plus before and first elment of the array is pop 
// myarr.includew=s()// it check does the element we pass in included or not 
console.log(myArr.indexOf(3)); // it will give us index of 3 element in the array 
console.log(myArr.join());// it will  convert the array into  readable string  and the type of arraay will be 
// string ..
// slice and splice 
// slice :  it gives us the subarray of array and we need declare range in which last index 
// of the range is not included 
console.log("A" , myArr);
const myar1= myArr.slice(1,3);
console.log(myar1);// it will give us  the element from index one  to index two 
// splice: it is something like if we give a range  it includes first and  last element and 
// it removes that index element from the main array 
console.log("B" ,myArr);
const myar2=  myArr.splice(1,3);// if we print our myArr then 1 to 3 index element form the array 
// is removed 
console.log(myArr);