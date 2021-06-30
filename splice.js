// ****************************************
// Splice in JavaScript
// ****************************************

// The splice method changes the content of the array in place and can be used to add or remove items from the array.

// Syntax:  array.splice(start[, deleteCount[, item1[, item2[, ...]]]])
// start specifies index at which to start changing the array.
// In deleteCount, The number of items you want to remove.
// NOTE: Splice always returns an array containing the deleted elements.

const arr1 = ['🌼', '🌴', '🌹', '🌵', '🍄'];
const myArr = arr1.splice(2, 3); // starting index 2, extract 3 items.
console.log(myArr); // ["🌹", "🌵", "🍄"]
console.log(arr1); // ["🌼", "🌴"] => mutating arr1, original array.

// If start is greater than the length of the array, then start will be set to the length of the array. i.e no element will be deleted.
const arr2 = ['🌼', '🌴', '🌹', '🌵', '🍄'];
const noChange = arr2.splice(arr2.length);
console.log('No Change: ' + noChange); // [] => starting from the index bigger than the biggest index

// If start is negative, it will begin that many elements from the end of the array.
const arr3 = ['🌼', '🌴', '🌹', '🌵', '🍄'];
const last = arr3.splice(-2); // last two elements
console.log('Negative index: ' + last);

// In item, The number you want to add(If you're removing, you can just leave this blank).
const arr4 = ['🌼', '🌴', '🌹', '🌵', '🍄'];
const addingItem = arr4.splice(2, 0, '⭐️', '💥'); // removing 0 item, adding two items;
console.log(addingItem);  // [] => nothing removed
console.log(arr4); // (7) ["🌼", "🌴", "⭐️", "💥", "🌹", "🌵", "🍄"]  =>two items added at index 2

const arr5 = ['🌼', '🌴', '🌹', '🌵', '🍄'];
const addRemove = arr5.splice(0, 1, "⭐️");
console.log(addRemove); // ["🌼"] =>removed item at 0 index
console.log(arr5); // ["⭐️", "🌴", "🌹", "🌵", "🍄"]  // item at 0 index is replaced by new item


// When only one argument is provided, all the items after the provided starting index are removed from the array:
