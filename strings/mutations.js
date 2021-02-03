function mutation(arr) {
    let word1=arr[0].toLowerCase().split('');
    let word2=arr[1].toLowerCase().split('');

    return word2.every(e=>word1.includes(e));    
   }
   
  console.log(  mutation(["hello", "hey"]));