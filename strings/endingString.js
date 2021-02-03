//this is using endsWith
/* function confirmEnding(str, target) {
    return console.log( str.endsWith(target));
  } */
  function confirmEnding(str, target) {
      console.log(str.slice(str.length-target.length));
      return console.log( str.slice(str.length-target.length)===target);

  }
  confirmEnding("Bastian", "n");