/*
 *  OPERATORS:
 *
 *  0. JavaScript's expressions and operators, including assignment, comparison,
 *  arithmetic, logical, string, bitwise, ternary.  JavaScript has the following
 *  types of operators. This section describes the operators and contains information
    about operator precedence.JavaScript has both binary and unary operators, and
    one special ternary operator, the conditional operator. A binary operator requires
    two operands, one before the operator and one after the operator
 *
 *
 *
 */
    
    // Assignment Operators //

/*  An assignment operator assigns a value to its left operand based on the value
    of its right operand. The simple assignment operator is equal (=), which assigns the 
    value of its right operand to its left operand. That is, x = y assigns the value of y to x. 
 
    The simple assignment operator (=) is used to assign a value to a variable. The
    assignment operation evaluates to the assigned value. Chaining the assignment
    operator is possible in order to assign a single value to multiple variables 
 */ 
 
var x = 2;
var y = 3;

console.log(x); // returns = > 2

console.log(x = y + 1); // 3 + 1 => returns => 4

console.log(x = x * y); // 4 * 3 => returns => 12



    // Comparison Operators //
    
/*
    A comparison operator compares its operands and returns a logical value based on
    whether the comparison is true. The operands can be numerical, string, logical, 
    or object values. Strings are compared based on standard lexicographical ordering,
    using Unicode values. In most cases, if the two operands are not of the same type,
    JavaScript attempts to convert them to an appropriate type for the comparison.
    This behavior generally results in comparing the operands numerically. The sole
    exceptions to type conversion within comparisons involve the === and !== operators,
    which perform strict equality and inequality comparisons. These operators do not
    attempt to convert the operands to compatible types before checking equality.
 */

var a = 3;
var b= 4;

//  (==) equal to => returns true if operands are equal
'3' == 3; // returns => true
//  (!=) not equal to => returns true operands are not equal
a != 4; // returns => true
//  (===) strictly equal to => returns true if opearands are equale in value and type
b === 4; // returns => true
//  (!==) stricly not equal to => returns true if operands are not equal or are of a different type
a !== 3; // returns => true
//  (>) greater than => returns true if left operand is greatere than the right 
b > x; // returns => true
// (>=) greater than or equal to => returns true if left operand is greater than or equal to the right 
b >= a; // returns => true
// (<) less than => returns true if right operand is less than left operand
a < b; // returns true
// (<=) less than or equal to => returnns true if right is less than left
a <= b; // returns true



//  Arithmetic Operators //
    
/*  
    An arithmetic operator takes numerical values (either literals or variables) as
    their operands and returns a single numerical value. The standard arithmetic
    operators are addition (+), subtraction (-), multiplication (*), and division (/).
    These operators work as they do in most other programming languages when used with
    floating point numbers (in particular, note that division by zero produces Infinity).
*/

// (+) addition operator => adds numbers
1 + 12; // returns => 13
//  (-) subtraction operator => subtracts numbers
69 - 56; // returns => 13
//  (*) multiplication operator => multiplies numbers
6.5 * 2; // returns => 13
//  (/) division operator => divides numbers
39 / 3; // returns => 13
//  (%) remainder operator => returns the remainder of divided numbers
12 % 5; //  returns => 2
//  (++) increment operator => unary operator, adds one to an operand
// if x = 3 => x++ = 4
//  (--) decrement operator => unary operator, subtracts one from operand
// if x = 3 => x-- = 



//  Logical Operators //

/*  
    Logical operators are typically used with Boolean (logical) values; when they
    are, they return a Boolean value. However, the && and || operators actually
    return the value of one of the specified operands, so if these operators are 
    used with non-Boolean values, they may return a non-Boolean value
*/

// (&&) logical AND => when used with Boolean values, && returns true if both operands
// are true; otherwise, returns false.
13 > 3 && 15 > 7; // returns => true
//  (||) logical OR => when used with Boolean values, || returns true if either operand
//  is true; if both are false, returns false. 
13 > 3 || 15 < 7; // returns true
//  (!) logical NOT => Returns false if its single operand that can be converted to 
//  true; otherwise, returns true.
!true; // returna => false



//  String Operators //

/*
    In addition to the comparison operators, which can be used on string values, the
    concatenation operator (+) concatenates two string values together, returning
    another string that is the union of the two operand strings.
*/


console.log('I am ' + 'Learning a Lot!'); // returns => "I am Learing a Lot!"

// The shorthand assignment operator += can also be used to concatenate strings.
var mystring = 'alpha';
console.log(mystring += 'bet'); // prints => "alphabet" and assigns this value to mystring.



// Conditional Ternary Operator //

/*
    The conditional operator is the only JavaScript operator that takes three operands.
    The operator can have one of two values based on a condition.
*/

//  condition ? val1 : val2 => If condition is true, the operator has the value of val1.
//  Otherwise it has the value of val2. You can use the conditional operator anywhere you would use a standard operator.

var age = 21;
var status = (age >= 18) ? 'adult' : 'minor';
console.log(status); // prints => 'adult'
