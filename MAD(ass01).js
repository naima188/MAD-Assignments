//String methods 

let name="Naima Gul";
//length of string: 
console.log(name.length);
//toUppercase and toLowercase: 
console.log(name.toUpperCase());
console.log(name.toLowerCase());
//Slice: 
console.log(name.slice(0,4));
//charAt: 
console.log(name.charAt(3));
//charCodeAt: 
console.log(name.charCodeAt(3));
//indexOf:
console.log(name.indexOf("o"));
//lastIndexOf: 
console.log(name.lastIndexOf("o"));
//serach: 
console.log(name.search("o"));
//repeatt: 
console.log(name.repeat(3));
//split: 
console.log(name.split(" "));
//substr: 
console.log(name.substr(3,5));
//substring: 
console.log(name.substring(3,5));
//replace:
console.log(name.replace("o","a"));
//replaceAll:
console.log(name.replaceAll("o","a"));
//concat: 
console.log(name.concat(" is a Artist"));
//trim:
console.log(name.trim());
//includess: 
console.log(name.includes("Gul"));
//startsWith:
console.log(name.startsWith("Naima"));
//endsWith:
console.log(name.endsWith("Gul"));
//charsCodeAt: 
console.log(name.charCodeAt(3));
console.log(name.charCodeAt(3).toString(16));
//trimStart: 
console.log(name.trimStart());
//trimEnd: 
console.log(name.trimEnd());
//padStart:
console.log(name.padStart(10,"*"));
//padEnd: 
console.log(name.padEnd(10,"*"));
//match:
console.log(name.match("Naima Gul"));
//matchAll:
console.log(name.matchAll("Naima"));
//typeof: 
console.log(name.typeof);

// Array Methods

let numbers = [20, 40, 60, 80, 100];
// Add element at the end
numbers.push(10);
console.log("After Push:", numbers);
// Remove last element
numbers.pop();
console.log("After Pop:", numbers);
// Add element at the beginning
numbers.unshift(5);
console.log("After Unshift:", numbers);
// Remove first element
numbers.shift();
console.log("After Shift:", numbers);
// Find index of an element
console.log("Index of 20:", numbers.indexOf(40));
// Slice array (extract part of array)
console.log("Sliced Array (1-4):", numbers.slice(1, 4));
// Splice array (remove & insert elements)
numbers.splice(2, 1, 35);
console.log("After Splice (replace index 2 with 35):", numbers);
// Reverse array
console.log("Reversed Array:", numbers.reverse());
// Sort array (ascending)
console.log("Sorted Array:", numbers.sort((a, b) => a - b));
// Filter even numbers
let evenNumbers = numbers.filter(num => num % 2 === 0);
console.log("Filtered Even Numbers:", evenNumbers);
// Map (double values)
let doubledNumbers = numbers.map(num => num * 2);
console.log("Doubled Numbers:", doubledNumbers);
// Reduce (sum of array)
let sum = numbers.reduce((acc, num) => acc + num, 0);
console.log("Sum of Numbers:", sum);