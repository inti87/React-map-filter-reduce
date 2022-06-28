var numbers = [3, 56, 2, 48, 5];

//Map -Create a new array by doing something with each item in an array.

//function double(x) {
//  return x * 2;
//}

//const newNumbers = numbers.map(double);
//console.log(newNumbers);

//Filter - Create a new array by keeping the items that return true.

//const newNumbers = numbers.filter(function (num) {
//  return num > 10;
//});

//console.log(newNumbers);

//Reduce - Accumulate a value by doing something to each item in an array.

//var newNumber = numbers.reduce(function (accumulator, currentnUmber) {
//  return accumulator + currentnUmber;
//});

//console.log(newNumber);

//Find - find the first item that matches from an array.

//const newNumber = numbers.find(function (num) {
//  return num > 10;
//});

//console.log(newNumber);

//FindIndex - find the index of the first item that matches.
//const newNumber = numbers.findIndex(function (num) {
//  return num > 10;
//});

//console.log(newNumber);

import emojipedia from "./emojipedia";

//console.log(emojipedia);

function printText(el) {
  return el["meaning"].substring(1, 100);
}

const text = emojipedia.map(printText);
console.log(text);
