// loop : means we have to print or do anything repeatively then we used loop 
//first is for loop 
for(let i=1; i<=10;  i++){// it will print the numbers upto 10 now 
    console.log(i);
}
//for loop works like first intialization then conditon check if cond is true block of for loop 
// will run then it wil increment or dec value we called it flow then again it will check cond 
// if it is write loop will run else loop will not run 
// for loop used for array 
let array=[2,4,5,6,7]
for(let i=0; i<array.length; i++){// i is the index variabe here 
    console.log(array[i]);// it willl give us an all the elemnt form the array 
}
// we also have nested for loops 
for(let i=0; i<=5; i++){
    console.log(" for every iteration of outer loop inner loop will run", i);
    for(let  j=0; j<=10; j++){// if the cond of inner loop get false outer loop will run again and we will come inside inner loop again 
        console.log(" vlaue is ",j);
    }
}
// break and continue 
// brek is used to end the loop 
// contineu is used to continue loop one or forgive it one time 
for(let i=1; i<=10; i++){
    if(i==5){
        console.log(" 5 is detected");
        break;
    }
    console.log(i);
}
// continue 
for(let i=1; i<=10; i++){
    if(i==5){
        console.log("5 is detected");// still 5 is detected we dont want to end the loop 
        continue; // so we used continue key word
    }
    console.log(i);
}