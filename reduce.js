const array=[1,2,3,4,5]

const total=array.reduce(function (acc, currval){
    console.log(`acc: ${acc} and current value: ${currval}`)
    return acc+currval
},0 )
//0 signifies the value of accumulator
console.log(total);

const myTotal= array.reduce( (acc,curr)=>acc+curr, 0 )
console.log(myTotal)

const cart=[
    {
        name: 'python course',
        price: 200
    },
    {
        name: 'c++ course',
        price: 750
    },
    {
        name: 'data science course',
        price: 390
    },
    {
        name: ' AI course',
        price: 600
    },
    {
        name: 'Machine learning course',
        price: 290
    }
]
const totalprice= cart.reduce( (acc,item) =>acc+item.price,0 )
console.log(totalprice)