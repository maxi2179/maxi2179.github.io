// This makes the arguments variable behave the way we want it to and a few
// other things. For more info:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
'use strict';

var _ = {};


/**
* START OF OUR LIBRARY!
* Implement each function below its instructions
*/

/** _.identity
* Arguments:
*   1) Any value
* Objectives:
*   1) Returns <value> unchanged
* Examples:
*   _.identity(5) === 5
*   _.identity({a: "b"}) === {a: "b"}
*/

_.identity = function(value) {
    return value;
};



/** _.typeOf
* Arguments:
*   1) Any value
* Objectives:
*   1) Return the type of <value> as a string
*       Types are one of:
*          - "string"
*          - "array"
*          - "object"
*          - "undefined"
*          - "number"
*          - "boolean"
*          - "null"
*          - "function"
* Examples:
* _.typeOf(134) -> "number"
* _.typeOf("javascript") -> "string"
* _.typeOf([1,2,3]) -> "array"
*/

// I- take input of any value
// O- return the type of value passed to the function
// C- must be what the value passed in is
// E- make sure array is an array
_.typeOf = function(value) {
     if((Array.isArray(value))) {
        return 'array';
    } else if(value === null) {
        return 'null';
    } else if(value instanceof Date) {
        return 'date';
    } else if(typeof value === 'string') {
        return 'string';
    } else if(typeof value === 'undefined') {
        return 'undefined';
    } else if(typeof value === 'number') {
        return 'number';
    } else if(typeof value === 'boolean') {
        return 'boolean';
    } else if(typeof value === 'function') {
        return 'function';
    } else if(typeof value === 'object') {
        return 'object';
    } else {
        return 'not found';
    }
};

/** _.first
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the first element in <array>.
*   3) Otherwise, return the first <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.first("ponies", 1) -> []
*   _.first(["a", "b", "c"], "ponies") -> "a"
*   _.first(["a", "b", "c"], 1) -> "a"
*   _.first(["a", "b", "c"], 2) -> ["a", "b"]
*/
/*  I- array and a number
    O- return [] => if num<0 || if array is not an array
        return array[0] => if no num argument is given
        return array => if num > array.length
        return array.slice(0,num) => if all else fails
    */



_.first = function(array, num) {
    // check if number was given in argument
        if(typeof num !== 'number') {
            return array[0];
        } //check if array is an array or if number is a negative
        else if(Array.isArray(array) === false || num < 0) {
            return [];
        } // check if num is greater than array's length
        else if(num > array.length) {
            return array;
        }
         else {
            return array.slice(0, num);
        }
};
   
          
            
/** _.last
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the last element in <array>.
*   3) Otherwise, return the last <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.last("ponies", 2) -> []
*   _.last(["a", "b", "c"], "ponies") -> "c"
*   _.last(["a", "b", "c"], 1) -> "c"
*   _.last(["a", "b", "c"], 2) -> ["b", "c"]
*/

/*  I- array and a number
    O- return => the last element if no num is given
        return => the number of elements to be extracted if [a, b, c],2) => [b, c]
        return => return an empty array if number is not positive
        return => whole array if number is greater than array.length
        return => an empty array if Array is not an array
*/

_.last = function(array, num) {
    if(!num) {
        return array.slice(- 1).join();
    }
    else if(num > array.length) {
        return array;
    }
    else if(num < 0 || !Array.isArray(array)) {
        return [];
    }
    else {
       return array.slice(-2);
    }
};

        
        
        
        
        
/** _.indexOf
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return the index of <array> that is the first occurrance of <value>
*   2) Return -1 if <value> is not in <array>
*   3) Do not use [].indexOf()!
* Edge Cases:
*   1) What if <array> has multiple occurances of val?
*   2) What if <val> isn't in <array>?
* Examples:
*   _.indexOf(["a","b","c"], "c") -> 2
*   _.indexOf(["a","b","c"], "d") -> -1
*/

/*
I- array and a value
O- return the correct index of the value when found => number value
    return the index of the first occurenceof a found element => number value
    return -1 if the element is not found => number value
C- should no have side effects.
E- should loop thru elements to identify values of elements
*/

_.indexOf = function(array, value) {
    for(var i = 0; i < array.length; i++) {
        if(array[i] === value) {
            return i;
        }
    }
        if(!array.includes(value)) {
            return -1;
        
    }
};





/** _.contains
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return true if <array> contains <value>
*   2) Return false otherwise
*   3) You must use the ternary operator in your implementation.
* Edge Cases:
*   1) did you use === ?
*   2) what if no <value> is given?
* Examples:
*   _.contains([1,"two", 3.14], "two") -> true
*/

