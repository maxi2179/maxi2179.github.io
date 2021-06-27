// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: LOOPS
 */

/** 
 * Given an input Array, loop forward over the Array and print its values 
 * using console.log().
 */
 
 
function printArrayValues(array) {
  // YOUR CODE BELOW HERE //
  //Input- loop
  //Output- values of the Array
  //Constraints-use a loop to iterate over Array and console.log(valuesOfArray)
  //Edge Cases-console.log() its values
  
  
  for(var i=0; i<array.length; i++) {
    console.log(array[i]);
  }
}
  let slogan = ['me','myself', 'and i'];
  
  console.log(printArrayValues(slogan));

  
  
  // YOUR CODE ABOVE HERE //


/** 
 * Given an input Array, loop backwards over the Array and print its values 
 * using console.log().
 */
function printArrayValuesInReverse(array) {
  // YOUR CODE BELOW HERE //
  //Input-loop
  //Output-values of Array backwards
  //Constraints- iterate backwards
  //Edge Cases- 
  for(var i=array.length - 1; i>=0; i--) {
    console.log(array[i])
  }
}
  let slogan2 = ['and me', 'myself', 'i']
  console.log(printArrayValuesInReverse(slogan2));
  
  
  // YOUR CODE ABOVE HERE //


/** 
 * Given an input Object, return an Array containing the Object keys.
 */
 
function getObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  //Input- object
  //Output- array with object keys
  //Constraints-return only keys
  //Edge Cases-must return an array
  return Object.keys(object);

  }


  
  
  
  
  // YOUR CODE ABOVE HERE //


/** 
 * Given an input Object, loop over the Object and print its keys 
 * using console.log().
 */
 
function printObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  //Input- loop
  //Output- keys of an object
  //Constraints-print keys to console
  //Edge Cases-
    for(var key in object) {
      console.log(key);
    }
  }
  
  
  
  // YOUR CODE ABOVE HERE //


/** 
 * Given an input Object, return an Array containing the Object's values.
 */
function getObjectValues(object) {
  // YOUR CODE BELOW HERE //
  //Input- object
  //Output- Array of objects values
  //Constraints-N/A
  //Edge Cases-must return an array
  return Object.values(object);
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its values 
 * using console.log().
 */
 
function printObjectValues(object) {
  // YOUR CODE BELOW HERE //
  //Input- for in loop
  //Output- object values
  //Constraints-console.log() objects values
  //Edge Cases-N/A
  for (var key in object) {
    console.log(object[key]);
    
  }  
  
  
}
  
  console.log(printObjectValues());
  // YOUR CODE ABOVE HERE //


/** 
 * Given an input Object, return the number of key/value pairs stored within that Object.
 */
function getObjectLength(object) {
  // YOUR CODE BELOW HERE //
  //Input-object
  //Output- number of key:values pairs in an object
  //Constraints- N/A
  //Edge Cases- return number of key:value pairs
  return Object.keys(object).length;
  
  
  
  // YOUR CODE ABOVE HERE //
}



/** 
 * Given an input Object, how might we loop over the Object IN REVERSE and 
 * print its values using console.log()?
 */
function printObjectValuesInReverse(object) {
  // YOUR CODE BELOW HERE //
  //Input- loop
  //Output-values of an object to the console
  //Constraints-loop over object in reverse and print values  to console
  //Edge Cases-loop in reverse
    var arr = Object.values(object);
    
    for(var i = arr.length -1; i >= 0; i--) {
      console.log(arr[i]);
    }
  }



  // YOUR CODE ABOVE HERE //







// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.printArrayValues = printArrayValues;
    module.exports.printArrayValuesInReverse = printArrayValuesInReverse;
    module.exports.printObjectValues = printObjectValues;
    module.exports.getObjectValues = getObjectValues;
    module.exports.getObjectKeys = getObjectKeys;
    module.exports.printObjectKeys = printObjectKeys;
    module.exports.getObjectLength = getObjectLength;
    module.exports.printObjectValuesInReverse = printObjectValuesInReverse;
}
