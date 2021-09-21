// code along with lucas
// hoisting differences
// scoping differences
// let and var

// var is globally scoped
// meaning we can reset a block '{}' and redeclare myName to another name
// block can be a function, if statement, for loop

// **************************************************************************************
// ""Only Derek should still be printed even though it is in a  
// block since var myName global scope variable is being changed""

// var myName = 'Lucas'

// {
//     var myName = 'Derek'
// }

// console.log(myName)

// **************************************************************************************

// // "" block scope. ONLY outside globally scoped one will be printed using let""

// let myName = 'Lucas'

// {
//     let myName = 'Derek'
// }

// console.log(myName)

// **************************************************************************************

// "" inside block will print first and then the globally scoped variable. 
// because they are completely different variables""

//  ****CONST WILL WORK THE SAME WAY AS LET BECAUSE THEY ARE BLOCK SCOPED****

// let myName = 'Lucas'

// {
//     let myName = 'Derek'
//     console.log(myName)
// }

// console.log(myName)

// **************************************************************************************

// "" We should see Derek being printed twice in this occasion. ""

var myName = 'Lucas'

{
    var myName = 'Derek'
    console.log(myName)
}

console.log(myName)

// **************************************************************************************


