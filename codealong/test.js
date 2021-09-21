// we learned to create variable or initial statement for loop
console.log('Hello');
// To run type "node and name of file" in terminal
// example to run this function node exercise.js

// create a function.
// give it a variable or var and a name

// example 1 
// *****  FUNCTION EXPRESSION or ANONYMOUS EXPRESSION *****
var printSomething = function ( anyStatement ){
    console.log(`Here's my statement: ${ anyStatement }`);
}
printSomething(' This is a breezy day' );

// example 2 
// ***** FUNCTION DECLARATION *****
function printSomething( anyStatement ) {
    console.log(`Here's my statement: ${anyStatement}`);
}
printSomething( 'This is a breezy day 2')

// JS version of objects and dictionaries
var person = {
    firstName: 'Derek',
    lastName: 'Hawkins',
    email: 'derekh@codingtemple.com'
};
console.log(person);

// you can use OBJECT DOT NOTATION
console.log(person.firstName);
console.log(person.lastName);
console.log(person.email);

// OBJECT LITERAL NOTATION
console.log(person['firstName']);
console.log(person['lastName']);
console.log(person['email']);

// make static function more dynamic 
var person = {
    firstName: 'Derek',
    lastName: 'Hawkins',
    email: 'derekh@codingtemple.com'
};

// js OBJECT CLASS Equivalent
// OBJECT CONSTRUCTOR FUNCTION
// in js 'this.' is the same as 'self.' in python
function Person(firstName, lastName, email){
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
}

var person1 = new Person('Lucas', 'Lang', 'lucasl@codingtemple.com');
var person2 = new Person('Joel', 'Carter', 'joelc@codingtemple.com');

console.log(person1.firstName)
console.log(person2['email'])

// var is similar to def in python
// function is similar to class in python







