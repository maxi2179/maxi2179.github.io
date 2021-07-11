//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// use Object.values to extract object values
// return objects values in array
function objectValues(object) {
    return Object.values(object);
    }



//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// take in an object
// use Object.keys to extract object keys to an array
// join all array elements with a space
// return string of keys
function keysToString(object) {
    return Object.keys(object).join(' ');
      
    

}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// take in an object 
// make for in loop to get values from objects
// if typeof object[key] === "" push to arrStr
// join all elements with spaces
// return string of values seperated with spaces
function valuesToString(object) {
    const arrStr = [];
        for (const key in object) {
            if (typeof object[key] === 'string') {
                arrStr.push(object[key]);
            }

        }
            return arrStr.join(' ');
}
        
     


//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// take an argument of an object || array
// return object if its an object and array if an array

function arrayOrObject(collection) {
    if (Array.isArray(collection)) {
        return 'array';
    } else 
        return 'object';
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// take a string as argument 
// return string with first letter capitalized
// only first letter capitalized

function capitalizeWord(string) {
    return string.replace(string.charAt(0), string.charAt(0).toUpperCase());
                       
}
//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////
// take in a string as argument convert string to array
// use for loop to access array elements
// capitalize all strings
// return string with all words capitalized
// ALL words must be capitalized

function capitalizeAllWords(string) {
    const arrStr = string.split(' ');
    for (let i = 0; i < arrStr.length; i ++) {
        arrStr[i] = arrStr[i].charAt(0).toUpperCase() + arrStr[i].slice(1);
    }
    return arrStr.join(' ');
}

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// access a name property from object
// capitalize first letter of name
// add welcome and name in a message
// return 'welcome <name>!'
// must be case sensitive


function welcomeMessage(object) {
    return (`Welcome ${object.name.charAt(0).toUpperCase() + object.name.slice(1)}!`);

}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// take an objects properties name and species 
// access objects values name and species
// make name and species case sensitive
// return message of '<name> is a <species>'

function profileInfo(object) {
    return(object.name.charAt(0).toUpperCase() + object.name.slice(1)) + ' is a ' +
    (object.species.charAt(0).toUpperCase() + object.species.slice(1));
    
    







}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// make an if statement that check if objects noises array is > 0
// if object has noises return a string of them seperated by spaces
// if object doen't have a noises property return 'there are no noises'
// if there are no noises on the array return 'there are no noises'


function maybeNoises(object) {
    if (object.noises === undefined || !object.noises.length) {
        return 'there are no noises';
    } else {
        return object.noises.join(' ');
    }
}
    



//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// take a string and a word as arguments 
// make string and word toLowerCase for comparison
// use use indexOf() to see if that string contains that word
// return true if it has that word and false if not
function hasWord(string, word) {
    var strLwr = string.toLowerCase();
    var wrdLwr = word.toLowerCase();
    var strPos = strLwr.indexOf(wrdLwr);
    if(strPos > -1) {
        return true;
    } else { 
        return false;
    }
}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// I- a name to add to the object friends array
// O- name in the objects friends: ['name']


function addFriend (name, object) {
    object.friends.push(name);
    return object;
}


//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// I- a name and an object
// O-  return true if <name> is a friend of <object> 
// false if it does not have name
// C- access object friends list
// loop over friends list to find a match
// if match return true else return false

function isFriend(name, object) {
    var friends = object.friends;
    
    if(friends === undefined) {
        return false;
    } else {
        for(let i = 0; i <= friends.length; i++) {
            if(friends[i] === name) {
                return true;
            } else if (i === friends.length) {
                return false;
            }
        }
    }
}


   

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// I- a name and array of list of people
// O- return a list of friends that are not friends with name
// C- if the people on the list are not in name friends list
// loop thru array to get elements properties
// check if name passed in is on the list of array[i].friends

// make a list of those names push to new array
// make a not friends array list

function nonFriends(name, array) { 
    let notFriends = []; //create empty array to accept results
    
    for (let i = 0; i < array.length; i++) { // loop over the array
        if (name !== array[i].name) { // if name is not in array
        if(!array[i].friends.includes(name)) { // if objects friends array doesn't contain name
            notFriends.push(array[i].name); // push objects name property to new array
        }
        }
    } 
    return notFriends;
}


//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// I- object, key, value
// O- updated object.key with value if key doesnt exist add new object.key with value

function updateObject(object, key, value) {
    object[key] = value;
    return object;
}
        


//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////
/*
I- object and array
O- object return with properties from array removed
get object keys using Object.keys(object
loop over the array to access index values
if object[key] === array[i])remove object property
*/

function removeProperties(object, array) {
    for (let i = 0; i < array.length; i++) { // loop over array 
        if (object.hasOwnProperty(array[i])) { // chech if object has property of array[i]
            for ( let key in object) { // loop over keys in object
                if (key === array[i]) { // if key matches array[i] 
                    delete object[key];// remove key from object
                }
            }
        }
    }
    return object;
}
    
    
    

////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
/*
I- array 
O- an array with all dupicate elements removed
C- N/A
E- N/A
loop over the array 
use indexOf() to find first occurence of array[i]



*/
function dedup(array) {
     var newArr = [];
    for (let i = 0; i < array.length; i++) {
        if (array.indexOf(array[i], array[0]) === -1) {
        newArr.push(array[array.indexOf(array, array[i])]);
    }
    }
        return newArr;
}
        



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}