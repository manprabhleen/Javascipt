let fruits=['apple','mango', 'grapes', 'banana']
let vegies=['potato', 'tomato']
fruits.push(vegies)
// console.log(fruits)
// const newarray=fruits.concat(vegies)
// console.log(newarray)
// const a=[...fruits,...vegies]
// console.log(a)
const b=[1,2,3,[4,5,6],7,[1,2,[9,0]]]
const c=b.flat(Infinity)
console.log(c)
console.log(Array.from("Manprabhleen"))
console.log(Array.from({name:"Manprabhleen"}))//need to specify whether to form array of the keys or values
const x=10
const y=20
const z=30
console.log(Array.of(x,y,z))