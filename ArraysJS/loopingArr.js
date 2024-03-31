/*All ways to loop through arrays, each with its own advantages depending on the specific use case. Here are the common methods:
*/

//1. For Loop:
const arrayL = [1, 2, 3, 4, 5];
for (let i = 0; i < array.length; i++) {
    console.log(arrayL[i]);
}

//2. For...of Loop:
const arrayL1 = [1, 2, 3, 4, 5];
for (const element of array) {// no index used, access the arr el-nt directly
    console.log(element);
}

//3. forEach() Method:
const arrayL2 = [1, 2, 3, 4, 5];
array.forEach(element => {
    console.log(element);
});

//4. map() Method (Returns a new array):
const arrayL3 = [1, 2, 3, 4, 5];
const newArray = arrayL3.map(element => {
    return element * 6;
});
console.log(newArray); // Output: [2, 4, 6, 8, 10]

//5. filter() Method (Returns a new array):
const arrayL4 = [1, 2, 3, 4, 5];
const filteredArray = arrayL4.filter(element => {
    return element % 2 === 0;
});
console.log(filteredArray); // Output: [2, 4]

//6. reduce() Method:
const arrayL5 = [1, 2, 3, 4, 5];
const sum = arrayL5.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0);
console.log(sum); // Output: 15

/*forEach() - for simply iterating over each element, 
map() and filter()- for transforming/ filtering array elements
reduce() is versatile and can be used for tasks such as summing values or aggregating data. "*/