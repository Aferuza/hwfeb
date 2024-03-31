//#1 Swap the values of x and y with creating 3rd value
let x = 3;
let y= 9;
let z = x; // z took the value of x
x=y; // x took the value of y
y=z;// y takes the value of x, which is temp-ly assined to z

console.log(x);
//(ES2015) - use"destructuring". You don't need a function:
let a = 1;
let b = 2;

// swap!
[b, a] = [a, b];
console.log(a);

//1. Using a Temporary Variable:
let temp = x;
x = y;
y = temp;

//2.Using Array Destructuring:
[x, y] = [y, x];

//3.Using Arithmetic Operations:
x = x + y; // value of y is now stored in x, y is empty
y = x - y; // from x subtract y and assign the result to y so x is left assigned to y
x = x - y; // 

//4. Using Bitwise XOR Operator:
x = x ^ y;
y = x ^ y;
x = x ^ y;

//5.Using ES6 Destructuring with Functions:
function swapValues(a, b) {
  return [b, a];
}
/*
The JavaScript code provided initializes two variables, i and n, both set to 0. Then, it enters a while loop that continues until i is less than 5.

During each iteration of the loop:

i is incremented by 1 (i++).
If i equals 3, the continue statement is executed, which skips the rest of the loop's code block and moves to the next iteration.
Otherwise, the value of i is added to the variable n.
The current value of n is logged to the console.
Let's break down what happens during each iteration of the loop:

i is initially 0. It gets incremented to 1. Since i is not equal to 3, n becomes 1, and 1 is logged to the console.
i is incremented to 2. Since i is not equal to 3, n becomes 3 (previous value of n (1) + current value of i (2)), and 3 is logged to the console.
i is incremented to 3. At this point, i is equal to 3, so the continue statement is executed, and the loop skips to the next iteration without updating n or logging anything to the console.
i is incremented to 4. Since i is not equal to 3, n becomes 7 (previous value of n (3) + current value of i (4)), and 7 is logged to the console.
i is incremented to 5. Since i is now equal to 5, the loop exits without further execution.
Therefore, the output of the code will be:

1
3
7


 */