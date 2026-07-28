
// DATE IN JAVASCRIPT

// Date is a built-in object in JavaScript used to work with dates and times,
// similar to how Math is a built-in object for mathematical operations.

// Creating a new Date object
let myDate = new Date();

// Output is not very readable
console.log(myDate);

// Converts date and time into a readable format
console.log(myDate.toLocaleString());

// Converts only the date into a readable string
console.log(myDate.toDateString());

// ------------------------------------------------------------
// INTERVIEW IMPORTANT

// Creating a custom date
// Syntax: new Date(year, month, day)

// Month indexing starts from 0 in this format:
// 0 = January, 1 = February, 2 = March, etc.

let myCreateDate = new Date(2023, 0, 23);

console.log(myCreateDate.toDateString());
// Output: Mon Jan 23 2023

// ------------------------------------------------------------
// TIMESTAMP

// Date.now() returns the current timestamp in milliseconds
// (milliseconds passed since 1 January 1970)

let myTimeStamp = Date.now();

console.log(myTimeStamp);

// ------------------------------------------------------------
// CONVERTING DATE TO MILLISECONDS

let date = new Date("2026-07-20");

console.log(date.getTime());
// Output will be the timestamp in milliseconds

// ------------------------------------------------------------
// CONVERTING MILLISECONDS TO SECONDS

// Date.now() gives milliseconds
// Divide by 1000 and use Math.floor() to get seconds

console.log(Math.floor(Date.now() / 1000));

// ------------------------------------------------------------
// SOME IMPORTANT DATE METHODS

let dateee = new Date();

// getMonth() returns month from 0 to 11
// Therefore we add 1 to get the actual month number

console.log(dateee.getMonth() + 1);

// getDay() returns:
// 0 = Sunday
// 1 = Monday
// 2 = Tuesday
// ...
// 6 = Saturday

console.log(dateee.getDay());

// ------------------------------------------------------------
// CUSTOMIZING DATE OUTPUT

console.log(
    myDate.toLocaleString('default', {
        weekday: "long"
    })
);

// Output Example:
// Monday

   