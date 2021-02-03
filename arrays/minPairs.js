let arr=[3, 5, 6, 2];




function minpairs(arr){

    arr.sort((a,b)=>{
        return a-b;
    });
    let sum=arr[0]+arr[1];
return sum;

}


console.log(minpairs(arr));