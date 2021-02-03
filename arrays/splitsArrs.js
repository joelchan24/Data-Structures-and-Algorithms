function chunkArrayInGroups(arr, size) {
  
    let group=[];
    while(arr.length>0){
       // console.log(arr);
        group.push(arr.splice(0,size));
    }
   
    return console.log(group)
  }
  
  chunkArrayInGroups(["a", "b", "c", "d"], 2);
  chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3);
  chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2)