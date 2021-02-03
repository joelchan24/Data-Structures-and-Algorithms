function palindrome(str) {
    //regular function
    // let regEX =/searchPattern/flags
    let regEx=/[\W_]/ig
    str=str.toLowerCase().replace(regEx,'');
    let reverseStr=str.split('').reverse().join('');

    return console.log( str===reverseStr);
  }
  
  
  
  palindrome("eye");
  palindrome("_eye");
  palindrome("_eye!");
  palindrome("race car");
  palindrome("not a palindrome");
  palindrome("My age is 0, 0 si ega ym.");
  palindrome("0_0 (: /-\ :) 0-0");
  palindrome("five|\_/|four");
  palindrome("Race fast, safe car!");