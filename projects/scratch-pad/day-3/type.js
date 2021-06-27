// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: TYPE
 */

/** 
 * Given an input value, return true if the value is an Array, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Array? Can typeof
 * work?
 */
function isArray(value) {
    // YOUR CODE BELOW HERE //
    //Input-value
    //Output-boolean
    //Constraints-check if value is an array
    //Edge Cases-return booolean from function
    return Array.isArray(value);
        
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input value, return true if the value is an Object intended as a 
 * collection, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Object, but not 
 * null, not an Array, not a Date - all of these will return 'object' if used 
 * with typeof.
 */
 
 
 
function isObject(value) {
    // YOUR CODE BELOW HERE //
    //Input-typeOf value with if statements
    //Output-boolean
    //Constraints-Object intended as a collection
    //Edge Cases-can't be null, an Array , or Date
    if(typeof value === 'object' && !(Array.isArray(value)) && (value !== null) && !(value instanceof Date)) {
        return true;
    } else {
        return false;
    }
    
    

    
    
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input value, return true if is either an Array or an an Object 
 * intended as a collection, false if otherwise.
 * 
 * TIP: Similar to isObject, but we must return true if the value is an Array.
 */
 function isCollection(value) {
    // YOUR CODE BELOW HERE //
    //Input-if values are either Array || Object
    //Output- boolean
    //Constraints-must be intended for collection
    //Edge Cases-for true must return Array || Object only
    

    
    if(Array.isArray(value) || typeof value === 'object' && (value !== null && !(value instanceof Date) )) {
         return true;
    } else {
         return false;
    }
    
}


    var me = ['tall', 'mulatto', 'handsome'];
    var obj ={
      name: 'max',
      age: 'old',
      height: 'tall'
    
    
    
    
    
    
    // YOUR CODE ABOVE HERE //
};

/**
 * Given an input value, return the type of the value as a String
 * 
 * Types are one of: 
 *    - "string"
 *    - "array"
 *    - "object"
 *    - "undefined"
 *    - "number"
 *    - "boolean"
 *    - "null"
 *    - "function"
 *    - "date"
 * 
 * 
 * Examples:
 *    typeOf(134) -> "number"
 *    typeOf("javascript") -> "string"
 *    typeOf([1,2,3]) -> "array"
 */ 
function typeOf(value) {
    // YOUR CODE BELOW HERE //
    //Input- a value
    //Output- the typeOf value as a string
    //Constraints- return a the value in a 'string'
    //Edge Cases-must return value as the value  of passed argument as a string
    var str = "";
    
    if((Array.isArray(value))) {
        return 'array'
    } else if(value === null) {
      return 'null';
    } else if(value instanceof Date) {
      return 'date';
    } else {
      return typeof value;
    }

    // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.isArray = isArray;
    module.exports.isObject = isObject;
    module.exports.isCollection = isCollection;
    module.exports.typeOf = typeOf;
}
