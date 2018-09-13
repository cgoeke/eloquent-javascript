/*
Deep comparison

Write a function deepEqual that takes two values and returns true only if they are the same value or 
are objects with the same properties, where the values of the properties are equal when compared with 
a recursive call to deepEqual.

To find out whether values should be compared directly (use the === operator for that) or 
have their properties compared, you can use the typeof operator. If it produces "object" for both values, 
you should do a deep comparison. 
But you have to take one silly exception into account: because of a historical accident, 
typeof null also produces "object".
*/

function deepEqual(a, b) {
  if (a === b) {
    return true;
  } else if (typeof a == 'object' && typeof b == 'object') {
    if (a == null || b == null) {
      return false;
    }
    
    let keysA = Object.keys(a);
    let keysB = Object.keys(b);
    if (keysA.length != keysB.length) {
      return false;
    } else {
      for (key of keysA) {
        return (keysB.includes(key) && deepEqual(a[key], b[key]));
      }
    }
  } else {
    return false;
  }
}