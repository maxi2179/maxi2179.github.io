/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// create a variable animals with an empty object
var animal = {};
// use bracket notation to add a species property
animal.species = 'monkey';
// use bracket notation to add property called name
animal['name'] = 'Myran';
// add a property of noises with an empty array
animal.noises = [];
//print animal name to the console
console.log(animal);





//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// make a noises variable assiegned with an empty array
var noises = [];
//use bracket notation to give noises its first element
noises[0] = 'hoo hoo haa haa';
// use .push to ad a noise to end of the array
noises.push('ahhh');
// use unshift to put a noise at beginning of array
noises.unshift('hisss');
//put a nother noise in array
noises.push('sigh');
//use bracket notation to add an element at the end of noises
noises[noises.length -1] = 'ruff';
//print noises length to console
console.log(noises.length);
// console the last element of noises NOT using index
console.log(noises.length - 1);
// log the noises array to console
console.log(noises);


//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////
// use Bracket Syntax to assign  new noises array to the 'noises' property in animal
animal['noises'] = noises;

//  use any syntax to add another noise to the 'noises' property on animal
animal.noises[noises.length] = 'meow';

/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 *      you can use dot natation, bracket notation, for-in loop to loop
        thru object properties, or Object destructuring 
 * 2. What are the different ways of accessing elements on arrays?
        you can use array's index using bracket notation, or a fro looe 
        to iterate over the elements in array
 *
 * *******************************************************************
 */

/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////
// create an animals variable with an empty array
var animals = [];
// push the animal array to the animals array
animals.push(animal);
// log animals to console
console.log(animals);
// create a duck object with species: duck, name: jerome, noises: [quack,
//honk,sneeze, woosh]
var duck = {
    species: 'duck',
    name: 'Jerome',
    noises: ['quack', 'honk', 'sneeze', 'woosh']
};
// push duck object to animals array
animals.push(duck);
// log animals to console
console.log(animals);


//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// create two more animal objects with properties: species, name, and two sounds
// push to animals array
var tiger = {
    species: 'tiger',
    name: 'Mike',
    noises: ['roar', 'purrr']
};
animals.push(tiger);
var eagle = {
    species: 'bird',
    name: 'Iko',
    noises: ['kaugh kaugh', 'chirp chirp']
};
animals.push(eagle);
// log animals and animals length
console.log(animals);
console.log(animals.length);


// choose a data structure [array, because, you, can, store, unlimited objects]
// make a friends varible assigned to empty []
var friends = [];

// declare a function getRandom with param: animals
// loop thru animals
// return a random index using Math.random
// push animals name to friends array
// log friends to console
function getRandom (animals) {
        return Math.floor((Math.random() * animals.length));
        
         
    }
    
// using Bracket Notation to add friends list as a property also 
// named friends to an animal in animals array


animals[getRandom(animals)]['friends'] = friends;


if(animal.name === 'Mike') {
    animal['friends'] = friends;
}

    

console.log(friends);
    


/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 

**/

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}