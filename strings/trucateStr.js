Truncate a String
/* Truncate a string (first argument) if it is longer than 
the given maximum string length (second argument). Return 
the truncated string with a ... ending


truncateString("A-tisket a-tasket
 A green and yellow basket", 8) should return "A-tisket...".

 truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length)
  should return "A-tisket a-tasket A green and yellow basket".
*/
function truncateString(str, num) {
    let dots="...";
    if(str.length>num){
      str=str.slice(0,num)+dots;
    }
    return console.log( str);
  }
  
  truncateString("A-tisket a-tasket A green and yellow basket", 8);