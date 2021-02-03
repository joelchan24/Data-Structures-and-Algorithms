let text="joel12oe";

let listHash={};

for(let i=0;i<text.length;i++){
    let letter=text[i];
    if(listHash[letter]){
        listHash[letter]=listHash[letter]+1;
    }else{
        listHash[letter]=1;
    }
}
console.log(listHash);





//this is what im the result that im expected result
//j=1,e=2,o=2