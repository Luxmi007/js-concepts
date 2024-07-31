// Event loop:- it monitors the call Stack and callBack queue continously. It also pushes the code into the call Stack form the callBack Queue
/* 
  Web api gives access of all the superpowers (setTimeout, DOM APIs, fetch(), local storage, console, location) of the browser to the js engine
*/

console.log("Start");

setTimeout(function cb () {
    console.log("callback");
}, 4000);

console.log("End")

// microtask:- callback fns. coming from promises and mutation observer are placed into microtask queue which is given high priority during implementation