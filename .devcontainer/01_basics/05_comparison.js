// basic comparison of data types in js and it will give us an output in bollean 
// console.log(2>1);
// console.log(2<1);
// console.log(2>=1);
// console.log(2<=1);
// console.log(2!=1);
// the output for all of the above comparison will right and it will in bollean data type 
// now the comparison we want to avoid 
// console.log("2">1);
// console.log("02">1);
// here the output is true because js automaticly convert string to numbers and we want to a
// avoid writting this type of conversion 
// for null cases 
console.log(null>0);
console.log(null==0);
console.log(null>=0);
// equallity works differnt and comparison operators >= change null to numbers to 0 so output of 
// third line is true 
// for undefined stup
console.log(undefined>0);
console.log(undefined==0);
console.log(undefined<0);
// here output for all of the code is false always becz we had not define anything 

// strict check ===
console.log("2"===2);// here data type is notconverted into any other data type so string will 
// not gonna convert into number so the output will be false 