/*
    I- array and a value
    O- true => if array contains element
        return false => if no element is found
        return false if data type doesn't match
    C- shoud not have side effects
    E- type of is relavent
*/


_.contains = function (array, value) {
    return (array.includes(value) ? true : false);
};
    
    
    
/** _.each
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) if <collection> is an array, call <function> once for each element
*      with the arguments:
*         the element, it's index, <collection>
*   2) if <collection> is an object, call <function> once for each property
*      with the arguments:
*         the property's value, it's key, <collection>
* Examples:
*   _.each(["a","b","c"], function(e,i,a){ console.log(e)});
*      -> should log "a" "b" "c" to the console
*/

_.each = function(collection, func) {
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            func(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            func(collection[key], key, collection); 
        }
    } 
        
};




/** _.unique
* Arguments:
*   1) An array
* Objectives:
*   1) Return a new array of all elements from <array> with duplicates removed
*   2) Use _.indexOf() from above
* Examples:
*   _.unique([1,2,2,4,5,6,5,2]) -> [1,2,4,5,6]
*/

/*
    I- array
    O- return a new array => all elements from array with duplicate removed
    C- use .indexOf() method
    E- 
*/

_.unique = function(array) {
    var newArr = [];
    for (let i = 0; i < array.length; i++) {
        if (_.indexOf(newArr, array[i]) === -1) {
        newArr.push(array[_.indexOf(array, array[i])]);
    }
    }
        return newArr;
};
        
    


/** _.filter
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned true
* Edge Cases:
*   1) What if <function> returns something other than true or false?
* Examples:
*   _.filter([1,2,3,4,5], function(x){return x%2 === 0}) -> [2,4]
* Extra Credit:
*   use _.each in your implementation
*/

/*
    I- array and a function
    O- an array of items without duplicates
    create a newArr to accept array[i]
    arguments passed to func(array[i], i, array)
    if statement to check if func params = true
    if true push to newArr
    
*/

_.filter = function(array, func) {
    var newArr = [];
    
    for (let i = 0; i < array.length; i++) {
        if (func(array[i], i, array) === true) {
    
            newArr.push(array[i]);
        }
    }
    return newArr;
};


/** _.reject
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned false
*   3) This is the logical inverse if _.filter()
* Examples:
*   _.reject([1,2,3,4,5], function(e){return e%2 === 0}) -> [1,3,5]
*/

/*
    I- array and function
    O- an array with rejected elements
    create a newArr to accept rejected elements
    arguments passed to func(array[i], i, array)
    if statement to check if func params = false
    if false push to newArr
*/


_.reject = function (array, func) {
    var newArr = [];
    for (let i = 0; i < array.length; i++) {
        if(func(array[i], i, array) === false) {
            newArr.push(array[i]);
        }
    }
    return newArr;
};

/** _.partition
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) Call <function> for each element in <array> passing it the arguments:
*       element, key, <array>
*   2) Return an array that is made up of 2 sub arrays:
*       0) An array that contains all the values for which <function> returned something truthy
*       1) An array that contains all the values for which <function> returned something falsy
* Edge Cases:
*   1) This is going to return an array of arrays.
* Examples:
*   _.partition([1,2,3,4,5], function(element,index,arr){
*     return element % 2 === 0;
*   }); -> [[2,4],[1,3,5]]
}
*/

/*
    I- array and a function with params(array[i], i, array)
    O- array of sub arrays
    return => array with truthy values
    return => array with falsy values
    C- return array => should have both arrays within the new array
    E- array of arrays
*/

_.partition = function (array, func) {
    var newArr = [];
    var newArr2 = [];
    var result = [];
    for (let i = 0; i < array.length; i++) {
        if (func(array[i], i, array) === true) {
            newArr.push(array[i]);
        } else if (func(array[i], i, array) === false) {
            newArr2.push(array[i]);
        }
    }
    result.push(newArr, newArr2);
    return result;
};



/** _.map
* Arguments:
*   1) A collection
*   2) a function
* Objectives:
*   1) call <function> for each element in <collection> passing the arguments:
*        if <collection> is an array:
*            the element, it's index, <collection>
*        if <collection> is an object:
*            the value, it's key, <collection>
*   2) save the return value of each <function> call in a new array
*   3) return the new array
* Examples:
*   _.map([1,2,3,4], function(e){return e * 2}) -> [2,4,6,8]
*/

