const fruits=["apple", "mango", "banana"]
for(const i of fruits){
    console.log(i);
}
const greeting="HELLO"
for(const greet of greeting){
    console.log(`Each charecter is ${greet}`)
}
//maps
//object that holds key value pairs
//holds no duplicate vlaues only unique values
const map= new Map()
map.set('IN', "india")
map.set('USA', "united states")
map.set('FR', "france")
// console.log(map)
for(const [key, value] of map){
    console.log(key, ':-', value);
}
const myObject={
    'sub1':'maths',
    'sub2':'english',
    'sub3':'chemistry'
}
//objects cant be iterated by for of loop
for(const [key, value] of myObject){
    console.log(key, 'is ->', value);
}
