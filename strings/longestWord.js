function findLongestWordLength(str) {
    let longestLength = 0;
    let longestWord = "";
    //here I separated the sentence using split 
    let arrWords = str.split(' ');

    for (let i = 0; i < arrWords.length; i++) {
        if (arrWords[i].length > longestLength) {
            longestLength = arrWords[i].length;
            longestWord=arrWords[i];
        }
    }


   return console.log(longestWord+" "+longestLength);
  
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");