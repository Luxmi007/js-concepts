
// function statement
function a(){
    console.log("i am a fn. statement");
}


// funtion expression 
var b = function (){
    console.log("b called");
}


// function declaration === function statement


/* Anonymous functions = fn. without name; they don't have their identity; they're used in a place where fns. are used as values

function (){

}     */


// Named function expression
var b = function asd(param1, param2){   //parameters
    console.log("b called");
}


a();
b(1,2);                                 //arguments


// Difference between Parameters and arguments


// First class functions: the ability to use fns. as values and can be passed as an argument to another fn. and can be returned from the fns. 

