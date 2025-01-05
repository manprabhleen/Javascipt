//falsee values
// null, undefined, 0 , -0, "", NaN, BigInt 0n
//truthy values
//"0", 'false', " ", [], {}, function(){}

const emptyobject={}
if(Object.keys(emptyobject).length===0){
    console.log("The object is empty")
}

//Nullish coalescing operator (??):  null undefined

val1= 10??20
val2= null??10
val3= undefined??20
console.log(val1)
console.log(val2)
console.log(val3)

// terniary operator 
// condition? true: false