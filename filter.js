const books=[
    {title: 'b1', genre:'history', publish:'1999'},
    {title: 'b2', genre:'fiction', publish:'1983'},
    {title: 'b3', genre:'motivation', publish:'2018'},
    {title: 'b4', genre:'history', publish:'1956'},
    {title: 'b5', genre:'novel', publish:'1978'},
    {title: 'b6', genre:'science', publish:'1999'},
    {title: 'b7', genre:'history', publish:'2013'},
    {title: 'b8', genre:'fiction', publish:'2017'}
]
let result=books.filter( (book)=>book.genre==='history' )
console.log(result)
result=books.filter( (book)=>{
    return book.genre==='history' && book.publish>='2000'} )
console.log(result)