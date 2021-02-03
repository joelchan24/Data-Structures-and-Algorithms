let arr=[10,2,3,50,500,1];
//comparate to get a good result
arr.sort((a,b)=>{
    return a-b;
})

console.log(arr);
arr.sort((a,b)=>{
    return b-a;
})

console.log(arr);