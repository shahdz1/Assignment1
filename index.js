// 1. Convert the string "123" to a number and add 7

// const x = "123";
// const y = Number(x) + 7
// console.log(y);

// 2. Check if the given variable is falsy and return "Invalid" if it is

// const x = 0;
// if (!x) {
//     console.log("invalid");
// }

// 3. Use for loop to print all numbers between 1 and 10, skipping even numbers using continue 

// for (let i = 1; i <= 10; i++) {
//     if (i % 2 === 0) {
//         continue;
//     }
//     console.log(i);
// }

// 4. Create an array of numbers and return only the even numbers using filter method.

// const numbers =[1,2,3,4,5]
// const even = numbers.filter(num => num % 2 === 0);
// console.log(even);

// 5. Use the spread operator to merge two arrays, then return the merged array. 

// const x = [1, 2, 3];
// const y = [4, 5, 6];
// const result = [...x, ...y];
// console.log(result);

//  Use a switch statement to return the day of the week given a number (1 = Sunday …., 7 = Saturday)

// let day =1;
// switch (day) {
//     case 1:
//         console.log('sunday');
//         break;
//     case 2:
//         console.log('monday');
//         break;
//     case 3:
//         console.log('tuesday');
//         break;
//     case 4:
//         console.log('wednesday');
//         break;
//     case 5:
//         console.log('thursday');
//         break;
//     case 6:
//         console.log('friday');
//         break;
//     case 7:
//         console.log('saturday');
//         break;
//     default:
//         console.log('invalid');
// }

// 7. Create an array of strings and return their lengths using map method

// const arr=["a" , "ab" , "abc" ] 
// const length = arr.map(x => x.length);
// console.log(length);

//8. Write a function that checks if a number is divisible by 3 and 5.

// function isDivisibleBy3And5(num) {
//     if (num % 3 === 0 && num % 5 === 0) {
//         console.log("Divisible by both");
//     }
// }
// isDivisibleBy3And5(15);

// 9. Write a function using arrow syntax to return the square of a number 

// const square = (num) => num * num;
// console.log(square(5));

// 10.Write a function that destructures an object to extract values and returns a formatted string

// const person = {name: 'John', age: 25}
// const {name, age} = person;
// console.log(`${name} is ${age} years old`);

// 11.Write a function that accepts multiple parameters (two or more) and returns their sum

// function sum(...numbers) {
//     let result = 0;
//     for (let num of numbers) {
//         result += num;
//     }
//     console.log(result);
// }
// sum(1, 2, 3, 5, 4);

// 12. Write a function that returns a promise which resolves after 3 seconds with a 'Success' message

// function delayedSuccess() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve('success')
//         }, 3000)
//     })
// }
// delayedSuccess().then((message)=>{
//     console.log(message)
// })

// 13. Write a function to find the largest number in an array

// function maxNumber(arr){
//     arr.sort((a,b)=>b-a)
//     console.log(arr[0])
//  }
//  maxNumber([1,2,3,4,5,6,7,8,9,10])

//  14. Write a function that takes an object and returns an array containing only its keys

// function getKey(object) {
//     return Object.keys(object);
// }
// console.log(getKey({ name: "shahd", age: 25 }))

// 15. Write a function that splits a string into an array of words based on spaces

function splitString(text) {
    return text.split(" ");
}
const result = splitString("hello shosh");
console.log(result);






////////////////// B. Part 2: Essay Questions : /////////////////

// 1. What is the difference between forEach and for...of? When would you use each?

// for of is used to iterate over iterable values (array , strings)
// forEach is an array method that executes a callback function for each element

// 2. What is hoisting and what is the Temporal Dead Zone(TDZ) ? Explain with examples ?

// hoisting is a behavior where declarations are processed before any code is executed
// TDZ period between entering the scope and accessing the vaiable declaration

// 3. What are the main differences between == and ===?

// == compares values only & === comapares values and data types

// 4. Explain how try-catch works and why it is important in async operations ?

// is used to handle errors in async operations
// try contains the code that may cause an error and catch contains the error handling code

// 5. What’s the difference between type conversion and coercion ? Provide examples of each ?

// conversion is changing a value from one type to another manually
// console.log(Number("5") )

// coarcion is javascript automatically converts a value from one type to another
// console.log("5" + 5) 

