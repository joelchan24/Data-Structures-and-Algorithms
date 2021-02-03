function sumAll(arr) {
     // Figure out the minimum and maximum numbers in the array
   /*  arr.sort((a,b)=>{
        return a-b;
    })   */
   
    let num1=Math.min(...arr);
    let num2=Math.max(...arr);
    console.log(num1);
    console.log(num2); 
    // loop and add all numbers from lowest to highest value
    let sumAll=0;
    for(let i=num1;i<=num2;i++){
      
        sumAll+=i;
    }
    // return the sum
    return console.log( sumAll);
  }
  
  sumAll([1, 4]);