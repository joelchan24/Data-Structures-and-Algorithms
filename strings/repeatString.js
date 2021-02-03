//Repeat a String Repeat a String
//repeatStringNumTimes("abc", 3) should return "abcabcabc".
function repeatStringNumTimes(str, num) {  
    let strFinally="";
    for(let i=0;i<num;i++){
        strFinally=strFinally+str;
    }
    return console.log( strFinally);
  }
  
  repeatStringNumTimes("abc", 3);
  repeatStringNumTimes("*", 3);