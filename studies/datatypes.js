/*
 *  Datatypes:
 *
 *  0. In programming, datatypes is an important concept.To be able to operate
 *  on variables, it is important to know something about the type. Variables
 *  are not directly associated with any particular value type, and any variable
 *  can be assigned (and re-assigned) values of all types.
 *
 *  let foo = 13; // => Number type
 *  foo = 'times'; // => String type
    foo = true; // => Boolean type
    
    The two different types of data Primitive/Simple and Complex/Structural
*/    
    
//  1-1. Primitive/Simple Type //
/*      
        1. A primitive (primitive value, primitive data type) is data type
        that is not an object and has no methods. There are 7 primitive data types:
        string, number, bigint, boolean, undefined, symbol, and null.
 
        2. Most of the time, a primitive value is represented directly at the lowest
        level of the language implementation.

        3.All primitives are immutable, i.e., they cannot be altered. It is 
        important not to confuse a primitive itself with a variable assigned a 
        primitive value. The variable may be reassigned a new value, but the existing 
        value can not be changed in the ways that objects, arrays, and functions can be altered.
*/

// A primitive can be replaced, but it can not be directly altered

// using a string method does not mutate the string 

var name = 'irie';
console.log(name); // prints irie
irie.toUpperCase();
console.log(name); // prints irie
// using an array method mutates the array

var names = [];
console.log(names); // prints => []
names.push('helga');
console.log(names); // prints => ['helga']

// Assignment gives the primitive a new (not a muted) value

name = name.toUpperCase // prints => IRIE

// Types //

// 1. Number //

//  * Numbers have a type of value of Number
console.log(typeof 13); // prints => Number

//  * Numbers can be written with or without decimals

var x = 13; // => a number without decimals
var y = 13.13; // => a number with decimals

//  * Extra large numbers can be written with scientific (exponent) notation

var x = 123e5; // => 12300000
var y = 123e-5; // => 0.00123

//  * If you add two numbers, the result will be a number

var x = 1;
var y = 12;
var z = x + y; // prints => 13

// * JavaScript strings can have numeric content

var x = 13;
var y = '13';

// *JavaScript will try to convert strings to numbers in all numeric operations

var x = '26';
var y = '2';
var z = x / y; // prints => 13

// * This will not work because JavaScripts uses + operator to concatenate strings

var x  = '12';
var y = '1';
var z = x + y; // prints => 121 (not 13)

// 2. NaN //

// * NaN is a reserved JavaScript word indicating that a number is not a legal number

var x = 13 / 'trees'; // x willl be NaN (not a number)

//  * However if the string contains a numeric value, the result will be a number

var x = 26 / '2'; // x will be 13


// * 1a.  NaN is a primitive type of number

console.log(typeof NaN); // prints => Number

/* 
    * 1b. Infinity (or -Infinity) is the value JavaScript will return if you calculate
        a number outside the largest possible number.
*/

let num1 = 13;
while (num1 !== Infinity) { // executes until Infinity
    num1 *= num1;
}


//  * Division by zerp (0) also generates Infinity

var x = 13 / 0;  // x will be Infinity
var y = -13 / 0; // y will be -Infinity

// Infinity is a number type

console.log(typeof Infinity); // prints => Number



// 3. undefined //

//  * undefined have a value of undefined

console.log(typeof undefined); // print => undefined

/*
    * undefined is a property of the global object. That is, it is a variable in 
    global scope. The initial value of undefined is the primitive value undefined.

    A variable that has not been assigned a value is of type undefined. A method 
    or statement also returns undefined if the variable that is being evaluated does
    not have an assigned value. A function returns undefined if a value was not returned.
*/

