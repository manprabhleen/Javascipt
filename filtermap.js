const numbers=[1,2,3,4,5,6,7,8,9]
//not to use curly braces when using filter if you dont use return
//but if want to use curly braces use return keyword
const values=numbers.filter( (num)=>num>4)
console.log(values)
const newnum=[]

//using for each by putting if condition
numbers.forEach( (num)=>{
    if (num>4){
        newnum.push(num)
    }
} )
console.log(newnum);

