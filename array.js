const a=[1,2,3,4,5]
console.log(a)
a.push(10)
a.push(20)
a.push(30)
a.pop()
console.log(a)
a.unshift(90)
console.log(a)  
console.log(a.includes(4))
console.log(a.indexOf(1))
const newarray= a.join()
console.log(newarray)
console.log(a.slice(1,4))//doent include the end value and does not make any changes in the original array
console.log(a)
console.log(a.splice(1,4))//inlcudes both the values and makes chamges in the original array
console.log(a)