/*
    I- a collection and a function
    O- array of arguments passed to the function
    create array to accept values from test
    if collection isArray.isArray loop thru aand return values to new array
    if collectioin is object loop thru and return values to new array
*/

_.map = function (collection, func) {
    var newArr = []; 
    if(Array.isArray(collection)) {
        for( let i = 0; i < collection.length; i++) {
            newArr.push(func(collection[i], i, collection));
        }
    } else if (typeof collection === 'object') {
        for(let key in collection) {
            newArr.push(func(collection[key], key, collection));
        }
    }
    return newArr;
};
    

/** _.pluck
* Arguments:
*   1) An array of objects
*   2) A property
* Objectives:
*   1) Return an array containing the value of <property> for every element in <array>
*   2) You must use _.map() in your implementation.
* Examples:
*   _.pluck([{a: "one"}, {a: "two"}], "a") -> ["one", "two"]
*/
/* 
I- array and object
O- a property
C- .map(array, make a function to get value of objects key) 
*/

_.pluck = function(array, property) {
    function keyValue(collection) {return collection[property]}
    return _.map(array, keyValue);
};


/** _.every
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*      if <collection> is an array:
*          current element, it's index, <collection>
*      if <collection> is an object:
*          current value, current key, <collection>
*   2) If the return value of calling <function> for every element is true, return true
*   3) If even one of them returns false, return false
*   4) If <function> is not provided, return true if every element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.every([2,4,6], function(e){return e % 2 === 0}) -> true
*   _.every([1,2,3], function(e){return e % 2 === 0}) -> false
*/
/*
I- collection and function
O- boolean
C- create a function that test if every element is true of false 

E- if <function> doesn't return a boolen
    what if <function> is not given
loop over collection use map to know which collection it is array || object
if array iterate over elements and if elements are true return true
if object for key in object and if keys are true return true else return false
*/
/*
_.every = function(collection, func) {
    if(Array.isArray(collection)) {
        for(let i = 0; i < collection.length; i++) {
            return collection;
            if(func(collection[i], i, collection) === true){
                return true;
            } else {
                return false;
            }
        }
            }
    } else if (typeof collection === 'object') {
        for(let key in collection) {
            return collection;
            if(collection[key], key, collection) === true) {
                return true;
            } else {
                return false;
            }
        }

*/

    
   
   
   

/** _.some
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*       if <collection> is an array:
*        current element, it's index, <collection>
*       if <collection> is an object:
*        current value, current key, <collection>
*   2) If the return value of calling <function> is true for at least one element, return true
*   3) If it is false for all elements, return false
*   4) If <function> is not provided return true if at least one element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.some([1,3,5], function(e){return e % 2 === 0}) -> false
*   _.some([1,2,3], function(e){return e % 2 === 0}) -> true
*/


/** _.reduce
* Arguments:
*   1) An array
*   2) A function
*   3) A seed
* Objectives:
*   1) Call <function> for every element in <collection> passing the arguments:
*         previous result, element, index
*   2) Use the return value of <function> as the "previous result"
*      for the next iteration
*   3) On the very first iteration, use <seed> as the "previous result"
*   4) If no <seed> was given, use the first element/value of <collection> as <seed> and continue to the next element
*   5) After the last iteration, return the return value of the final <function> call
* Edge Cases:
*   1) What if <seed> is not given?
* Examples:
*   _.reduce([1,2,3], function(previousSum, currentValue, currentIndex){ return previousSum + currentValue }, 0) -> 6
*/

_.reduce = function(array, func, seed) {
    //check if seed exists
    if (seed === undefined) {
        //re-asssign seed to first vallue of array
        seed = array[0];
        //loop through array to access each value
        _.each(array, function(value, i) {
            if (i !== 0)
            // make seed the function call of func
            seed = func(seed, value, i)
        
        })
        //return seed
        return seed;
        
    } else { 
        //re-assign seed to first value in array
        
        // loop through tha array to access each value
       _.each(array, function(value,i) {
           
                seed = func(seed, value, i)
           
       })
        //return seed
        return seed;
        
    }
}


/** _.extend
* Arguments:
*   1) An Object
*   2) An Object
*   ...Possibly more objects
* Objectives:
*   1) Copy properties from <object 2> to <object 1>
*   2) If more objects are passed in, copy their properties to <object 1> as well, in the order they are passed in.
*   3) Return the update <object 1>
* Examples:
*   var data = {a:"one"};
*   _.extend(data, {b:"two"}); -> data now equals {a:"one",b:"two"}
*   _.extend(data, {a:"two"}); -> data now equals {a:"two"}
*/

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = _;
}
