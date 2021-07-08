/*
 * LOOPS:
 *
 * 0. Loops offer a quick and easy way to do something repeatedly. There are many
 * different kinds of loops, but they all essentially do the same thing: they repeat
 * an action some number of times. (Note that it's possible that number could be zero!)
   The various loop mechanisms offer different ways to determine the start and end 
   points of the loop. There are various situations that are more easily served by one
   type of loop over the others.
*/



// for Loop //

/*
    * A for loop repeats until a specified condition evaluates to false. 
    
    * for loop syntax:
    
      for ([initialExpression]; [conditionExpression]; [incrementExpression])
          statement
      
    * When a for loop executes, the following occurs:
    
    1. The initializing expression initialExpression, if any, is executed. This
    expression usually initializes one or more loop counters, but the syntax allows
    an expression of any degree of complexity. This expression can also declare variables.
    
    2. The conditionExpression expression is evaluated. If the value of condition
    Expression is true, the loop statements execute. If the value of condition is 
    false, the for loop terminates. (If the condition expression is omitted entirely,
    the condition is assumed to be true.)
    
    3. The statement executes. To execute multiple statements, use a block 
    statement ({ ... }) to group those statements.
    
    4. If present, the update expression incrementExpression is executed.
    
    5. Control returns to Step 2.
*/

for (let i = 0; i <= 3; i++) {
    console.log(i); // prints 0, 1, 2, 3
}



// do...while Loop //

/*
    * The do...while statement repeats until a specified condition evaluates to false.
    
    * do...while syntax:
    
        do
            statement
        while (condition);
    
    * when a do...while loop executes:
    
    1.statement is always executed once before the condition is checked. (To execute
    multiple statements, use a block statement ({ ... }) to group those statements.)
    
    2. If condition is true, the statement executes again. At the end of every execution,
    the condition is checked. When the condition is false, execution stops, and control
    passes to the statement following do...while.
*/

let i = 0;
do {
  i += 1;
  console.log(i);
} while (i < 5); // prints 1, 2, 3, 4, 5



//  while Loop // 

/*
    * A while statement executes its statements as long as a specified condition evaluates to true.
    
    * while syntax:
    
    while (condition)
        statement
        
    1. If the condition becomes false, statement within the loop stops executing and control
    passes to the statement following the loop.    
    
    2. The condition test occurs before statement in the loop is executed. If the
    condition returns true, statement is executed and the condition is tested again.
    If the condition returns false, execution stops, and control is passed to the statement
    following while.
    
    * To execute multiple statements, use a block statement ({ ... }) to group those statements.
*/

let n = 0;
let x = 0;
while (n < 3) {
  n++;
  x += n;
} 
/*
    * With each iteration, the loop increments n and adds that value to x. Therefore, x and n 
    take on the following values:
    
        1. After the first pass: n = 1 and x = 1
        
        2. After the second pass: n = 2 and x = 3
        
        3. After the third pass: n = 3 and x = 6
        
    * After completing the third pass, the condition n < 3 is no longer true, so the loop terminates.
    
    *Avoid infinite loops. Make sure the condition in a loop eventually becomes false—otherwise, the
    loop will never terminate! The statements in the following while loop execute forever because the
    condition never becomes false:
    
    *** Infinite loops are bad! ***
    
while (true) {
  console.log('Hello, world!');
}

*/



// for...in Loop for Objects //

/*
    * The for...in statement iterates a specified variable over all the enumerable properties
    of an object. For each distinct property, JavaScript executes the specified statements.
    
    * for...in syntax:
    
        for (variable in object)
         statement
*/


let person = {
    name: 'jo',
    surname: 'shmo',
    age: 88
}

for (let key in person) {
    console.log(`My ${key} is ${person[key]}`);
}

// prints => 'My name is jo', 'My surname is shmo', 'My age is 88'



// for...of Loop for Arrays //

/*
    * The for...of statement creates a loop Iterating over iterable objects (including
    Array, Map, Set, arguments object and so on), invoking a custom iteration hook with
    statements to be executed for the value of each distinct property.
    
    * The difference between a for...of loop and a for...in loop. While for...in iterates
    over property names, for...of iterates over property values.
    
    * for...of syntax:
    
        for (variable of object)
            statement
*/

let arr = [1, 2, 3];

for (let i of arr) {
    console.log(i); // prints => 1, 2, 3
}





