//Task 1- when given a letter- return its position in the alphabet

function returnLetterPosition(letter){
    const abc= "abcdefghijklmnopqrstuvwxyz";
    return "Position of letter:" + abc.indexOf(letter)+1 
}
console.log(returnLetterPosition("c"));

//Task#2 - reverse a string
function reverseStr(str){
    return str.split(" ").reverse().join("");
}
console.log(reverseStr("cloud"));
/**my steps
 * 1. convert a String into array with split()
 * 2.use reverse method
 * 3. convert array back into String with jpin()
 */

//Task #4 animal body's last letter shd be same as the tail's 1st letter
function correctTail(body, tail){
    let substr = body.substr(body.length - tail.length)
    return substr==tail;
}
console.log(correctTail("bird", "d"));

//Task#5 Sheep and Wolves Problem
// function warnTheSheep(queue) {
// let newArr = queue.reverse();
//   if(newArr[0]=="wolf"){
//     return "Pls go away and stop eating my sheep"
//   }
//   else{
//     positionSheep = newArr.indexOf("wolf");
//     return `Oi! Sheep number ${positionSheep}! You are about to be eaten by a wolf!`
    
//   }
// }
// console.log(warnTheSheep("wolf"));

// split

let stringToArr= "The weather is so warm and nice today".split(' ');
console.log(stringToArr);

for(let i=0; i < stringToArr.length; i++){
  //console.log("i is: " + stringToArr[i]);
  for (let j=0; j<stringToArr[i].length; j++){
    if(stringToArr[i][j]==='w'){
      console.log("Result is " +stringToArr[i]);
    }
  }
}

//6. Find total number of unicode values of 1st letter of all names
const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let sum = 0;
let names = ["Anne", "E", "Lucy", "Will"];
for(let i=0; i<names.length; i++){
  let firstLetterIndex = alphabet.indexOf(names[i][0]+1);
  position = firstLetterIndex+41;
  sum=sum+position;
  console.log(sum);
}

//7. When provided with a letter- return its position in the alphabet
function positionLetter(letter){
const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
return "Index is: " + alphabet.indexOf(letter)+1};
console.log(positionLetter("K"));//101

//8. Reverse a string - steps:
//1.convert a str into array with split
//2. use reverse
//3. convert array back into string
function reverseStr(str){
  return str.split("").reverse().join(" ");
}

console.log(reverseStr("Iroda"));

//9. Check if last letter of body is same as the 1st letter of tail
function correctTail(body, tail){
  let sub = body.sub(body.length-tail.length)
  return sub == tail;
}
correctTail("k", "k");