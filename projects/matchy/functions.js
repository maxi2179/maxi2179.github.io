/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// make a function declaration called search withh animals and a string 
// as parameters
// loop through animals and if animal = i return i

function search (animals, name) {
    for (var i = 0; i < animals.length; i++) {
        if (animals[i].name.toLowerCase() === name.toLowerCase()) {
            return animals[i];
        }
    }
            return null;
        
}
        




//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// make a fuunction delaration called replace with params: animals,
// name, replacement 
// an [array, of, animals], 'string name of animal', {
// object: to, replace: animal}
// use splice(i, i, replaceObj)
// if name exist replace with replacement object otherwisse do nothing
function replace(animals, name, replacement) {
    for (var i = 0; i < animals.length; i++) {
        if (animals[i].name.toLowerCase() === name.toLowerCase()) {
            animals.splice([i], 1, replacement);
        } 
        else null;
    }
}


//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// make a function declaration remove with params:animals, name
// loop thru animals to get names from array objects
// return array[i].name
// if name matches remove it

function remove (animals, name) {
    for (var i = 0; i < animals.length; i ++) {
         if(animals[i].name === name) {
         animals.splice(i, 1);
         }
    }
    return animals;
}

//////////////////////////////////////////////////////////////////////
// Step 4 - Add ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// declare a functiion add with params: animals, animal
// check if animal [name] propeerty length > 0
// check if animal [species] property length > 0
// check if animal [name] is unique
// add {animal: object}  to [animals, array] ONLY if all other conditions pass

function add (animals, animal) {
    var nameMatch = false;
    
     for (var i = 0; i < animals.length; i ++) {
         
         
        if (animals[i].name === animal.name) {
            nameMatch = true;
        }
        
    }  
        if (animal.name.length > 0 && animal.species.length > 0
         && nameMatch === false) {
         return animals.push(animal);
         } 
}


/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}
