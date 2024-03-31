// Task 1 - add up the values of 2 arrays

let arr6 = [2,3,4];
let arr7 = [9,7,5];
let sumArr = 0;
for(let i=0; i<arr6.length; i++){
    sumArr +=arr6[i]+arr7[i];}
console.log(sumArr);
//return sumArr;

// Task 2 - a fn that takes a number and revereses it where n>0
const reverseInt = n=>{
    let arr = [];
    for(let i =n; i > 0; i--){
        //add i to the new array
    arr.push(i);
     console.log(arr);
    }
    return arr;
}
console.log(reverseInt(5));

/*
  console.log(loveTernary(9,3)); // returns false

//Task #5 Fn - accepts string and char and counts how many occurances a char has in the string
function countCharOccur(string, char){
    let counter =0;
    for(let i=0; i<string.length; i++){
        if(string[i]===char){
            counter ++;
            
        }
       
    }
 return counter;
}

console.log(countCharOccur("Hello", "l"));

// //or use split
// let countChar= (str, letter)=>{
// str.split('').filter(el) => (el===letter).length;
*/
//3. Convert nested array into regular array
const arr = [[1,2],[3,4],[5,6],[7,8]];
let result = [];
// result =arr.flat();
// console.log(result);

//3.2 - same as above but with for loop
for(let i=0; i<arr.length;i++){
    for(let j=0; j<arr[i].length;j++){
        result.push(arr[i][j])
    }
}
console.log(result); //
/*[
    1, 2, 3, 4,
    5, 6, 7, 8
  ]*/

  //4. Find total # of Unicode values of string chars

  let alphabet ="abcdefghijklmnopqrstuvwxyz";
  let sum=0;
  let names = ["Ammy", "Tommy", "Garry", "Sam"];
  for(let i=0; i<names.length; i++){
    let firstLetterIndex = alphabet.indexOf(names[i][0]+1);
    let position=firstLetterIndex+41;
    sum= sum+position;}
    console.log(sum);// 160

    //5. when provided with a letter- return its position in the alphabet
    function position(letter){
        let alphabet ="abcdefghijklmnopqrstuvwxyz";
        return "Index is " + alphabet.indexOf(letter)+1;}

        console.log(position(12));
    
//6. Reverse a String with a function:
function reverseStr(str){
    return str.split(" ").reverse().join(" ");
}
console.log(reverseInt);

//7. Sheep wolf problem
 function warnSheep(queue){
    let newArr = queue.reverse();
    if(newArr[0]=='wolf'){
        return " Watch out for wolf"
    }
    else{
        return positionSheep = newArray.indexOf("wolf");
        
    }}
    console.log(warnSheep(5));

//8. Bonus
function bonus(salary, bonus){
    if(bonus ===true){
        salary= salary*10;
    }
}

// 9. calculate odd indices
const nums = [1,3,4,5,7,8,9];
let sum3 =0;
console.log(`numbers lenth = " ${nums.length}`); //7

// 10.
for(let i=0; i<nums.length; i++){
    console.log(`Iterator is ${i}`);
    if(i%2 !==0){ // if the number is even
        sum+=nums[i]; // add up the numbers
        console.log(`Now sum is: ' ${sum}`);   
    }
    else{
        console.log(false);
    }
} 

