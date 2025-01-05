const myObject={
    js:'javascript',
    cpp:'c++',
    rb:'ruby',
    swift:'swift by apple'
}
//prints keys
for(const key in myObject){
    console.log(key)
}
//prints values
for(const key in myObject){
    console.log(`${key} shortcut is used for ${myObject[key]}`);
}
//for in loop, array ki keys print krta hai mtlb indexing
//for of loop, array ki values print krta hai
const fruits=["apple", "banana","guava", "mango"]
for(const i in fruits){
    console.log(i);
}
for(const i in fruits){
    console.log(`The key is ${i} and the value is ${fruits[i]}`);
}


//map is not iteratable through for in loop but can be by for of loop
const map= new Map()
map.set('IN', "india")
map.set('USA', "united states")
map.set('FR', "france")

for(const key in map){
    console.log(key)
}