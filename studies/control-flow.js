/*
 * CONTROL FLOW:
 *
 *  0. The control flow is the order in which the computer executes statements in a 
 *  script. Code run in order from the first line in the file to the last line, unless
    the computer runs across the (extremely frequant) structures that can change 
    the conrtrol flow, such as conditionals and statements.You can control the
    flow of your code using conditionals and logical statements.
 
//  Coditional Statements //
/*
    * Conditional Statements are very often used to perform different actions based
    of different conditions. You can use conditional statements in your code to do this.
    
    * In JavaScript we have the following conditional statements.
*/
 
//  1. (if) statements => specify a block of  code to be executed, if specific condition is true.

var x = 1;
if (x > 13) {
    console.log(false);
} // prints => false



//  2. (else) statements => specifiy a block of code to execute, if the same specified condition is false.

if (x > 13 || x === undefined) { // here if statement evaluates to false and moves on
    return x; // the control flow begins 
} else { // here it executes the statement
    return false;
}

//  3. (else...if) statemment => specify a new condition test, if the first condition is false.
var sky = 'blue';

if (sky === 'red') { // condition evaluates to false and moves to the next condition
    return 'red';
} else if (sky === 'yellow') { // also evaluates to false and moves to the default else statement
    return 'yellow';
} else { 
    return 'This is the end of the conditional!';
}

/*
    * Multiplte (if...else) stetements can be nested to create (else...if) clause.
    
    * NOTE: There is NO elseif (in one word) keyword in JavaScript.
    
    * Use proper indentattionwhen nesting (if...else if) statements.
    
    * To exetute multiple statements within a clause, use a block statement.
    
    * ({...}) to group those statements. In genereal, it is GOOD PRACTICE to ALWAYS
    use block statements, especially in code involving nested if statements.
    
    * Do not confusethe primitive Boolean values (true) and (false) with the 
    truthiness or falsiness of the Boolean object. Any value that is not false,undefifned,
    null, 0, -0, NaN, or the empty string (""), and any object, including a Boolean
    object whose value is false, is considered truthy when used as a condition.
    
    * If you need to use an assignment in a condition expression, a common practice is to 
    put additional parenthesis around the assignment; because  the assignment can be confused
    with equality when glancing over code.
*/

/*  4. (switch) statement => is used to perform different actions based on different conditions
    * use the (switch) statement to select one of many code blocks to be executed.
    * syntax:
    
        switch(expression) {
            case x:
            //code block => statements executed when result of expression matches case x
            break;
            case y:
            //code block => statements executed when result of expression matches case y
            break;
            case z:
            //code block => statements executed when result of expression matches case z
            break;
            default:
            //code block => statements executed when no cases match the value of expression
            
    * This is how it works:
    
    1. The (switch) expression is evaluated once.
    2. The value of the expression is compared with the values of each case.
    3. If there is a match, the associated block of code is executed.
    4. If there is no match, the default code block is executed..
    
    * The (default) keyword specifies the code to run if there is no case match
    * The (default) case does not haave to be the last case in the switch block.
    * NOTE: If (default) is not the last case in a switch block, remember to end default
    case with a break.
    * Common code blocks: sometimes you will want different switch cases to use the same code
*/

const expr = 'Papayas';

switch (expr) {
  case 'Oranges':
    console.log('Oranges are $0.59 a pound.');
    break;
  case 'Mangoes':
  case 'Papayas':
    console.log('Mangoes and papayas are $2.79 a pound.');
    // expected output: "Mangoes and papayas are $2.79 a pound."
    break;
  default:
    'Try again later';
} //  prints => "Mangoes and papayas are $2.79 a pound."