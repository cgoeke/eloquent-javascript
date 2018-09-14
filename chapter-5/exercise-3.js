/*
Everything

Analogous to the some method, arrays also have an every method. 
This one returns true when the given function returns true for every element in the array. 
In a way, some is a version of the || operator that acts on arrays, and every is like the && operator.

Implement every as a function that takes an array and a predicate function as parameters. 
Write two versions, one using a loop and one using the some method.
*/

function every(array, test) {
  for (let item of array) {
    if(!test(item)) {
      return false;
    }
  }
  return true;
}

function every(array, test) {
  return !array.some((item) => !test(item));
}