/*
 *  STRING MANIPULATION:
 *
 *  0. String Methods and Properties: primitive values cannot have properties or 
 *  methods (because they are not objects).
 *  
    But with JavaScript, methods and properties are also available to primitive
    values, because JaavaScript treats primitive values as objects when executing
    methods and properties.
*/

//  String Methods and Properties //


//  1. Length Property //

/*    
    * The (length) property returns the length of the string
    
    * This is useful for many reasons; for example, you might want to find the 
    lengths of a series of names so you can display them in order of length, or
    let a user know that a username they have entered into a form field is too long
    if it is over a certain length.
*/

var string = 'thirteen long';
console.log(string.length); // prints => 13

//  * NOTE: In a (string) spaces and symbols are counted as characters.




//  2. Extracting a Specific String Character //

/*    
    2a. charAt() method => charAt(position)
    * charAt() method returns the character at a specific index (position)
    
    2b. You can return any character inside a string by using square bracket notation
    — this means you include square brackets ([]) on the end of your variable name.
    Inside the square brackets you include the number of the character you want to return.
    
    * Remember: computers count from 0, not 1! You could use this to, for example, find
    the first letter of a series of strings and order them alphabetically. 
    
    * To retrieve the last character of any string we could combine this technique
    with the length property we looked at above.
*/

string.charAt(6); // returns => 'e'
string[0]; // returns => 't' => the first character of the string
string[string.length - 1]; // returns => 'g' => the last character of the string
    

    
//  3. Extracting String Parts //

/*
    3a. slice() Method => slice(beginIndex, endIndex)
    
    * slice() extracts a part of a string and returns the extracted part in a new string,
    without modifying the original string.
    * The method takes two parameters: the start position and the end position (end not included)
    * JavaScript counts position from zero (0). First position is (0).
    * If a parameter is negative, the position is counted from the end of the string.
    * If you omit the second parameter, the method slices out the rest of the sting, or
    counting from the end.
*/

var slicd = '';
var slicd1 = '';
var slicd2 = ''
slicd = string.slice(0,8); // extracts from 0 to 7 because 8 is end position which is not included 
console.log(slicd); // prints => 'thirteen'
slicd1 = string.slice(8); // extracts from index 8 til the end
console.log(slicd1); // prints => 'long'
slicd2 = string.slice(-9, -5);
console.log(slicd2); // prints => 'teen'

/*

    3.b substring() Method => substring(indexsStart, indexEnd)
    
    * Similar to slice(), the difference is that the second parameter specifies the length
    of the extracted part.
    *The substring() method returns the part of the string between the start and end 
    indexes, or to the end of the string.
    * If you omit the secoond pararmeter, substring() will slice out the rest of the string.
    
*/

const xmpl = ' this is a string '
var subst = '';
var subst1 = '';
subst = xmpl.substring(2, 6);
console.log(subst); // prints => 'his'
subst1 = xmpl.substring(10);
console.log(subst1); // prints => 'string'

//  4. Replacing String Content //

/*  
    4a. replace() Method => replace(substr, newSubstr) => replace(regexp, newSubstr)
    
    * The replace() method replaces a specified value with another value in a string.
    * The replace() method does not change the string it is called on, it returns a new string.
    * By default, the replace() method repplaces only the first match.
    * By default, the replace() method is case sensitive; to replace case insensitivity,
    use (regexp) with an /i flag (insensitive)
    * NOTE: (regexp) expressions are written without quotes.
    * To replace all matches, use (regexp) expression with a /g flag (global match)
*/

const string1 = 'This is to ba replaced with Something?'
string1.replace('ba', 'be');
console.log(string1.replace('ba', 'be') // prints => "This is to be replaced with Something?"
var regex = /something/i;
console.log(string1.replace(regex, 'Anything!')); // prints => "This is to ba replaced with Anything!"

//  5. Converting to Upper Case and Lower Case //

/*
    * toUpperCase() => converts all characters in a string to upper case in a new string
    * toLowerCase() => converts all characters in a string to lower case in a new string
*/


var str = 'thIs Is A random StinG to Be UppercaseD';
console.log(str.toUpperCase()); // prints => "THIS IS A RANDOM STRING TO BE UPPERCASED"
var str2 = 'thiS is To BE loWERCaseD!'
console.log(str2.toLowerCase()); // prints => "this is to be lowercased!"

/*
    * NOTE: All string methods return a new string. They don't modify the original string.
    * Strings are immutable; cannot be changed, only replaced.
*/

//  6. String Trim //

//  * trim() method => removes whitespace fromm both ends of a string

var str3 = '      This will take out all the extra whitespace!#!       '
console.log(str3.trim()); // prints => "This will take out all the extra whitespace!"

//  7. Converting a String to an Array //

/*
    * A string can be converted to an Array with the split() method
    * if a seperator is ommited, the returned array will contaion the whole string in index [0].
    * If the seperator is "", the returned array will be an array of single characters.
*/

var arr = [];
var str4 = "this will split";
console.log(str4.split()); // prints => ["this will split"]
console.log(''); // prints => ["t","h","i","s"," ","w","i","l","l"," ","s","p","l","i","t"]