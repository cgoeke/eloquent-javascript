/*
Flattening

Use the reduce method in combination with the concat method to “flatten” an array of arrays into a single 
array that has all the elements of the original arrays.
*/

function flatten(arr) {
  return arr.reduce((a, b) => a.concat(b));
}