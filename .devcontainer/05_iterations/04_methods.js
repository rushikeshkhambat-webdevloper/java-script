// now we have some methodss which work like a loops we can iterate in the array using that methods(functions)// 
//  they are a call  back function so we didnt give name to that function 
// forEach this is the method used to iterat in the loop we can axis elment but we can also axis index num and total  array 
const array=[1,2,3,4,5]
array.forEach(function(elements,array,index){// here we have to pass the parameters any variable name we can give but we havve to used that in our body of the function 
    console.log(elements,array,index); // here we will get the all elementso of the array 
})
// now we cans used arrow function also and its easy to read the arrow function for all the methods 
// and we are using {scope}// then if we have to return anything then return keyword is must 
array.forEach((elements,index)=>{
    console.log(elements,index);// same output 
})// we have  one more way 
function print(elements){
    console.log(elements);
}
array.forEach(print);// we will get an same output 

// Filter: now we have another method this method is used to filter data from  arrays and also we can have also have objects in the array 
//  and its return  the value and one more thhing it works  conditon if true then we get  the fiter dat 
const nums=[1,2,3,4,5,6,7,8,9,10]
const newnums=nums.filter((ele)=> ele>4)
console.log(newnums);// its return the value and one more thing is that we get the elements which satisfy the condition 
// now lets have and great example for filter method 
// now if we havve so much data and our user i want specific data on web page then we have to used filter 
const books = [
    {
        title: "The History of India",
        genre: "History",
        publishYear: 2000,
        price: 100
    },
    {
        title: "JavaScript Mastery",
        genre: "Programming",
        publishYear: 2021,
        price: 450
    },
    {
        title: "World War II",
        genre: "History",
        publishYear: 1998,
        price: 250
    },
    {
        title: "Clean Code",
        genre: "Programming",
        publishYear: 2008,
        price: 600
    },
    {
        title: "The Alchemist",
        genre: "Fiction",
        publishYear: 1988,
        price: 300
    },
    {
        title: "Atomic Habits",
        genre: "Self Help",
        publishYear: 2018,
        price: 500
    },
    {
        title: "Rich Dad Poor Dad",
        genre: "Finance",
        publishYear: 1997,
        price: 350
    },
    {
        title: "Indian Freedom Struggle",
        genre: "History",
        publishYear: 2005,
        price: 200
    }
];
// now we have an array with so many objects in that and we have to filter some specific data 
const userbook=books.filter((bk)=> bk.genre==="History")
console.log(userbook);// we will get all the object who have gener history this is hwo we filter data 

// map:   we have one more method name  name map it also retuns the value and it used to change data in array and object 
const mynums=[1,2,3,4,5,6,7,8,9]
//const change=mynums.map((num)=> num+10)
//console.log(change);// now using map it will add 10 to every elment of the arrya 
// chainaing: we can used many methods at same time 
// we are using mynums array 
const change=mynums
             .map((num)=> num*2)// it will multiply every elemnet with 2 
             .map((num)=> num+10)// then after multiplying we will add 10 to that ele
             .filter((num)=> num>10)// then we filter fromt that elemnents that return the el which are above 10
console.log(change);// every thing above 10 we will get them in our output 


// reduce: one more method which also works like an loop used to find the sum of the elment in the arry or the sum of the values in the array 
// accumulator : which stores the intial value first then after thhat it stores the value we get form current value + acc
// current value: the value of array the current value we using of array 
const newarray=[1,2,3,4]
const total=newarray.reduce((acc,curvalue)=> acc+curvalue,0)// her 0 is the is the intial value and at start acc will have intial value which is 0
console.log(total);
// have a gret example of it if we have a cart of shopping and and we add items inn it and we want find the total of price 
//  of our items then we will used reduce 
const shoppingCart = [
    {
        itemName: "Laptop",
        price: 50000
    },
    {
        itemName: "Mouse",
        price: 500
    },
    {
        itemName: "Keyboard",
        price: 1500
    },
    {
        itemName: "Headphones",
        price: 2000
    },
    {
        itemName: "Monitor",
        price: 12000
    }
];
const totalprice=shoppingCart.reduce((acc,items)=> acc+items.price,0)// here we are finding the total price and at start of the 
// cart when no elemnts is there the price will be 0 so intializaiton donewith 0 ann current value is our item
console.log("total cart price is ",totalprice);// the total pricce of the cart is 66000