//IIFE  immediately invoked function expressions
(function greeting(){
    console.log("Hello world")
})();
//; necessay for IIFE
//()()//the second bracket executes the function and parameters are passed in it
//used to prevent from the pollution of global scope variables 
//using arrow function
( ()=>{
    console.log("hello")
})()
( (name)=>{
    console.log(`hello ${name}`)
})("Manprabhleen")
//named IIFE
( function x(name){
    console.log(`hello ${name}`)
})("Manprabhleen")

