/*block: {} (this is a block)  it is also called compound statement. it combines multiple js statements into a group

if(true) 
    {
        var a = 2;
        console.log(a);
    }  */
    
// we group multiple statements in a block so that we can use it where js expects single statement

//block scope: which variables and fns. can be accessed inside the block; it is also lexical scope

var a = 20;
let b = 30;
const c = 40;
{
    var a = 2;
    let b = 3;
    const c = 4;
    console.log(a);
    console.log(b);
    console.log(c);
}
console.log(a);
console.log(b);
console.log(c);

//let and const are block scoped

/*shadowing: the variable inside a block shadows the var declared outside  the block           var a = 40 print nhi hoga
                let b= 3 print nhi hoga bcoz woh program usko(let b = 30;) alag memory scope me lega and in this bahar vala let will shadow the andar vale let ki value

illegal shadowing: let cannot be shadowed by using var but vice versa will not throw error 
*/ 