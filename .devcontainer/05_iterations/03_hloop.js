// now we will learn about some more lopps they are used for particulary array 
// first is forof loop same like and for loop 
const arr=[1,2,3,4,5]
for (const elements of arr) {
    console.log(elements);// all the elements of the array will be printed 
}

// map: map is nothing but an object it uses to sotre the values they are sotre in key and pair and every key and pair is 
// unique means we cant repeat it 
const map= new Map();
map.set('IN',"India")
map.set('FR',"France")
// now we will ussed for of loop ot iterat in this map
for (const [key,value] of map) {
    console.log(key,":-", value);// we get our outpur as IN India and FR France 
    
}
// now to iterat in the object we cant used for of loop becaause we cant axis the value usisng it 
// we have one another loop name for in 
const myobject={
    js:"javascript",
    py:"python"
    
}
//  now i want to iterat in this object and we know data in the object is in the form of key and values 
for (const key in myobject) {// we can used this loop when we have values in key and pairs if we used this loop for 
    // arayys then it will return the index of the array as a key so  we used forof loop for array     // console.log(key);// it will give mme  the kes 
    // console.log(myobject[key]);// this wil give mi value 
    // so to get key and value together we will write something like  this 
    console.log(`${key} its stands for ${myobject[key]}`);
}