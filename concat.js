// ********************************
// 2 Uses of concat() method when working with arrays in JavaScript
// ********************************

// ****** 1) Merge two or more arrays *******
// Syntax: [].concat(array1, array2);
const arrayA = [1, 2, 3, 4];
const arrayB = [5, 6, 7];

const mergedArray = [].concat(arrayA, arrayB);
console.log(mergedArray); // [1, 2, 3, 4, 5, 6, 7] ==> [] creates a new array and the concat methods combines both arrays

// Alternative way
// Syntax: array1.concat(array2, array 3, arrayN);
const concatArrays = arrayA.concat(arrayB);
console.log(concatArrays); // [1, 2, 3, 4, 5, 6, 7]

// ********* 2) Flatten single level nested arrays **********

const nestedArray = [1, 2, [3, 4], [5, 6], 7, 8];
const flattened = [].concat(...nestedArray);
console.log(flattened); // (8) [1, 2, 3, 4, 5, 6, 7, 8]

const doubleNested = ['a', ['b', ['c', 'd']], 'e', ['f', 'g', 'h']];
const doubleFlattened = [].concat(...doubleNested);
console.log(doubleFlattened); // ["a", "b", ["c", "d"], "e", "f", "g", "h"]
