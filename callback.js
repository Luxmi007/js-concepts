// callback fn. in JS

setTimeout(function() {
    console.log("timer");
},3000)

function x(y){
    console.log("x");
    y();
}

    x(function y(){
        console.log("y")
    })     //fn. y is the callBack fn.

// JS is synchronous and single threaded language

// blocking the main thread 


// event listeners:
function ael(){
    let count = 0;
    document.getElementById("click").addEventListener("click",function xyz(){
        console.log("button clicked", count++);
    })

}
ael();


// power of callbacks

// Garbage collectors and removeEventListeners

/*
  event listeners are heavy as it holds up the memory even when not in use
*/