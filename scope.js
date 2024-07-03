//scope means where we can access a specific variable or funtion in a code. it is directly related to the lexical environment


function a() { //a fn. is lexically inside global scope

c();
function c() {      // c fn. is lexically inside a fn.
    console.log(b);
}
}

var b = 10;
a();

//lexical environment (LE): when EC is created, lexical environment is also created
//LE is the local memory along with LE of its parent
// Lexical means hierarchy or sequence

// scope chain: the chain of LEs and parent references 