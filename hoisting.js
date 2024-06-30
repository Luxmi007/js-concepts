getName();               
console.log(a);


var a = 7;  // udefined and not defined isn't same
let x = 4;
const c = 'hello';


function getName (){
    console.log("hello js")
}

console.log(x);
console.log(c);


// Hoisting: it is a phenomena in JS in which we can access the variables and functions even before initialising them .  The reason for hoisting lies in te execution context ( two phases :- memory/variable env.,  and code/thread of execution )


//this only includes function, function*, async function, and async function* declarations. Hoisting is often considered a feature of var declarations as well, although in a different way. In colloquial terms, any of the following behaviors may be regarded as hoisting:   1. Being able to use a variable's value in its scope before the line it is declared. ("Value hoisting")

// 2. Being able to reference a variable in its scope before the line it is declared, without throwing a ReferenceError, but the value is always undefined. ("Declaration hoisting")

// 3. The declaration of the variable causes behavior changes in its scope before the line in which it is declared.

// 4. The side effects of a declaration are produced before evaluating the rest of the code that contains it.

// The four function declarations above are hoisted with type 1 behavior; var declaration is hoisted with type 2 behavior; let, const, and class declarations (also collectively called lexical declarations) are hoisted with type 3 behavior; import declarations are hoisted with type 1 and type 4 behavior.

// Some prefer to see let, const, and class as non-hoisting, because the temporal dead zone strictly forbids any use of the variable before its declaration. This dissent is fine, since hoisting is not a universally-agreed term. However, the temporal dead zone can cause other observable changes in its scope, which suggests there's some form of hoisting: