/*
 * VARIABLES:
 *
 * 0. To hold things in memory during the life-cycle of a program, we can use variables.  Variables
 * are named identifiers that can point to values of a particular type, like a Number, String,
 * Boolean, Array, Object or another data-type.  Variables are called so because once created, we
 * can CHANGE the value (and type of value) to which they point.
 *
 * 1. To create a variable we use the keyword var, let, and const, followed by a name (id or alias) for our
 * variable.
    
    1a. The var keyword is Global and Local(ly) scoped => meaning they can be accessed from wherever they are 
        declared, be it outside of a function or inside of a function.
    
    1b. The let keyword is Block Scoped => meaning it is only visible in the block of code for which it was created.
        You should use the let keyword when dealing in loops and if, if...else statements.
        
    1c. The const keyword is Block Scoped => meaning it is only visible in the block of code for which it was created.
        You should use the const keyword when dealing with Arrays and Objects because they can't be re-assigned.
 *
 * 2. There are 2 phases of using variables: declaration and initialization (or assignment).
 */

// 1. declaration //
var myName;

/*
 * At the declaration phase, the variable myName is undefined because we have NOT initialized
 * it to anything
 */
console.log(myName); // prints => undefined

// 2. initialization or assignment //
myName = 'john';
console.log(myName); // prints => john

// 3. re-assignment //
myName = 'bob';
console.log(myName); // prints => bob

// NOTE: We can assign and re-assign anything to a variable - we cannot do this with constants //

// 1. assignment and declaration //
var myVariable = 1;
console.log(myVariable); // prints => 1

// 2. re-assignment and re-declaration //
var myVariable = true;
console.log(myVariable); // prints => true

// 3. re-assignment //
myVariable = "someString";
console.log(myVariable); // prints => someString


/*
    Note: You can declare a many variables in one statement 
    * Start a statement with the var keyword and seperate the variables by a comma(,)
*/
var name = 'Max', fun = true, age = 41.5;
console.log(name, fun, age); // prints 'Max', true, 41.5








// Remember JavaScript identifiers(names) must begin with:
//  * A letter (A-Z or a-z)
var name = 'Max'; // => prints Max  
/*  
    * A dollar sign ($) - used by professional devs. as an alias for the main function in a JavaScript library
    *JavaScript treats $ as a letter, identifiers containing $ are valid variable names
*/
var n$a = 'NSA'; // => prints NSA 
        
/*
    * Or an underscore(_) used by professional devs. as an alias for 'private (hidden)' variables
    * JavaScript treats _ as a letter, identifiers containing _ are valid variables
*/    
var y_ep = true; // => true




