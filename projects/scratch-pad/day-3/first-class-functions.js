// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: FIRST CLASS FUNCTIONS
 */

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is greater than the 
 * base.
 */
function createGreaterThanFilter(base) {
    // YOUR CODE BELOW HERE //
    //Input-  string or number as base to test against
    //Output- function that test base against a given value
    //Constraints-use string or number as base
    //Edge Cases- return a function that test base < value
    
    return function(value) {
        if(value > base) {
            return true;
        } else  {
            return false;
        }
    };
    
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is less than the 
 * base.
 */
function createLessThanFilter(base) {
    // YOUR CODE BELOW HERE //
    //Input-string or number as base to test against
    //Output- function that test base against a given value
    //Constraints-use string or number as base
    //Edge Cases- return a function that test base > value
    return function(value) {
        if(value < base) {
            return true;
        } else {
            return false;
        }
    };
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a startsWith character, which will be a single character, return a 
 * Function that tests whether a given String starts with the startsWith 
 * character.
 */
function createStartsWithFilter(startsWith) {
    // YOUR CODE BELOW HERE //
    //Input- a single charaacter from a 'string'
    //Output-boolean
    //Constraints-return a test function
    //Edge Cases-make sure given 'string begins with character passed
    return function(char) {
        if(startsWith.toLowerCase() === char.charAt(0).toLowerCase()) {
            return true;
        } else { 
            return false;
    }
    };
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a endsWith character, which will be a single character, return a 
 * Function that tests whether a given String ends with the endsWith 
 * character.
 */
function createEndsWithFilter(endsWith) {
    // YOUR CODE BELOW HERE //
    //Input- a single charaacter from a 'string'
    //Output-boolean
    //Constraints-return a test function
    //Edge Cases-make sure given 'string ends with character passed
    return function(char) {
        if(endsWith.toLowerCase() === char.charAt(char.length - 1).toLowerCase()) {
            return true;
        } else {
            return false;
        }
    };
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to modify a String, 
 * return the Array of the Strings, modified.
 * 
 * TIP: You need to loop over the Strings, right? We need to pass each String to 
 * the modify Function, but we need to collect the results into some collection.
 */
function modifyStrings(strings, modify) {
    // YOUR CODE BELOW HERE //
    //I-Array of string to be modified
    //collect modified strings in newArr
   var  newArr = [];
    //O-the strings modified
    for(var i=0; i<strings.length; i++) {
        //C-loop over strings, modify strings as looped thru, 
       newArr.push(modify(strings[i]));
    //return array of modified strings
    } return newArr;
        
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to test the String in some 
 * way and return a Boolean on whether it passed, return true if ALL Strings pass the test.
 * 
 * Imagine you had a list of names, and you wanted to test they all 
 * begin with "C", or they are all exclaimations that end with "!".
 * 
 * TIP: You need to loop over the Strings, right? And pass them to the test?
 */
function allStringsPass(strings, test) {
    //I- loop to check if test if strings index pass
    for(var i = 0; i < strings.length; i ++) {
        let tst = test(strings[i]);
        if(tst === false) {
    //O-false if a test fails
            return false;
        }
    }
    return true;

         
        
    
    // YOUR CODE BELOW HERE //
    //I-an array of strings and a function
   
    //O- true if ALL strings pass
    //C-all strings must pass test 
    
    
    
    
    // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.createGreaterThanFilter = createGreaterThanFilter;
    module.exports.createLessThanFilter = createLessThanFilter;
    module.exports.createStartsWithFilter = createStartsWithFilter;
    module.exports.createEndsWithFilter = createEndsWithFilter;
    module.exports.modifyStrings = modifyStrings;
    module.exports.allStringsPass = allStringsPass;   
}
