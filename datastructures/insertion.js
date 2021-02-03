function sortData(arr){
let lengthArr=arr.length;
for(let i=0;i<arr.length;i++){
    let currentValue=arr[i];
    let positionBefore=i-1;
    while((positionBefore>-1)&&(currentValue<arr[positionBefore])){
        arr[positionBefore+1]=arr[positionBefore];
        positionBefore--;      
    }
    arr[positionBefore+1]=currentValue;
}
return arr;
}
let arrData=[1,20,3,5];
sortData(arrData);
console.log(arrData);