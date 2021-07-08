/*
 *  FUNCTIONS:
 *  
 *  0. Functions are one of the fundamental building blocks in JavaScript. A function
 *  n JavaScript is similar to a procedure—a set of statements that performs a task or
    calculates a value, but for a procedure to qualify as a function, it should take some
    input and return an output where there is some obvious relationship between the input
    and the output. To use a function, you must define it somewhere in the scope from which
    you wish to call it.
*/



//  Functions Declaration //

/*
    * A function definition (also called a function declaration, or function statement)
    consists of the function keyword, followed by:
    
        * The name of the function
        * A list of parameters to the function, enclosed in parentheses and separated by commas
        * The JavaScript statements that define the function, enclosed in curly brackets, {...}.
        
    * function syntax: function name(parammeter(s)) {code to execute};
*/

function add(num, num1) {
    return num + num1;
}
console.log(add(12, 1)); // prints =>13

// add => function name, num & num 1 => parameters, return => statement

/*
    * Primitive parameters (such as a number) are passed to functions by value; the value is
    passed to the function, but if the function changes the value of the parameter, this change
    is not reflected globally or in the calling function.    
*/

//  Function Expressions //

/*
    * While the function declaration above is syntactically a statement, functions
    can also be created by a function expression.
    
    * Such a function can be anonymous; it does not have to have a name. 
*/

const square = function (num) {num * num};
console.log(square(3)); // prints => 9

/*
    * However, a name can be provided with a function expression. Providing a name
    allows the function to refer to itself, and also makes it easier to identify the
    function in a debugger's stack traces.
*/

const divi = function divide(num1, num2) {num1 / num2};
console.log(divi(26, 2)); // prints => 13


//  Calling a Function //

/*
    * Defining a function does not execute it. Defining it names the function and
    specifies what to do when the function is called.
    
    * Calling the function actually performs the specified actions with the indicated parameters.
    * For example, if you define the function square, you could call it as follows:
*/

square(5); // prints => 25

/*
    * Functions must be in scope when they are called, but the function declaration can be
    hoisted (appear below the call in the code)
    * The scope of a function is the function in which it is declared (or the entire program, 
    if it is declared at the top level).
*/

console.log(squar(5));

function squar(n) { return n * n }

/*
    * NOTE: This works only when defining the function using the above syntax 
    (i.e. function funcName(){}). The code below will not work.

    * This means that function hoisting only works with function declarations-
    not with function expressions.
*/


var squarre = function(n) {
  return n * n;
};
console.log(squarre);   // squarre is hoisted with an initial value undefined.
console.log(squarre(5));  // Uncaught TypeError: squarre is not a function

//  Function Scope //

/*
    * Variables defined inside a function cannot be accessed from anywhere outside
    the function, because the variable is defined only in the scope of the function.
    However, a function can access all variables and functions defined inside the
    scope in which it is defined.

    * A function defined in the global scope can access all variables defined in the
    global scope. A function defined inside another function can also access all 
    variables defined in its parent function, and any other variables to which the 
    parent function has access.
*/

// The following variables are defined in the global scope
var num1 = 6.5,
    num2 = 2,
    name = 'Irie';

// This function is defined in the global scope
function multiply() {
  return num1 * num2;
}

multiply(); // returns => 13

// A nested function example
function getScore() {
  var num1 = 12,
      num2 = 1;

  function add() {
    return name + ' scored ' + (num1 + num2);
  }

  return add();
}

getScore(); // Returns "Irie scored 13"



//  Nested Functions //

/*
    * You may nest a function within another function. The nested (inner) function 
    is private to its containing (outer) function.
    
    * It also forms a closure. A closure is an expression (most commonly, a function)
    that can have free variables together with an environment that binds those 
    variables (that "closes" the expression).
    
    * Since a nested function is a closure, this means that a nested function can 
    "inherit" the arguments and variables of its containing function. In other words,
    the inner function contains the scope of the outer function.
    
    * To summerize:
    
        * The inner function can be accessed only from statements in the outer function.
        * The inner function forms a closure: the inner function can use the arguments and
        variables of the outer function, while the outer function cannot use the arguments
        and variables of the inner function.
*/

var a;
var b;
var c;

function addSquares(a, b) {
  function square(x) {
    return x * x;
  }
  return square(a) + square(b);
}
a = addSquares(2, 3); // returns => 13
b = addSquares(3, 4); // returns => 25
c = addSquares(4, 5); // returns => 41



//  Multiple Nested Functions //

/*
    * A function (A) contains a function (B), which itself contains a function (C).
    * Both functions B and C form closures here. So, B can access A, and C can access B.
    * In addition, since C can access B which can access A, C can also access A.

    *Thus, the closures can contain multiple scopes; they recursively contain the scope
    of the functions containing it. This is called scope chaining.
*/

function A(x) {
  function B(y) {
    function C(z) {
      console.log(x + y + z);
    }
    C(3);
  }
  B(2);
}
A(1); // prints => 6 => (1 + 2 + 3)

/*
    * Closures are one of the most powerful features of JavaScript. JavaScript allows
    for the nesting of functions and grants the inner function full access to all the
    variables and functions defined inside the outer function (and all other variables
    and functions that the outer function has access to).

    * However, the outer function does not have access to the variables and functions
    defined inside the inner function. This provides a sort of encapsulation for the
    variables of the inner function.
    
    * Also, since the inner function has access to the scope of the outer function, the
    variables and functions defined in the outer function will live longer than the
    duration of the outer function execution, if the inner function manages to survive
    beyond the life of the outer function. A closure is created when the inner function
    is somehow made available to any scope outside the outer function.
*/



//  Arrow Functions //

/*
    * An arrow function expression has a shorter syntax compared to function expressions
    and does not have its own this, arguments, super, or new.target. Arrow functions are 
    always anonymous.
    
    * In some functional patterns, shorter functions are welcome.
    i.e. used as arguments passed to other functions.
*/

const concat = (str, str2) => {str + str2};
concat('I like', 'Arrow Functions!'); // prints "I like Arrow Functions!"

