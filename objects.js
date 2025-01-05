//object literals 
const mySym= Symbol("a")
const myObject={
    name:"Manprabhleen",
    age:18,
    college:"NITJ",
    isLoggedIn:true,
    email:"kmanprabhleen@nitj.ac.in",
    lastLoginDays:['Monaday','Saturday'],
    [mySym]:"b"
}
console.log(myObject.name)
console.log(myObject.age)
console.log(myObject.email)
console.log(myObject["email"])
console.log(typeof(myObject.mySym))
console.log(typeof(myObject[mySym]))
console.log(mySym)
//Object.freeze(myObject)
myObject.email="prabhleen90@nitj.ac.in"
console.log(myObject.email)
console.log(myObject)
myObject.greeting=function(){
    console.log(`hello world, I am ${this.name}`)
}
console.log(myObject.greeting())
 