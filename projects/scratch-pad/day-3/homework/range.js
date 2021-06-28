// #!/usr/bin/env node

'use strict';

/**
 * 3: range()
 *
 *  a. Create a function called range that takes two integers as 
 *  parameters and returns an Array containing all integers 
 *  between the two parameters, inclusively.  For example:
 *
 *      range(8, 14);  // => [8, 9, 10, 11, 12, 13, 14]
 *
 *  If the first argument is greater than the second, 
 *  return the range in reverse order, ie:
 *
 *      range(14, 8);  // => [14, 13, 12, 11, 10, 9, 8]
 *
 *  TIPS:
 *  a. create something to collect the output you'll return.
 *  b. you'll need a loop, which one is best?
 *  c. you'll wanna make use of the push() method of Array.
 */
 function range(start, end) {
    // YOUR CODE GOES BELOW HERE //
    let newRange = [];
        //I-a loop that iterates over start number and adds a number til the end number
    if(start < end) {
        do{ 
            newRange.push(start);
        start++;
    } while (start <= end);
        return newRange;
    } else {start > end; 
        do {
            newRange.push(start);
            start--;
        } while (start >= end);
        return newRange;
    }
    // if start < end loop up til the end number
    // while start < end push start-end in order
    //else if start > end loop down from start to end 
    // a loop that pushes number of start to number of end in oredr
    // 
    
    //O- results of if statements are pushed to newArr with range of start and end
    
    
    
    // YOUR CODE GOES ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.range = range;
}
