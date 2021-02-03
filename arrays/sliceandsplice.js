//Slice and Splice
function frankenSplice(arr1, arr2, n) {
    //slice create copy of a part of array
    let arrCopy=arr1.slice();
    let arrCopy2=arr2.slice();
    for(let i=0;i<arrCopy.length;i++){
        arrCopy2.splice(n,0,arrCopy[i]);
        n++;
    }
    console.log(arrCopy2);
    return  arrCopy2;
  }
  
  frankenSplice([1, 2, 3], [4, 5, 6], 1);
  //[ 4, 1, 2, 3, 5, 6 ]