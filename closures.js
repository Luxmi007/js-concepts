function x(){
    var a = 1;
    function y(){
        console.log(a);
    }
    y();
}
x();

/* the code template above is called as closure;
 Closure:- it is a function bundled along with its lexical scope 
   */

 function x(){
    var a = 1;
    return function y(){
        console.log(a);
    }
}
 var z = x();
 console.log(z);

 z();
 