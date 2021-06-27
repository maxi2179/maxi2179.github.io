// #!/usr/bin/env node

'use strict';

/**
 * 4: Contact List
 * 
 *  a. Create a factory Function called makeContact(id, nameFirst, nameLast) 
 *     that returns a contact object.
 *     
 *          ex: makeContact(1, 'Max', 'Gaudin'); // => {id: 1, nameFirst: 'Max', nameLast: 'Gaudin'}
 *     
 *  b. Create a factory Function called makeContactList that returns an Object 
 *     that manages contacts. The contact-list object should have the following methods:
 *       
 *      1. length(): returns the number of contacts within the list.
 *      2. addContact(contact): takes a contact object to be added to the 
 *         contact-list.
 *      3. findContact(fullName): takes a full-name String, like 'Max Gaudin', and 
 *         returns the contact object if found in the contacts-list, or, 
 *         undefined if the fullName does not match any contacts in the list.
 *      4. removeContact(contact): takes a contact object to be removed from 
 *         the contact-list.
 *      5. add a printAllContactNames() Function to your makeContactList() factory. The printAllContactNames() Function should 
 *         return a String formated with all the full-names of the separated 
 *         with a line-break, like so:
 *          
 *         myContacts.printAllContactNames(); // => Max Gaudin
 *                                                  John Fraboni
 *                                                  Kaelyn Chresfield
 *          
 *          WARNING: To pass this test, the LAST full name should have NO
 *          new-line character added after it!
 */

// YOUR CODE GOES BELOW HERE //
function makeContact(id, nameFirst, nameLast) {
//Input- variable contact object that takes in makeContact params as keys
//Output- contact object
//Constraints-must return object
//Edge Cases-N/A
var contact = {
    id,
    nameFirst,
    nameLast
};
return contact;

} 


function makeContactList() {
    /*
     * You need something here to hold contacts. See length api for a hint:
     */
     
     //Input-object with functions inside
     //Output-functioin call
     //Constraints- contacts list should have methods:length(),
     //*addContact(contact) that takes a contact object to be added to the contact-list,
     //*findContact(fullName) takes a fullName string and returns the contact object if found to contacts-list
     //*removeContact() takes a contact object to be removed from contact-list
     //*printAllContactsNames() function that returns a string formated with all the full-names seperated with line breaks
     //Edge Cases- printAllContactNames() Function should 
    // return a String formated with all the full-names of the separated 
    // with a line-break
     
    var contacts = [];
    
    return {
        // we implemented the length api for you //
        length: function() {
            return contacts.length;
        },
        addContact: function addContact(contact) {
            return contacts.unshift(contact);
        },
    //Input-fullName string
    //Output-contact object if found and undefined if not
    //Constraints-if contact object is found put in contact-list else return undefined
    //Edge Cases-fullName must match names in object 
        findContact: function findContact(fullName) {
            for(var i =0; i < contacts.length; i++) {
                if(fullName.toLowerCase() === contacts[i].nameFirst.toLowerCase() + ' ' + contacts[i].nameLast.toLowerCase()) {
                    return contacts[i];
                }
            }
        },
        
             //removeContact(contact): takes a contact object to be removed from the contact-list. 
            //Input-contact
            //Output-new contacts list with said contact removed
            //Constrainst-N/A
            //Edge Cases-contact must match contacts list to be removed
            removeContact: function removeContact(contact) {
                var index;
                for(var i = 0; i < contacts.length; i++) {
                    if(contacts[i].nameFirst === contact.nameFirst && contacts[i].nameLast === contact.nameLast) {
                        index = i;
                    }
                } 
                contacts.splice(index, 1);
            },
            /*add a printAllContactNames() Function to your makeContactList() factory. The printAllContactNames() Function should 
 *         return a String formated with all the full-names of the separated 
 *         with a line-break, like so:  */
 
 
            //I-loop to find full names of contacts
            //O-full names seperated by line breaks
            //C-
            //E-last line shouldn't have a page break
            printAllContactNames: function() {
                
}
    


        
        



              
    
                
                
                
    






// YOUR CODE GOES ABOVE HERE //




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
(typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.makeContact = makeContact;
    module.exports.makeContactList = makeContactList;
}
