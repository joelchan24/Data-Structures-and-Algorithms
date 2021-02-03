let targetSumExistsInTwoNumbers=(arr,tarjet)=>{
    //here I used hash table
    let numObjects={};
    let pairs=[];
    for(let i=0;i<arr.length;i++){
        let num=   arr[i];

        numObjects[num]=i;        
    }
   
    //console.log(numObjects);
    //{'property':value}
    //{ '2': 1, '4': 2, '6': 4, '10': 0, '-9': 3, '-1': 5 }
    //2, 7, 11, 15     9
    for(let i=0;i<arr.length;i++){
        let diff=tarjet-arr[i];
        
       
       //console.log(numObjects[diff]);
        if(numObjects.hasOwnProperty(diff)){
            //delete property in the object to avoid combinations backwards 
            delete numObjects[arr[i]]       
            
            pairs.push([arr[i],diff])
        }

    }

    console.log(pairs);
}

 targetSumExistsInTwoNumbers([10, 2, 4, -9, 6, -1], 1);
 targetSumExistsInTwoNumbers([10, 20,1], 20)
targetSumExistsInTwoNumbers([10, 20], 35)
targetSumExistsInTwoNumbers([2, 7, 11, 15], 9);

