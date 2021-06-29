// ***************************************
// 3 Ways to Create Arrays in JavaScript and Array fill() method
// ***************************************

// 1. Basic way

function basicWay() {
  let petMy = []; // initialize an array
  return petMy;
}

console.log("petMy: " + basicWay());    // []

// 2. Using Array() Constructor

// if you have to create an array of definite length then you can use Array() constructor to create it.
function arrayConstructor(len) {
  const newArray = Array(len);
  return newArray.length;
}

console.log(arrayConstructor(5));   // 5

// // An array of length 5 will be created with all values are undefined

// https://junaidshaikh.hashnode.dev/3-ways-to-create-arrays-in-javascript-and-array-fill-method
