function reveresedNum(num){
    let array=[];
    for(let i=num; i>0; i--){
        array.push(i);
        console.log(array);
    }
    return array;
}

console.log(reveresedNum(8));


//#2 stars
for(let i=0; i<5; i++){
    for(let j=1; j<i; j++){
        
    console.log("*"+ " ");
}
console.log("<br>");}
