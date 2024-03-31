// #1 task- write a fn to conver array to strings
let colors= ["blue", "red", "yellow"];

function arrToString(array){
    return array.toString();
}

console.log(arrToString(colors));

//#2 at method with a fn returning an el-nt at index- use 
//at()
let letters = ["a", "b", "c", "d", "e"];
console.log(letters.at(2));

function getElementatIndex(array, index){
    return array.at(index);
}
//starts counting from the end
console.log(getElementatIndex(letters, -3));

//#3 use join
let words =["say","like", "put", "keep", "cook"];
// console.log(words.join(" | "));

function arrayJoin(array){
    return array.join(" | ");
}
console.log(arrayJoin(words));;

//#4 pop array elements with a fn
let items = ["scarf", "hat", "sock", "glove"];
console.log(items.pop());

//fn that deletes the last array element and return it back to me
function getSubarray(array){
    let elementDeleted = array.pop();
    return {array, elementDeleted};
}
console.log(getSubarray(items));
console.log(items);

//#5 push - returns length of the array
let fruit = ["apple", "pear", "mango"];
console.log(fruit.push("pineapple"));


function addNewItem(array, newItem){
    return array.push(newItem);

}

console.log("New array: "+ addNewItem(fruit, "plum"));
console.log(fruit);

//#6 shift - removes 1st element
let names = ["Ann", "Mark", "Tonny", "Peeter"];
console.log(names.shift());

function removeFirstElement(array){
    return array.shift();
}
console.log("Shift: "+ removeFirstElement(names));

// #7 unshift()- add an item to begining of array
let cities = ["London", "Milan", "Tokyo", "Paris"];
//returns the length of the new array- 5
console.log("Unshifted "+ cities.unshift("SF"));
console.log("New cities array:"+ cities);

function addItemToBeginning(array, newElem){
     array.unshift(newElem);
     return array;

     }

   console.log(addItemToBeginning(cities,"MV")); 

   //#8 f-n to remove an index of array
   const arr2= [2,3,4,5,67,70];
   function removeItemByIndex(array, index){
    return delete array[index];
   }
   //deletes 4

   console.log(removeItemByIndex(arr2,2));
   console.log(arr2);

//#9 f-n that deletes array - we shd use a for loop- <returns 6 empty items>
function clearArray(array){
    for(let i=0; i<array.length; i++){
        delete array[i];
    }
   return delete array;
} 
console.log( clearArray(arr2));

console.log(arr2);


//#9 use copyWithin method
let numb1= [2,3,4,5,6,7];
console.log(numb1.copyWithin(2,3,5));

function copyWithinEx(array, target, start, end){
    return array.copyWithin(target,start, end);
}
console.log(copyWithinEx(arr2,3,4,5));
