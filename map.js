const array=[1,2,3,4,5,6,7,8,9]
const newarray= array.map((i)=>i+10 );
console.log(newarray)

const values= array.map( (num)=>num*10 ).map( (num)=>num+1 ).filter( (num)=>num>=40 );
console.log(values);