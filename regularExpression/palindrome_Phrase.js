// /patron/bandera
let regEx=/[\W]/ig


let IsPalindrome=(str)=>{

    str=str.toLowerCase().replace(regEx,'');
   let strReverse=str.split('').reverse().join('');
    // console.log(str);
    // console.log(strReverse);
    return console.log(str===strReverse);
};

IsPalindrome('Race fast, safe car!');

