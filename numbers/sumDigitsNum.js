//create a function that adds the digits of a number


function addsDigits(numData){
let num=numData;
let sum=0;
//create a loop while to check if a num still have a value 
while(num){
    //129 ---> 9 || 12 ---> 2 || 1 ----> false = and finish the while
    sum=sum+num%10;
    //La siguiente función devuelve el valor entero redondeado más bajo de la variable 
    //Si se pasa 45.95 a getFloor, éste devuelve 45
    num=Math.floor( num/10);
}
console.log(sum);
}

addsDigits(459);
addsDigits(4589);