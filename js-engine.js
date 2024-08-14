// JS runtime environment:- it contains everrything that js needs to run the program
/*  
         to run js code we need:
         JS engine, set of APIs, event loop, microtask queue

         JS engine is heart of js runtime env.
*/ 

// ECMAscript is the language standard of js

/* 
working of js engine:
js takes code as input and then following happens
       step 1: Parsing :- during this, code is broken into tokensand syntax parser converts the code into AST(abstract syntax tree)

       step 2 & 3: Compilation & Execution:- AST goes to the interpreter, converts high level code to bytecode and the code moves to execution step; while doing so it takes the help of compiler to optimise the code
       
       Execution step requires MEMORY HEAP and CALL STACK for its completion

       */