const a = [1,2,3,4,56]



const b=a.map((number,index,array)=>{
    if(a.length === index+1)return number*array[0]
    return number*array[index+1]
})
s
console.log(b)