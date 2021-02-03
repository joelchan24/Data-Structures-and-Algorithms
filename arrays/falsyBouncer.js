function bouncer(arr) {
    
    return arr.filter((val)=>{
        return Boolean(val)===true
    });
  }
  
 console.log( bouncer([7, "ate", "", false, 9]));