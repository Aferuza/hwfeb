//1. Define a nested array
const nestedArray = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  
  // 2. Accessing elements in a nested array
  console.log("Accessing elements:");
  console.log(nestedArray[0][0]); // Output: 1
  console.log(nestedArray[1][2]); // Output: 6
  console.log(nestedArray[2][1]); // Output: 8
  
  // 2. Iterating over a nested array
  console.log("\nIterating over elements:");
  nestedArray.forEach(row => {row.forEach(element => {
      console.log(element);
    });
  });
  
  // 3. Flattening a nested array
  console.log("\nFlattened array:");
  const flattenedArray = nestedArray.flat();
  console.log(flattenedArray); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]
  

  //4. Summing all elements in a nested array
  console.log("\nSum of all elements:");
  const sum = nestedArray.flat().reduce((acc, curr) => acc + curr, 0);
  console.log(sum); // Output: 45
 

// Feruza's examples:
  const nestedArray1 = [
    [1, "http", 3, "address"],//0
    ["json", 5, 6],//1
    [7, "api", 9]//2
  ];

  //access el-nts:
  console.log(nestedArray1[0][1]);
  console.log(nestedArray1[2][2]);
  console.log(nestedArray1[0][1]);

  //iterate over nested array
  nestedArray1.forEach(row => {
    row.forEach(element => {
    console.log(element);
  });
});
// flatten
console.log("Flat array nested: " +nestedArray1.flat()); 

//sum all elnts
let sum1= nestedArray1.flat().reduce((accimulator, currElem)=>
accimulator + currElem, 0);
console.log("n arr sum is: " +sum1);