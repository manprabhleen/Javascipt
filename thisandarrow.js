const user={
    name:"Manprabhleen",
    welcomemessage: function(){
        console.log(`${this.name}, Welcome to the website!`)
        console.log(this)
    }
}
user.welcomemessage()
user.name="sam"
user.welcomemessage()
console.log(this)
//the current object in browser is windows whereas here it is an empty object
function one(){
    let name="abc"
    console.log(this.name)
}
one()
//this can't be used in functions but in objects
const two=()=>{
    let name="xyz"
    console.log(this.name)
}
two()
//this can't be used in arrow function as well


// arrow function is     ()=>{}
//can be stored in a variable        
const add=(n1, n2)=>{
    return n1+n2
}
console.log(add(1,2))

//implicit return
const product= (a, b)=>(a*b)
console.log(product(2,3))
//if curly braces used return statement is necessary
//if not used no need of return statement for a single line of code
