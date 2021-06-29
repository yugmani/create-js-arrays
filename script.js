// ***************************************
// 3 Ways to Create Arrays in JavaScript and Array fill() method
// ***************************************

// 1. Basic way
let array1 = []; // initialize an array

// console.log(array1.length); // 0

// 2. Using Array() Constructor

// if you have to create an array of definite length then you can use Array() constructor to create it.
const array2 = Array(5);

// console.log(array2.length); // 5
// console.log(array2[1]); // undefined

// // An array of length 5 will be created with all values are undefined

// 3. create an array from different elements using this constructor.

const fruit1 = 'mango';
const fruit2 = 'banana';
const fruit3 = 'orange';

const fruits = Array(fruit3, fruit1, fruit2);

// console.log(fruits); // (3) ["orange", "mango", "banana"]

// 4. Using Array.from()

// The Array.from() method returns a new array from an array-like or iterable object.

const name = 'jenisha';
const nameLetters = Array.from(name);

// console.log(nameLetters);
// ["j", "e", "n", "i", "s", "h", "a"]

// Syntax: Array.from(iterable [,mapFunction])

// // The second optional argument is the map function which will be applied to all the elements of the array.

const numbers = [1, 2, 3];
const double = Array.from(numbers, x => 2 * x);

// console.log(double); // [2, 4, 6]

// You will often use this method to convert the NodeList to Array. We get NodeList when we select multiple HTML elements in JavaScript.

// https://junaidshaikh.hashnode.dev/3-ways-to-create-arrays-in-javascript-and-array-fill-method
