function largestOfFour(arr) {
    let arrLargestNums=[];
    for(let i=0;i<arr.length;i++){
        let subArray=arr[i];
        let maxInteger=Number.MIN_SAFE_INTEGER;
        for(let j=0;j<subArray.length;j++){
           if(subArray[j]>maxInteger){
               maxInteger=subArray[j];
           }
        }
        arrLargestNums.push(maxInteger);

    }
    return console.log( arrLargestNums);
  }
  
  largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);