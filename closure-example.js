/*function x(){

    for (let a = 1; a <= 10; a++){
        setTimeout(function(){
            console.log(a);
        }, a * 1000);

    }
    console.log("time and space");
}
x();   */


function x(){

    for (let a = 1; a <= 10; a++){

        function close(a){
            setTimeout(function(){
                console.log(a);
            }, a * 1000);
        }
        
 close(a);
    }
    console.log("time and space");
}
x();