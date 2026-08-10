// while loop: same as a for loop intializtion then conditon and increment decrement or we can also 
// write condition there 
let i=0
while(i<=10){
    console.log(i);
    i=i+1// it is same lie i++ just we can write condtion also here 
}
let array=[1,2,3,4,5,6]
let index=0// is the index here 
while(index<array.length){
    console.log(array[index])// elements of the array will print 
    index++;// or index=i+1
}
// do while loop here first the body of loop runs without checking conditoin at once then it starts to check the condition 
// so synatax is like intialization then we have block of do and then inc dec or cond then we have while(cond)
let score=1
do{
    console.log(" score is ",score);
    score++;
}while(score<=10);