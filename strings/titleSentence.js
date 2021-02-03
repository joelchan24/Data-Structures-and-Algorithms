function titleCase(str) {
    
    let arrStr=str.toLowerCase().split(" ");
    for(let i=0;i<arrStr.length;i++){
        arrStr[i]=arrStr[i].charAt(0).toUpperCase()+arrStr[i].slice(1);
    }
    console.log(arrStr);
    str=arrStr.join(" ");
    return console.log( str);
  }
  
  titleCase("I'm a little tea pot");
  //I'm A Little Tea Pot