//give a list of integers, find out two numbers that have the minumun difference
let arr=[1, 19, -4, 31, 38, 25, 100];

let minimun=Number.MAX_SAFE_INTEGER;

let n=arr.length;
for(let i=0;i<n-1;i++){
    for(let j=i+1;j<n;j++){
        let mindiff=Math.abs(  arr[i]-arr[j]);
        if(mindiff<minimun){
            minimun=mindiff;
        }
    }

}

console.log(minimun);
