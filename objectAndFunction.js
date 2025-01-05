const user={
    name:"Manprabhleen",
    age:18,
    college:"NITJ"
}
function handleObject(anyUser){
    console.log(`hello, my name is ${anyUser.name} and my age is ${anyUser.age}`)
}
handleObject(user)

const array=[1,2,3,4,5]
function returnSecondValue(anyArray){
    return array[1]
}
console.log(returnSecondValue(array))