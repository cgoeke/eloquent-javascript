/*
Reversing an array

Arrays have a reverse method that changes the array by inverting the order in which its elements appear. For this exercise, write two functions, reverseArray and reverseArrayInPlace. The first, reverseArray, takes an array as argument and produces a new array that has the same elements in the inverse order. The second, reverseArrayInPlace, does what the reverse method does: it modifies the array given as argument by reversing its elements. Neither may use the standard reverse method.
*/

function reverseArray(arr) {
  newArr = [];
  for (let i of arr) {
    newArr.unshift(i);
  }
  return newArr;
}

function reverseArrayInPlace(arr) {
  for (let i = 0; i < Math.floor(arr.length / 2); i++) {
    let firstElement = arr[i];
    let lastElement = arr[arr.length - 1 - i]
    arr[i] = lastElement;
    arr[arr.length - 1 - i] = firstElement;
  }
  return arr;
}