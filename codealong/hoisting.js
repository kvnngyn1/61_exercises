// code along with lucas
// hoisting differences
// scoping differences
// let and var

// testFunct()

// ANONYMOUS EXPRESSION FUNCTIONS WILL NOT BE HOISTED********
// So these expressions but be called after declarations
/*
let testFunct = function() {
    console.log('TEST')
}
*/


// We want to be able to make our functions be able to use this function anywhere inside our program
// at run time our function will be 'hoisted' to the top line  even when it is declared later

// function testFunct() {
//     console.log('TEST')
// }



// hoisting still applies to variables or regular string decloration
/*
""This would show an undefined error""
let myName;

console.log(myName);
myName = 'Lucas'
*/

/*
""Will give an error saying myName referenced before initialization""
""This is because the declaration was hoisted but not the value""
""if VAR was used instead of let. undefined will be printed out. because myName is accessible, but the definition isn't""

console.log(myName)
let myName = 'Lucas'
*/


/*
""ran alone will give a thatName undefined error""
console.log(thatName)
*/


// **************************************************

// "" Cannot access myName before initialization error. if we try to access a variable before its been assigned a value.""
console.log(myName)
let myName = 'Lucas'



// "" Undefined error. If we try to access the value of a variable before it was assignment""
console.log(yourName)
var yourName = 'Derek'

// ""That name is not defined error. Never initialized, declared, nor defined. ""
console.log(thatName)

// **************************************************