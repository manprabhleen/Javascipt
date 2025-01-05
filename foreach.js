const array=['one', 'two', 'three', 'four', 'five']
array.forEach( function(item){
    console.log(item);
})
// callback function has no name and uses items of array as parameter
//iterates over the array

array.forEach( (item, index, arr)=>{
    console.log(item, index, arr);
} )



//used for fetching data from databases

const myCoding=[
    {
        languageName: 'Javascript',
        languageFile: 'js'
    },
    {
        languageName: 'C++',
        languageFile: 'cpp'
    },
    {
        languageName: 'Python',
        languageFile: 'py'
    }
]

myCoding.forEach( (item)=>{
    console.log(item);
} )
myCoding.forEach( (item)=>{
    console.log(item.languageName);
} )


//for each does not retrun any value