var x;
var y;
function add(x, y) {
    if (x + y === 0) {
}
console.log(add(1,12)); // prints => undefined



/*
    You can use undefined and the strict equality and inequality operators to determine
    whether a variable has a value. In the following code, the variable x is not 
    initialized, and the if statement evaluates to true.
*/

var x; 

if  (x === undefined) {
    return true; // these statements execute
}
else {
    return false; // these statements do not execute
};


// 4. Null //
/*
    * The value null is written with a literal: null. null is not an identifier for a property of 
    the global object, like undefined can be. Instead, null expresses a lack of identification,
    indicating that a variable points to no object. In APIs, null is often retrieved in a place
    where an object can be expected but no object is relevant.
    
    * The value null represents the intentional absence of any object value.
    * It is one of JavaScript's primitive values and is treated as falsy for boolean operations.
*/

var irie = null;
console.log(irie); // prints => null => meaning irie exists but has no type or value


// 5. Boolean //

// * Booleans have a type of value of Boolean

console.log(typeof true); // prints Boolean

/*  
    * Boolean represents one of two values true || false
    * Very often in programming we need a data type that only holds two values, like:
        * On / Off
        * Yes / No
        * True / False
        
    * For this JavaScript has a Boolean data type. It can only take the values true && false 
  */

// You can use a Boolean() function to find out if an expression (or a value) is true

console.log(Boolean(13 > 3)); // prints '=> true
console.log(3 < 13); // prints => true
console.log(3 > 13); // prints => false

//  * The Boolean value of an expression is the basis for all JavaScript conditionals and comparisons

console.log(typeof 13 == number); // prints => true



// 6. Strings //

// * Strings have a type of value of 'string'

console.log(typeof "irie"); // prints => 'string'

/*
    * The String object is used to represent and manipulate a sequence of characters.
    
    * Strings are useful for holding data that can be represented in text form. Some of
    the most-used operations on strings are to check their length, to build and concatenate
    them using the + and += string operators, checking for the existence or location of substrings 
    with the indexOf() method, or extracting substrings with the substring() method.
*/

//  Creating a String //

//  * You can create a string using one of three quotations: single quotes (''), double quotes (""), and backticks(``)

var line1 = 'i am a string primitive';
var line2 = "i am also a string primitive";
var line3 = `as am i a string primitive`

//  Accessing characters in Strings //

//  * You can access string characters one of two ways, stirng characters are index from zero (0) 

//  * The first way is to use the charAt() method

return 'irie'.charAt(1); // prints => 'r'

// * The second way is to to treat the string as an array-like object, where individual characters correspond to a numerical index:

return 'irie'[1]; // prints => 'r'

//  * You can get the length of a string using the .length property; Note: all characters in string are counted, including spaces and symbols

var str = 'i miss irie!#!'
console.log(str.length); // prints => 14

//  Comparing Strings //

//  * You just use the less-than and greater-than operators:

let a = 'a'
let b = 'b'
if (a < b) { // true
  console.log(a + '=> i am the greater')
} else if (a > b) {
  console.log(b + '=> no i am greater')
} else {
  console.log('ok fine we are equal.')
}

//  String Primitive and String Objects //

/*  
    * Note that JavaScript distinguishes between String objects and primitive string
    values. (The same is true of Boolean and Numbers.)
    
    * String literals (denoted by double or single quotes) and strings returned from
    String calls in a non-constructor context (that is,called without using the new keyword)
    are primitive strings. JavaScript automatically converts primitives to String objects,
    so that it's possible to use String object methods for primitive strings. In contexts
    where a method is to be invoked on a primitive string or a property lookup occurs,
    JavaScript will automatically wrap the string primitive and call the method or perform the property lookup.
*/


let s_prim = 'irie'
let s_obj = new String(s_prim)

console.log(typeof s_prim) // prints => "string"
console.log(typeof s_obj)  // prints => "object"

/*
    String primitives and String objects also give different results when using eval().
    Primitives passed to eval are treated as source code;
    String objects are treated as all other objects are, by retur
*/

let sP = '1 + 12'              // creates a string primitive
let sO = new String('1 + 12')  // creates a String object
console.log(eval(sP))         // prints => the number => 13
console.log(eval(sO))         // prints => the string => "1 + 12"

// Escape Sequences //

//  * Special characters can be inserted into the string using escape sequences:

var strEscp = "i can use the backslash to insert quotation mark\'s here"
console.log(strEscp); // prints => "i can use the bacslash to insert quotation mark's here"
var strEscp2 = 'i can also use the backslash to put \"specific quotes\" inside the string';
console.log(strEscp2); // prints => "i can also use the backslash to puut "specific quotes" inside the string"

// Long String Literals//

/*
    Sometimes, your code will include strings which are very long. Rather than having lines
    that go on endlessly, or wrap at the whim of your editor, you may wish to specifically
    break the string into multiple lines in the source code without affecting the actual 
    string contents. There are two ways you can do this.
*/

//  Method 1. You use the + operator to append multiple lines together

var longStr = 'So this is an example of how to use the ' +
'plus operator to span over multiple lines of a string, ' +
'this way code is more readable!' // returns => 'as is' with line break at operators

/*  Method 2. You can use the backslash character (\) at the end of each line to indicate
    that the string will continue on the next line. Make sure there is no space or any other
    character after the backslash (except for a line break), or as an indent; otherwise it will not work.
*/

var lngStr = 'This is an example of how to use the backslash \
operator to span over multiple lines of a string, \
this way code is readable!' // returns => 'as is' with line break at operators



// 1-2. Complex/Structural Types

//  * There are three diffenent types Objects, Arrays, and Functions
//  * It is good practice to define complex Objects with const keyword

/*  
    7. Objects: an object is a value in memory which is possibly referenced by an identifier.
    
    * The object is a complex datatype that stores collections of data.
    * An object contains properties, defined as a key-value pair. A property
    key (name) is always a string, but the value can be any data type, like strings,
    numbers, booleans, or complex data types like arrays, function and other objects.
*/

// Creating an Object //

//  * Objects can be created using a variable name and curly braces {} 
//  * They can be defined empty, on a single line, or mutiple lines

var person = {}; // prints => undefined
console.log(person); // prints => 'undefined' because it has no value
var person = {name: 'Max', age: 41, city: 'New Orleans'};
console.log(person); // prints => {age:41, city: 'New Orleans', name: 'Max'}
var person2 = {
    name: 'Irie',
    'age-of': 5,
    city: {town:'Anglesea'}
    
}
console.log(person2); // prints => {age: 5, city: Anglesea, name: 'Irie'}

// Accessing an Object //

//  * There are three ways to access an Object 

//  7-1. Dot notation: syntax => expression.identifier
//  * Expression should evaluate to an object, and identifier is the name of the property you’d like to access.
//  * You can use the dot property accessor in a chain to access deeper properties
console.log(person.name); // prints => "Max"
console.log(person2.city.town); // prints => "Anglesea"

//  7-2. Bracket Notation: syntax = expression[expression]
/*  
    * The first expression should evaluate to an object and the second expression should 
    evaluate to a string denoting the property name.
    * To access the properties with these special names, use the square brackets property accessor
    * Note: Choose the square brackets property accessor when the property name is dynamic, i.e.
    determined at runtime.
*/

console.log(person2['age-of']); // prints => 5

//  7-3. Object Destructuring: syntax => const { identifier } = expression;
/*
    * identifier is the name of the property to access and expression should evaluate to
    an object. After the destructuring, the variable identifier contains the property value.
    * Note: Choose the object destructuring when you’d like to create a variable having the property value.
*/

const hero = {
  name: 'Irie'
};

// Object destructuring:
const { name } = hero;
name; // prints => 'Irie'


// Changing Values of Properties //

//  * Once accessed you can use either notation to change the value of a specific key

person.name = 'Maximillian'
console.log(person.name); // prints => 'Maximillian'
person2['age-of'] = 6;
console.log(person['age-of']); // pritns => 6



// 8. Arrays: is a global object that is used in the construction of arrays; which are high-level, list-like objects.
/*
    * Arrays are list-like objects whose prototype has methods to perform traversal and mutation operations.
    Neither the length of a JavaScript array nor the types of its elements are fixed. Since an array's 
    length can change at any time, and data can be stored at non-contiguous locations in the array,
    JavaScript arrays are not guaranteed to be dense; this depends on how the programmer chooses to use
    them. In general, these are convenient characteristics; but if these features are not desirable for
    your particular use, you might consider using typed arrays.
    
    * Arrays cannot use strings as element indexes(as in an associative array) but must use integers.
    Setting or accessing via non-integers using bracket notation (or dot notation) will not set or retrieve
    an element from the array list itself, but will set or access a variable associated with that array's
    object property collection. The array's object properties and list of array elements are separate, and 
    the array's traversal and mutation operations cannot be applied to these named properties.
*/
    
// Creating an Array //

//  Array can be created using a variable name and square brackets []
//  When an array is created empty it has a value of undefined until value is added
//  Arrays have the .length property that returns how many elements are present

const friendList = [];
console.log(friendList); // prints => undefined
const friends =['mikey', 'matt', 'eric', 'dan'];
console.log(friends); // prints => 'mikey,matt,eric,dan'
console.log(friends.length); // prints => 4

// Accessing an Array //

//  * We can access the Arrays elements using bracket notation ([]); index begins at zero (0)

console.log(friends[[0]]); // prints first element => 'mikey'
console.log(friends.length - 1); // prints last element => 'dan'

// Loop over Array //

//  * Loop through an arrays elements using the for loop
for(let i = 0; i < friends.length; i ++) {
    console.log(friends[i]);
} /* prints =>  'mikey'
                'matt'
                'eric'
                'dan'
                */
                
//  * Likewise you can use the forEach() method
friends.forEach(function(item,index,array)) {
    console.log(item, index);
} /* prints =>  'mikey'
                'matt'
                'eric'
                'dan'
*/

//  * Remove an element from the end of an array using .pop() method
var last = friends.pop() // removes 'dan' from end of array
console.log(last); // prints => ['mikey', 'matt', 'eric']

//  * Adding an element to the end of an Array using .push()  method
var add = friends.push('tracy') // adds 'tracy' to end of array
console.log(add); // prints =. ['mikey', 'mett','eric', 'tracy']

//  * Removing an element from beginning of an array using shift() method
var offFront = friends.shift(); // removes 'mikey' from beginning of array
console.log(offFront); // prints => ['matt', 'eric', 'tracy']

//  * Add an element to the beginning of an array using undhift() method
var add1 = friends.unshift('mikey mo') // adds 'miikey mo to beginning of the array'
console.log(add1); // prints => ['mikey mo', 'matt', 'eric', 'tracy']

//  * Find the index of an item in the array using indexOf() method
console.log(friends.indexOf('mikey mo')); // prints => 0

//  * Remove an element by index position using splice() method
//  * .splice(index, how many  elements to remove after index)
console.log(friends.splice(2,1)); // prints => ['mikey mo', 'matt', 'tracy']

/// * Remove elements from an index position from start position to end of array
console.log(friends.splice(2,2)); // prints => ['mikey mo', 'matt']

//  * Copy an array using the slice() method
var copyfriend = friends.slice(); 
console.log(copyfriend); // prints =>  ['mikey mo', 'matt', 'eric', 'dan']




