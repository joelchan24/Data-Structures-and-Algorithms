let targetSumExistsInTwoNumbers=(arr,tarjet)=>{
    let combinations=[];
   // console.log(tarjet);
    for(let i=0;i<arr.length;i++){
        for(let j=i;j<arr.length;j++){
            let sum=arr[i]+arr[j];
            if(sum===tarjet){
                combinations.push([arr[i],arr[j]]);
            }
        }
    }

    console.log(combinations);
}

targetSumExistsInTwoNumbers([10, 2, 4, -9, 6, -1], 1);
targetSumExistsInTwoNumbers([10, 20], 20)
targetSumExistsInTwoNumbers([10, 20], 35)
targetSumExistsInTwoNumbers([2, 7, 11, 15], 9)