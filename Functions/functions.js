
// 1. calculate square of circle
function getCircle(){
    let radius = 12;
    return 2*Math.PI*radius**2;
}
console.log(getCircle(5));

//2. self invoking function
(function (){
    let anonFunction = "I am anonym function";
    console.log(anonFunction);
})();


//3. fn with recursion
function squareItUp(startingNum){
    let sq= startingNum*startingNum;
    if(sq>100000){
        console.log(sq);
    }
    else{
        squareItUp(sq);
    }
}
console.log(squareItUp(6));

//4. 
function sqItUp(stNum){
    if(typeof stNum !='number'||(stNum<=1)){
        return -1;
        }
    }
console.log(sqItUp("opop")); //-1

 // 5. flowers odd / even
 function loveNot(fl1, fl2){
    if(fl1+fl2 %2===0){ // if sum of fl1 and fl2 is even- return false, if odd- return true
        return false
    }
    return true;
 }
 console.log(loveNot(4,5));
// ternary version //if (fl1  + fl2 %2 === 0) ? true :false;


//6. fn to count how many occurances of string count
function countCharOccur(string, char){
    let counter = 0;
    for(let i =0; i<string.length; i++){
        if(string[i] === char){
            counter++;
        }
    }
    return counter
}

console.log(countCharOccur("jump uuuuup", 'u'));// 6

// using filter function:
//return string.split(" ").filter(el)=>el===letter).length;

//7. Check if letters uppercase or not
function isUpperCase(str){
    if(str.toUpperCase()===str){
        return true;
    }
    return false;
} 
console.log(isUpperCase("LOBBY"));

