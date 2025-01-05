"use strict" //treat all JS code as newer version (including classes, objects etc.)
//PRIMITIVE DATATYPES
// Number
// String
// BigInt
// null
// undefined
// Symbol
// Boolean
//REFERENCE DATATYPES(NON PRIMITIVE)
// Array
// Function
// Objects
let score="33abc"
console.log(typeof(score))
let convertToNumber= Number(score);
console.log(convertToNumber)
console.log(typeof(convertToNumber))
let id=Symbol("123")
let id2=Symbol("123")
console.log(id===id2)
//NaN -> not a number
const fruits=["apple", "mango", "grapes", "melon"]
let myObject={
    name:"Manprabhleen",
    age:18,
    college:"NITJ",
}
const myFunction=function(){
    console.log("Hello world");
}
console.log(typeof(myObject))
console.log(typeof(myFunction))
console.log(typeof(fruits))

let name="RAHUL"
let name2=name
name2="Rakshit"
console.log(name)
console.log(name2)

