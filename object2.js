const user1= new Object()//singleton
console.log(user1)
const user2={}//non singleton
console.log(user2)
const user3={
    email:"abc@google.com",
    fullname:{
        userfullname:{
            firstname:"Manprabhleen",
            lastname:"Kaur"
        }
    }
}
user1.age=18
user1.email="manprabhleenk.it.23@nitj.ac.in"
console.log(user3.fullname.userfullname.firstname)
const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"c"}
const obj3= Object.assign({}, obj1, obj2)
//Object.assign(target,source)
console.log(obj3)
//or to combine two objects or arrays we use the spread operator(...)
const obj4={...obj1,...obj2}
console.log(obj4)
console.log(Object.keys(obj4))
console.log(Object.values(obj4))
console.log(Object.entries(obj4))
