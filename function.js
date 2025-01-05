// function greeting(){
//     console.log("Hello")
// }
// greeting //function reference
// greeting() //function execution
// function add(n1, n2){
//     console.log(n1+n2)
// }
// add(1,2)
// add(2,"3")
// add(4,"a")
// add(1,null)
// const result=add(1,2)
// console.log(result)

function add(n1, n2){
    return n1+n2
}
const r=add(2,3)
console.log(r)

function login(username){
    return `${username} just logged in`
}
console.log(login("Manprabhleen"))

//...rest operator
function a(number){
    return number
}
console.log(a(9))
console.log(a(1,2,3))

function b(...n){
    return n
}
console.log(1,2,3)
//if spread operator(...) not used only 1 will be printed but the rest operator creates an array of all the values and prints mulitple values