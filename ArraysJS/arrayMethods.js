//#1. typeof
let homeArray = [17, 'test', true, [4, 5], 'last'];
console.log(typeof(homeArray));

//#2. loop thru array elemts:
let arrayM = [34, 55, 6, 12, 964];
for(let i=0; i<homeArray.length; i++){
    //var valueOfArr=90;
    //console.log(`Array value is ${valueOfArr}`);
    console.log(homeArray[i]);
}
//#3. calculate sum of af array methods - when the index is even
let arr2= [1,2,3,6,2];
let sum = 0;
let mult =1;
for (let j=0; j<arr2.length; j++){
    if(j % 2 === 0){        //if the index is even, then sum them up
sum += arr2[j];
mult*=arr2[j];
}

//#4. loops thru array by adding numbers to each other
const arrF = [3,5,6,78];
let sumF =[];
for (let i=0; i<arrF.length; i++){
sumF= sumF+arrF[i];
}
console.log(sumF);

//5. if array element is even- sum them up
// let sumElem = 0;
// for(let y=0; y<arr2.length; y++){
//     if(arr2[y] % 2 === 0){
//         sumElem +=arr2[y];
//     }
// }
console.log(sumElem);

// 6. ex array:
let fruit= new Array(50,6,70,80);
//6. toString()
let arrToString = fruit.toString();
console.log(`Array to str: ${arrToString}`);

//7.at() returns elements of array at index; if -1- starts from the end, 
//if no param - takes 0th index by default;
let atMethod= fruit.at(-1);
let atMethod1= fruit.at();// 50
console.log(`At method is with no param: ${atMethod1}`);

//8. join()- converts array into String with deviders
let joinedArr = fruit.join("|");
console.log(`Joined array is: ${joinedArr}`)
// console.log(homeArray.join("*"));
// console.log(homeArray.pop());
// let newPushedArr= (homeArray.push("name"));
// console.log(homeArray);
// console.log(homeArray.shift());
// console.log(homeArray.unshift("lemon"));
// let concatArr=(homeArray.concat(fruit));
// console.log(concatArr);

//9. splice()
// homeArray.splice(3, 0, "cherry", "mango");
// console.log(homeArray);

//10. slice()

//11. sort
// let sortedArr= homeArray.sort();
// console.log(sortedArr);
// let toSorted= homeArray.toSorted();

//12. toSorted()
//console.log(toSorted);

//13. reverse()
// let reveresedArr= homeArray.reverse();
// console.log(`Here is the reversed array: ${reveresedArr}`);

//14. get highest array index
// console.log(homeArray.length-1);

//15. unshift()
// let unshiftedArray=homeArray.shift(1);
// console.log("Hey");
// console.log(unshiftedArray);
// console.log(homeArray);
/*

1. Array length:свойства 32-битное безнаковое целое число,- 
численно больше чем самый наибольший индекс в массиве.
*/
 let arrS =  [17, 'test', true, 'last'];
console.log(arr);
const newArr = [];
arr.length; 
let arrLength = arr.length;
console.log(`1. Метод - свойство array.length :  arrLength = ${arrLength} и  
original array is arr = ${arr}.`);

const arrNumbers = [1, 2, 3];
console.log("Длина массива [1, 2, 3] = " + arrNumbers.length + ";"); // Выведет 3
/*
Свойство length является целым числом с положительным знаком и значением, 
меньшим чем 2 в степени 32.
2 в 32 степени = 4 294 967 296. Если больше - будет ошибка RangeError: Invalid array length
*/
newArr.length = Math.pow(2, 32) - 1;  //устанавливает длину массива меньше 2 в 32 степени
console.log(`newArr.length = ${newArr.length}`);  //4294967295
/*
установить свойство length для обрезки массива. Когда вы расширяете массив, 
изменяя его свойство length, реальное количество элементов в массиве увеличивается; 
например, если вы установите свойство length в 3, когда оно равно 2, 
массив будет из 3 элементов, где значение третьего элемента будет равно undefined .
свойство length ничего не говорит о количестве определённых значений в массиве. 
*/
arrNumbers.length = 7;
console.log("Но сейчас Длина массива [1, 2, 3] = " + arrNumbers.length); // Выведет 7
console.log(` При длине массива = 7 arrNumbers[5] = ${arrNumbers[5]};`); //  undefined;

/*
2. Array toString(): Метод toString() возвращает строку, представляющую исходный массив и его элементы, разделенные запятыми. Пример использования: 
*/
console.log(`2. Метод array.toString :  `);

const arrToString1 = [1, 2, 3]; 

console.log(arrToString1.toString()); // Выведет "1,2,3"
console.log(typeof arrToString1.toString()); // Выведет string;
console.log(typeof arrToString1); // Выведет object;

3. /*Methods to return the index of array elements:
3.1 indexOf():
Returns 1st index at which a given element can be found in the array, 
or -1 if it is not present.
*/
const arrayI = [10, 20, 30, 40, 50];
console.log(arrayI.indexOf(30)); // Output: 2

//3.2 findIndex() Method:
//Returns the index of 1st element in the array that satisfies the provided 
//testing function. Otherwise, it returns -1.

const arrayI1 = [10, 20, 30, 40, 50];
const index = arrayI1.findIndex(element => element > 30);
console.log(index); // Output: 3

//3.3 lastIndexOf() Method:

//Returns the last index at which a given element can be found in the array, or -1 if it is not present. Searches the array from right to left.
const arrayI2 = [10, 20, 30, 40, 30];
console.log(arrayI2.lastIndexOf(30)); // Output: 4

//3.4 includes() Method:
//Determines whether an array includes a certain value among its elements, true or false.
const arrayI3 = [10, 20, 30, 40, 50];
console.log(arrayI3.includes(30)); // Output: true

//3.5 find() Method:
//Returns the value of 1st element in the provided array 
const arrayI4 = [10, 20, 30, 40, 50];
const element = arrayI4.find(element => element > 30);
console.log(arrayI4.indexOf(element)); // Output: 3

//3.6 at() method ECMAScript proposal for String.prototype.at()
// is not a built-in method for arrays - there is a String.prototype.at() method, 
//which is used to access the characters in a string at a specific index. 
// more reliable way to access characters in strings, Unicode characters.

const str = 'Hello';
console.log(str.at(0)); // Output: "H"
console.log(str.at(1)); // Output: "e"
console.log(str.at(2)); // Output: "l"
console.log(str.at(3)); // Output: "l"
console.log(str.at(4)); // Output: "o"

//3.7 Array at(-1) takes neg values  vs arr[-1]- which isnt possible. 

console.log(`3. Метод array.at() :  `);
const arrAt = [1, 2, 3]; 
atIndex = 1;
atIndexNegative = -1;
console.log(`Массив arrAt = ${arrAt} при положительном индексе at(${atIndex}) = ${arrAt.at(atIndex)}, а при отрицательном индексе at(${atIndexNegative}) = ${arrAt.at(atIndexNegative)};`); // Выведет 2 и 3
/*
//3.8 at - returns arr el at specific index- if not found- returns undefined.
Most used way = array[array.length - 1]. 
0r  at()= array.at(-1).
*/
console.log(`Массив arrAt = ${arrAt} может итерироваться через длину length - 
at(arrAt.length - ${atIndex}) = ${arrAt.at(arrAt.length - atIndex)},`); // 3;

//4 Function returns last el-nt of arr:
const cart = ["apple", "banana", "pear"];
function returnLast(arr) {
  return arr.at(-1);
}
//4.1 Get the last el of arr: 
const item1 = returnLast(cart);
console.log(item1); // Выведет: 'pear'

//4.2 To add el into cart:
cart.push("orange");
const item2 = returnLast(cart);
console.log(item2); // Выведет: 'orange'
console.log(returnLast(["apple", "banana", "pear", "orange"])); // Выведет: 'orange'
/*
5. Methods to convert an array into a string:
5.1 join() Method: Joins all elements of an array into a string.
*/
const arrayJ = ['apple', 'banana', 'orange'];
const stringJ = array.join(', ');
console.log(stringJ); // Output: "apple, banana, orange"

//5.2 toString() Method:
//Converts an array to String = concatenates all the elements separated by commas.
const arrayS = ['apple', 'banana', 'orange'];
const stringS = arrayS.toString();
console.log(stringS); // Output: "apple,banana,orange"

//5.3 Array.prototype.flat() + join() Method (for nested arrays):
//Flattens a nested array into a single-dimensional array and then joins its elements 
//into a string.
const nestedArray = [['apple', 'banana'], ['orange', 'grape']];
const stringS1 = nestedArray.flat().join(', ');
console.log(string); // Output: "apple, banana, orange, grape"

//5.4 JSON.stringify() Method:
const array = ['apple', 'banana', 'orange'];
const jsonString = JSON.stringify(array);
console.log(jsonString); // Output: '["apple","banana","orange"]'

//5.5. Array.prototype.reduce() Method:
//Reduces the array into a single string using a custom concatenation function.
const arrayR = ['apple', 'banana', 'orange'];
const string = arrayR.reduce((acc, curr) => acc + ', ' + curr);
console.log(stringR); // Output: "apple, banana, orange"

//eg. join():
const elements = ['Fire', 'Air', 'Water']; 
console.log(`4. Метод array.join() :  `);
console.log(elements.join());  // "Fire,Air,Water"
console.log(elements.join(''));// "FireAirWater"
console.log(elements.join(' | ')); // Выведет "Fire | Air | Water"
console.log(elements.join(', and ')); // Выведет: "Fire, and Air, and Water"

/*
Если arr.length == 0, то будет возвращена пустая строка.
 Элемент массива с типом undefined или null преобразуется в пустую строку.
/*

6. All Methods to delete elements from an array. 
6.1 splice() Method: Removes elements from an array and optionally inserts new elements in their place.

const array = ['apple', 'banana', 'orange', 'grape'];
array.splice(1, 2); // Removes 2 elements starting from index 1
console.log(array); // Output: ['apple', 'grape']

6.2. pop() Method: Removes the last element from an array and returns that element.
const array = ['apple', 'banana', 'orange', 'grape'];
const removedElement = array.pop();
console.log(removedElement); // Output: 'grape'
console.log(array); // Output: ['apple', 'banana', 'orange']

6.3. shift() Method- Removes the first element from an array and returns that element.
const array = ['apple', 'banana', 'orange', 'grape'];
const removedElement = array.shift();
console.log(removedElement); // Output: 'apple'
console.log(array); // Output: ['banana', 'orange', 'grape']

6.4. delete Operator: Deletes the specified element from an array but leaves an empty space in place of the deleted element. It does not affect the array length.
const array = ['apple', 'banana', 'orange', 'grape'];
delete array[1];
console.log(array); // Output: ['apple', empty, 'orange', 'grape']

6.5. filter() Method (Creates a new array without the deleted elements):
Creates a new array with all elements that pass the test implemented by the provided function.
const array = ['apple', 'banana', 'orange', 'grape'];
const newArray = array.filter(element => element !== 'banana');
console.log(newArray); // Output: ['apple', 'orange', 'grape']

eg. pop: */ 
console.log(`5. Метод array.pop() :  `);
const arrPop = [1, 2, 3]; 
console.log(arrPop.pop()); // Выведет 3;
console.log(arrPop);   // [ 1, 2 ];
/*
If pop() called on empty arr - undefined.
*/
console.log([].pop());   //  undefined
/*

7. Methods to add elements into an array:
7.1. push() Method:
Adds one or more elements to the end of an array and returns the new length of the array.

const array = ['apple', 'banana', 'orange'];
array.push('grape');
console.log(array); // Output: ['apple', 'banana', 'orange', 'grape']

7.2. unshift() Method:
Adds one or more elements to the beginning of an array and returns the new length of the array.
const array = ['apple', 'banana', 'orange'];
array.unshift('grape');
console.log(array); // Output: ['grape', 'apple', 'banana', 'orange']

7.3. splice() Method:
Adds or removes elements from an array at specified positions.
const array = ['apple', 'banana', 'orange'];
array.splice(1, 0, 'grape'); // Inserts 'grape' at index 1
console.log(array); // Output: ['apple', 'grape', 'banana', 'orange']

7.4. concat() Method:
Returns a new array comprised of the array on which it is called, joined with other arrays and/or values provided as arguments.
const array1 = ['apple', 'banana'];
const array2 = ['orange', 'grape'];
const newArray = array1.concat(array2);
console.log(newArray); // Output: ['apple', 'banana', 'orange', 'grape']

7.5. spread syntax (...):
Allows an iterable such as an array expression or string to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected.
const array1 = ['apple', 'banana'];
const array2 = ['orange', 'grape'];
const newArray = [...array1, ...array2];
console.log(newArray); // Output: ['apple', 'banana', 'orange', 'grape']
 
// eg. push:
Array push(): один или несколько элементов в конец массива и возвращает новую длину массива length. 
*/
console.log(`6. Метод array.push() :  `);
// const arr = [1, 2, 3]; 
console.log(arr.push(4)); // Выведет 4 и в конец массива добавит 4 [1, 2, 3, 4]-
//изменит массив
/*
7. Array shift(): удаляет первый элемент из массива и возвращает его значение. 
*/
console.log(`7. Метод array.shift() :  `);
// const arr = [1, 2, 3]; 
console.log(arr.shift()); // Выведет 1 и удалит нулевой элемент массива, изменит массив [2,3]
/*
8. Array unshift(): добавляет один или несколько элементов в начало массива и возвращает новую длину массива length. 
Пример использования: 
*/
console.log(`8. Метод array.unshift() :  `);
// const arr = [1, 2, 3]; 
console.log(arr.unshift(0)); // Выведет 4 и добавит 0 вначало массива. изменит массив [0,1,2,3]
/*
9. Array delete(): No method as Array.delete(). 
Оператор `delete` используется для удаления свойств объекта. В случае массива, 
он также может использоваться для удаления элемента из массива, 
но при этом оставляет индекс пустым,а не сокращает размер массива. 
Возвращает true, false .
*/
console.log(`9. Метод delete array[] :  `);
const fruits = ['apple', 'banana', 'orange'];
delete fruits[0];
console.log(fruits); // Выведет [ <1 empty item>, 'banana', 'orange' ]
/*
в результате в массиве появилось пустое значение. Однако, размер массива остается неизменным.
`delete` shd be avoided- use `splice()`, `pop()`, `shift()` или переназначение элемента на `undefined`, 
если вы хотите сохранить длину массива и избежать пустых значений.
/*
10. Array concat(): Метод concat объединяет два или более массивов и возвращает новый массив. Пример использования: 
*/
console.log(`10. Метод array.concat() :  `);
// const arr1 = [1, 2];
// const arrA = [3, 4];
// console.log(arr1.concat(arr2)); // Выведет [1, 2, 3, 4]
// console.log(arr1, arr2);
/*
11. Array copyWithin(): Метод copyWithin копирует часть массива внутри него самого, 
смещая и перезаписывая существующие элементы, и возвращает измененный массив. 
*/
console.log(`11. Метод array.copyWithin() :  `);
const arrWithin = [1, 2, 3, 4, 5];
console.log(arrWithin.copyWithin(0, 3)); // Выведет [4, 5, 3, 4, 5]
/*
arr.copyWithin(target, start[, end = this.length])
arr.copyWithin(*индекс - куда начать копировать*, *индекс - откуда начать копировать*, *индекс - 
    до куда копировать (или до конца, если не указан), не включая сам индекс*);
Если аргумент start является отрицательным, 
он трактуется как length+start где length — это длина массива. 
Если аргумент end является отрицательным, он трактуется как length+end.
*/
console.log([1, 2, 3, 4, 5].copyWithin(0, -2, -1)); // [4, 2, 3, 4, 5]

/*
12. eg. Array flat():*/
console.log(`12. Метод array.flat() :  `);
const arrFlat = [1, 2, [3, 4]];
console.log(arrFlat.flat()); // Выведет [1, 2, 3, 4]
/*
let newArray = arr.flat(depth = *На сколько уровней вложенности уменьшается мерность исходного массива. По умолчанию 1.*);
*/
const arrFlat1 = [1, 2, [3, 4]];
console.log(arrFlat1.flat()); // [1, 2, 3, 4]
let arrFlat2 = [1, 2, [3, 4, [5, 6]]]; 
console.log(arrFlat2.flat());  // [1, 2, 3, 4, [5, 6]]
let arrFlat3 = [1, 2, [3, 4, [5, 6]]];
console.log(arrFlat3.flat(2));  // [1, 2, 3, 4, 5, 6]
let arrFlat4 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
console.log(arrFlat4.flat(Infinity));
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

/*
Метод flat удаляет пустые слоты из массива:
*/
const arrFlat5 = [1, 2, , 4, 5];
console.log(arrFlat5.flat()); // [1, 2, 4, 5]

/*
13. Array splice()- изменяет содержимое массива, удаляя существующие элементы 
и/или добавляя новые элементы в его место, 
и возвращает удаленные элементы.  
*/
console.log(`13. Метод array.splice() :  `);

const arrSplice = [1, 2, 3, 4, 5];
console.log(arrSplice.splice(2, 1, 'a', 'b')); // Выведет [3]
console.log(arrSplice);  // [ 1, 2, 'a', 'b', 4, 5 ]

const fruitsSplice = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 0, "Lemon", "Kiwi");
/*
array.splice(start[, deleteCount[, item1[, item2[, ...]]]]);

array.splice(start[*индекс - откуда начинаем менять*, *сколько удалять*, *что добавить*)

start = Индекс, по которому начинает изменять массив. Если больше длины массива, 
реальный индекс будет установлен на длину массива. 
Если отрицателен, указывает индекс элемента с конца.
deleteCount = (Необязательный) Целое число, показывающее количество 
старых удаляемых из массива элементов. Если deleteCount равен 0, элементы не удаляются. 
В этом случае вы должны указать как минимум один новый элемент. Если deleteCount больше 
количества элементов, оставшихся в массиве, начиная с индекса start, то будут удалены все
 элементы до конца массива.

itemN = (Необязательный) Необязательные параметры. 
Добавляемые к массиву элементы. Если вы не укажете никакого элемента, splice() 
просто удалит элементы из массива.
*/

// Удаляет 0 элементов по индексу 2 и вставляет "drum"
const myFish = ["angel", "clown", "mandarin", "sturgeon"];
const removed = myFish.splice(2, 0, "drum");
console.log(removed); // myFish равен ["angel", "clown", "drum", "mandarin", "sturgeon"]
// removed равен [], ничего не удалено
// Удаляет 1 элемент по индексу 3

const myFish1 = ["angel", "clown", "drum", "mandarin", "sturgeon"];
const removed1 = myFish1.splice(3, 1);
console.log(removed1);
// removed1 равен ["mandarin"]
// myFish1 равен ["angel", "clown", "drum", "sturgeon"]
/*
arrSplice.splice(*индекс, куда нужно добавить элемент*, *сколько элементов удалить*, 
    *элементы к добавлению*)
The first parameter (2) defines the position where new elements should be added 
(spliced in).

The second parameter (0) defines how many elements should be removed.

The rest of the parameters ("Lemon" , "Kiwi") define the new elements to be added.
Удаляет элементы без дыр в массиве:
array.splice(*индекс, куда нужно добавить элемент*, *сколько элементов удалить*)
Using splice() to Remove Elements
With clever parameter setting, you can use splice() to remove elements without leaving 
"holes" in the array:
*/
const fruitSplice = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruitSplice.splice(0, 1));
/*
1st param (0) defines the position where new elements should be added (spliced in).
2nd parameter (1) defines how many elements should be removed.
The rest of the parameters are omitted. No new elements will be added.
*/
// Удаляет 1 элемент по индексу -2
const myFish7 = ["angel", "clown", "mandarin", "sturgeon"];
const removed7 = myFish7.splice(-2, 1);

// myFish равен ["angel", "clown", "sturgeon"]
// removed равен s ["mandarin"]
// Удаляет все элементы после индекса 2 (включительно)

const myFish5 = ["angel", "clown", "mandarin", "sturgeon"];
const removed5 = myFish5.splice(2);

// myFish5 равен ["angel", "clown"]
// removed5 равен ["mandarin", "sturgeon"]
/*
14. Array toSpliced(): Метод toSpliced() Возвращает новый массив с удалёнными и/или 
заменёнными элементами без изменения исходного массива.
ES2023 added the Array toSpliced() method as a safe way to splice an array without 
altering the original array.

The difference between the new toSpliced() method and the old splice() method is that 
the new method creates a new array, 
keeping the original array unchanged, while the old method altered the original array.
*/
console.log(`14. Метод array.toSpliced() :  `);

const months = ["Jan", "Feb", "Mar", "Apr"];
const spliced = months.toSpliced(0, 1);
const months7 = ["Jan", "Mar", "Apr", "May"];
// Inserting an element at index 1
const months2 = months7.toSpliced(1, 0, "Feb");
console.log(months2); // ["Jan", "Feb", "Mar", "Apr", "May"]

// Deleting two elements starting from index 2
const months3 = months2.toSpliced(2, 2);
console.log(months3); // ["Jan", "Feb", "May"]

// Replacing one element at index 1 with two new elements
const months4 = months3.toSpliced(1, 1, "Feb", "Mar");
console.log(months4); // ["Jan", "Feb", "Mar", "May"]

// Original array is not modified
console.log(months7); // ["Jan", "Mar", "Apr", "May"]


/*
15. Array slice(): Метод slice() возвращает новый массив, содержащий копию части исходного 
массива от начального до конечного индекса (не включая конечный). Пример использования:
*/
console.log(`15. Метод array.slice() :  `);
// const arr = [1, 2, 3, 4, 5]; 
console.log(arr.slice(2)); // Выведет [3, 4, 5]

// let arr =  [17, 'test', true, 'last'];
//temporaryArr = arr.slice(); //  [ 17, 'test', true, 'last' ] - slice() используют для 
//копирования массива.
console.log(temporaryArr);
arrLength = arr.length;
console.log(`Метод arr.length:  arrLength = ${arrLength} и  
arr = ${arr}.`);


/* Homework:
1. Array length:
   - Задание 1.1: Создайте массив `numbers` и используйте свойство `length`, чтобы определить, сколько элементов находится в массиве.
   - Задание 1.2: Напишите функцию `arrayLength`, которая принимает массив в качестве аргумента и возвращает его длину.

2. Array toString():
   - Задание 2.1: Создайте массив `colors` с несколькими цветами и используйте метод `toString()`, чтобы преобразовать его в строку.
   - Задание 2.2: Напишите функцию `arrayToString`, которая принимает массив чисел в качестве аргумента и возвращает строку, представляющую этот массив.

3. Array at():
   - Задание 3.1: Создайте массив `letters` и используйте метод `at()` для получения элемента массива по индексу.
   - Задание 3.2: Напишите функцию `getElementAtIndex`, которая принимает массив и индекс в качестве аргументов и возвращает элемент массива по указанному индексу.
    - Задание 3.3: Напишите  функцию, которая возвращает последний элемент переданного массива.

4. Array join():
   - Задание 4.1: Создайте массив `words` и используйте метод `join()`, чтобы объединить его элементы в строку с пробелами между ними чтобы получилось предложение.
   - Задание 4.2: Напишите функцию `arrayJoin`, которая принимает массив строк и объединяет их в одну строку с заданным разделителем.
   - Задание 4.3: Создайте из массива ["In this syllabus, the following five test levels are described:", "component testing,", "component integration testing,", "system testing,", "system integration testing,", "acceptance testing."] следующий текст:  

   "In this syllabus, the following five test levels are described: the component testing, the component integration testing, the system testing, the system integration testing, the acceptance testing."

5. Array pop():
   - Задание 5.1: Создайте массив `items` и используйте метод `pop()`, чтобы удалить последний элемент из него.
   - Задание 5.2: Напишите функцию `removeLastElement`, которая принимает массив и удаляет последний элемент из него.

6. Array push():
   - Задание 6.1: Создайте массив `fruit` и используйте метод `push()`, чтобы добавить новый фрукт в конец массива.
   - Задание 6.2: Напишите функцию `addNewItem`, которая принимает массив и новый элемент, и добавляет этот элемент в конец массива.

7. Array shift():
   - Задание 7.1: Создайте массив `names` и используйте метод `shift()`, чтобы удалить первый элемент из него.
   - Задание 7.2: Напишите функцию `removeFirstElement`, которая принимает массив и удаляет первый элемент из него.

8. Array unshift():
   - Задание 8.1: Создайте массив `cities` и используйте метод `unshift()`, чтобы добавить новый город в начало массива.
   - Задание 8.2: Напишите функцию `addNewFirstElement`, которая принимает массив и новый элемент, и добавляет этот элемент в начало массива.

9. Array delete(): (Нет такого метода в стандартном API JavaScript)

два задания с использованием оператора `delete` для массива:


   - Задание 9.1. Удаление элемента по индексу:
   Напишите функцию `removeItemByIndex`, которая принимает массив и индекс элемента, который нужно удалить, и использует оператор `delete`, чтобы удалить элемент с указанным индексом из массива. 

   - Задание 9.2. Очистка массива:
Напишите функцию `clearArray`, которая принимает массив и использует оператор `delete`, чтобы удалить все его элементы и сделать массив пустым.

10. Array concat():
   - Задание 10.1: Создайте два массива `arr1` и `arr2` и используйте метод `concat()`, чтобы объединить их в один массив.
   - Задание 10.2: Напишите функцию `concatArrays`, которая принимает два массива и возвращает новый массив, объединяя их.

11. Array copyWithin():
   - Задание 11.1: Создайте массив `numbers` и используйте метод `copyWithin()`, чтобы скопировать элементы из одной части массива в другую.
   - Задание 11.2: Напишите функцию `copyWithinExample`, которая принимает массив и копирует часть массива внутри него самого, смещая и перезаписывая существующие элементы, используя метод `copyWithin()`.

12. Array flat():
   - Задание 12.1: Создайте массив `nestedArray` с вложенными массивами и используйте метод `flat()`, чтобы преобразовать его в одномерный массив.
   - Задание 12.2: Напишите функцию `flattenArray`, которая принимает массив, содержащий вложенные массивы, и использует метод `flat()`, чтобы "сплющить" массив до одномерного массива.

13. Array splice():
   - Задание 13.1: Создайте массив `fruits` и используйте метод `splice()`, чтобы удалить несколько элементов из массива и вставить новые элементы на их место.
   - Задание 13.2: Напишите функцию `removeElements`, которая принимает массив и использует метод `splice()`, чтобы удалить элементы из массива по заданному индексу и количеству элементов.

14. Array toSpliced(): 
    - Задание 14.1: Создайте массив `months` и используйте метод `splice()`, чтобы удалить несколько элементов из массива и вставить новые элементы на их место.
   - Задание 14.2: Напишите функцию `removeElementsSafely`, которая принимает массив и использует метод `toSpliced()`, чтобы удалить элементы из массива по заданному индексу и количеству элементов.

15. Array slice():
   - Задание 15.1: Создайте массив `letters` и используйте метод `slice()`, чтобы выбрать только определенные буквы из массива.
   - Задание 15.2: Напишите функцию `getSubarray`, которая принимает массив и возвращает подмассив, используя метод `slice()`, чтобы выбрать элементы из определенного диапазона индексов.

Каждое задание направлено на использование конкретного метода массива и демонстрацию его функциональности.
*/

/*
Доступ к элементам массива

-используя квадратные скобки и номер индекса. Например, чтобы получить доступ к третьему элементу в любом массиве с именем myArray, вы должны использовать следующее:
*/

let progLang = ['Java', 'JavaScript', 'Pyton'];

console.log(progLang[1]);

/*
let city = [];

city[0] = ['Street One', 'Street Two', 'Street Three' ];  // Streets of the city

console.log(city[0][0] + ' - city[0][0]');  // Street One

city[0][0] = [11, 12, 13];  // houses on the Street One

console.log(city[0][0] + " - city[0][0]");  // [ 11, 12, 13 ] - houses

city[0][0][0] = [111, 112, 113]  // Квартиры в доме 11
city[0][0][2] = [121, 122, 123]; // Квартиры в доме 12
city[0][0][3] = [131, 132, 133]; // Квартиры в доме 13

console.log(city[0][0][0] + ' - city[0][0][0] ');  // [ 111, 112, 113 ]

console.log(city + ' - city');

// city = [['Street One', [[11, [111, 222, 333]], 22, 33]], ['Street Two'], ['Street Three', []]];

city = [
    ['Street One', [
        [11, [
            111,
            112,
            113 
        ]
    ],
        [12, [
            121,
            122,
            123
        ]
    ],
        [13, [
            131,
            132,
            133
        ]
    ]
    ]
],
    ['Street Two', [
        [21, [
            211,
            212,
            213
        ]
    ], 
        [22, [
            221,
            222,
            223
        ]
    ],
        [23, [
            231,
            232,
            233
        ]
    ]
    ]
],
    ['Street Three', [
        [31, [
            311,
            312,
            313
        ]
    ],
        [32, [
            321,
            322,
            323
        ]
    ],
        [33, [
            331,
            332,
            333
        ]
    ]
    ]
]
]

 console.log('city - ' + city);  // city - Street One,11,111,112,113,12,121,122,123,13,131,132,133,Street Two,21,211,212,213,
                                   // 22, 221,222,223,23,231,232,233,Street Three,31,311,312,313,32,321,322,323,33,331,332,333

city = [['Street One',   [[11, [111,112,113]], [12, [121,122,123]], [13, [131,132,133]]]], 
        ['Street Two',   [[21, [211,212,213]], [22, [221,222,223]], [23, [231, 232,233]]]],
        ['Street Three', [[31, [311,312,313]], [32, [321,322,323]], [33, [331,332,333]]]]];
        
console.log('city: ' + city);  // city: Street One,11,111,112,113,12,121,122,123,13,131,132,133,Street Two,21,211,212,213,
                                  // 22,221,222,223,23,231,232,233,Street Three,31,311,312,313,32,321,322,323,33,331,332,333
console.log("find an address:");
console.log(city[0][0]);  // Street One - улица

console.log(city[0][1][0][0]);  //  11  - дом

console.log(city[0][1][0][1]);  //  [ 111, 112, 113 ]  - квартиры дома

console.log(city[0][1][0][1][0]);  // 111 - квартира

/*

1. Откройте браузер Chrome и откройте консоль JavaScript.

Вы можете открыть консоль JavaScript с помощью меню Chrome или нажав Command + Option + J на Mac или Ctrl + Shift + J в Windows.

2. В консоли введите следующий оператор, а затем клавишу Return или Enter, чтобы создать массив с именем lengthsOfString:


let lengthsOfString = [2,4,1.5,80];

3. Введите имя массива, а затем порядковый номер в квадратных скобках, чтобы получить значение каждого элемента массива.


lengthsOfString[0];
lengthsOfString[3];
lengthsOfString[2];

4. Введите индексный номер, которого нет в массиве. Например:
lengthsOfString[4];

Обратите внимание, что значение этого элемента массива не определено.

5. Введите следующую команду, чтобы создать новую переменную для хранения всей имеющейся длины строки:


let totalLength = lengthsOfString[0] + lengthsOfString[1] + lengthsOfString[2] + lengthsOfString[3];


4.	Наконец, получите значение totalLength с помощью этой команды:
 totalLength;

*/

let lengthsOfString = [2,4,1.5,80];
console.log(lengthsOfString[0]);  // 2
console.log(lengthsOfString[3]);  // 80
console.log(lengthsOfString[2]);  // 1.5
console.log(lengthsOfString[4]);  // undefined - нет в массиве
let totalLength = lengthsOfString[0] + lengthsOfString[1] + lengthsOfString[2] + lengthsOfString[3];
console.log(totalLength);  // 87.5
}

/*
Шпаргалка по методам массива:

Для добавления/удаления элементов:

1) push(...items) – добавляет элементы в конец,
2) pop() – извлекает элемент с конца,
3) shift() – извлекает элемент с начала,
4) unshift(...items) – добавляет элементы в начало.
5) splice(pos, deleteCount, ...items) – начиная с ) индекса pos удаляет deleteCount элементов и вставляет items.
6) slice(start, end) – создаёт новый массив, копируя в него элементы с индекса start до end (не включая end).
7) concat(...items) – возвращает новый массив: копирует все члены текущего массива и добавляет к нему items. Если какой-то из items является массивом, тогда берутся его элементы.
Для поиска среди элементов:

8, 9) indexOf/lastIndexOf(item, pos) – ищет item, начиная с позиции pos, и возвращает его индекс или -1, если ничего не найдено.
10) includes(value) – возвращает true, если в массиве имеется элемент value, в противном случае false.
11, 12) find/filter(func) – фильтрует элементы через функцию и отдаёт первое/все значения, при прохождении которых через функцию возвращается true.
13) findIndex похож на find, но возвращает индекс вместо значения.

Для перебора элементов:

14) forEach(func) – вызывает func для каждого элемента. Ничего не возвращает.

Для преобразования массива:

15) map(func) – создаёт новый массив из результатов вызова func для каждого элемента.
16) sort(func) – сортирует массив «на месте», а потом возвращает его.
17) reverse() – «на месте» меняет порядок следования элементов на противоположный и возвращает изменённый массив.
18) split/join – преобразует строку в массив и обратно.
19, 20) reduce/reduceRight(func, initial) – вычисляет одно значение на основе всего массива, вызывая func для каждого элемента и передавая промежуточный результат между вызовами.

Дополнительно:

21) Array.isArray(arr) проверяет, является ли arr массивом.
Пожалуйста, обратите внимание, что методы push, pop, shift, unshift, sort, reverse и splice изменяют исходный массив.

Эти методы – самые используемые, их достаточно в 99% случаев. 
*/

/*
Array Basic Methods 
console.log("**Для добавления/удаления элементов**********");
1. Array length
2. Array toString()
3. Array at()
4. Array join()              - 16)
5. Array pop()                - 2)
6. Array push()               - 1)
7. Array shift()              - 3)
8. Array unshift()            - 4)
9. Array delete()
10. Array concat()            - 7)
11. Array copyWithin()
12. Array flat()
13. Array splice()            - 5)
14. Array toSpliced()
15. Array slice()             - 6)
*/
/*
ASCII
https://www.lookuptables.com/text/ascii-table
*/
console.log("1".charCodeAt(0)); // 49
console.log("A".charCodeAt(0)); // 65 англ. A
console.log("Z".charCodeAt(0)); // 90
console.log("А".charCodeAt(0)); // 1040 русская А
console.log("Я".charCodeAt(0)); // 1071
console.log("ё".charCodeAt(0)); // 1105
console.log("Ё".charCodeAt(0)); // 1025

/*
8. Объект Array
 allows to store collections of several elements под одним именем переменной и 
имеет методы для выполнения общих операций с массивами.

8.1 Массивы являются спископодобными объектами, чьи прототипы содержат методы для 
операций обхода и изменения массива. Ни размер JavaScript-массива, ни типы его 
элементов не являются фиксированными. Поскольку размер массива может увеличиваться и
 уменьшаться в любое время, то нет гарантии, что массив окажется плотным. 
 То есть, при работе с массивом может возникнуть ситуация, 
 что элемент массива, к которому вы обратитесь, будет пустым и вернёт undefined.

8.2. Dоступ к элементам массива
Массивы в JavaScript индексируются с нуля: первый элемент массива имеет индекс,
 равный 0, а индекс последнего элемента равен значению свойства массива length минус 1.
*/
console.log("*******Доступ к элементам массива*********")
const arr = ["first element", "second element", "third element"];

console.log(arr[0]);  // first element
console.log(arr[arr.length - 1]);  // third element
console.log(arr[1]);  // second element

// Длина массива - свойство length.toExponential

let fruit = [];
fruit[5] = "Манго";

console.log(fruit[5]);  // Манго
console.log(Object.keys(fruit));  // [ '5' ]
console.log(fruit.length);  // 6
// можно увеличить длину массива
fruit.length = 10;
console.log(Object.keys(fruit));  // [ '5' ]

fruit.length = 2;
console.log(Object.keys(fruit));  // [  ]
console.log(fruit.length);  // 2
// Конструктор Array().

// Array[@@species] // возвращает конструктор Array
Array[Symbol.species];
console.log(Array[Symbol.species]);  // [Function: Array]


console.log("**Для поиска среди элементов**********");


console.log("**8)Array indexOf()************************");
/*
Метод indexOf() возвращает первый индекс, по которому данный элемент может быть найден в массиве или -1, если такого индекса нет.

Синтаксис
arr.indexOf(searchElement[, fromIndex = 0])
Параметры
searchElement - Искомый элемент в массиве.

fromIndex 
Индекс, с которого начинать поиск. Если индекс больше или равен длине массива, возвращается -1, что означает, что массив даже не просматривается. Если индекс является отрицательным числом, он трактуется как смещение с конца массива. Обратите внимание: если индекс отрицателен, массив всё равно просматривается от начала к концу. Если рассчитанный индекс оказывается меньше 0, поиск ведётся по всему массиву. Значение по умолчанию равно 0, что означает, что просматривается весь массив.

Описание
Метод indexOf() сравнивает искомый элемент searchElement с элементами в массиве, используя строгое сравнение (en-US) (тот же метод используется оператором ===, тройное равно).

Примеры
Пример: использование indexOf()
В следующем примере indexOf() используется для поиска значений в массиве.
*/
const array7 = [2, 5, 9];

console.log(array7.indexOf(2)); // 0
console.log(array7.indexOf(7)); // -1
console.log(array7.indexOf(9, 2)); // 2
console.log(array7.indexOf(2, -1)); // -1
console.log(array7.indexOf(2, -3)); // 0

/*
Пример: нахождение всех вхождений элемента
Ha примере indexOf() используется для поиска всех индексов элемента в указанном массиве, которые с помощью push() добавляются в другой массив.
*/

const indices = [];
const array = ["a", "b", "a", "c", "a", "d"];
const element = "a";
let idx = array.indexOf(element);
while (idx != -1) {
    indices.push(idx);
    idx = array.indexOf(element, idx + 1);
}

console.log(indices); // [0, 2, 4]

console.log("**9)Array lastIndexOf()*******************"
/*
Метод lastIndexOf() возвращает последний индекс, по которому данный элемент может быть найден в массиве или -1, если такого индекса нет. Массив просматривается от конца к началу, начиная с индекса fromIndex.

 пример
*/
const animals = ["Dodo", "Tiger", "Penguin", "Dodo"];

console.log(animals.lastIndexOf("Dodo"));  // 3
console.log(animals.lastIndexOf("Tiger"));  // 1


/*
Синтаксис
arr.lastIndexOf(searchElement[, fromIndex = arr.length])
Параметры
searchElement - Искомый элемент в массиве.

fromIndex
Необязательный параметр. Индекс, с которого начинать поиск в обратном направлении. Если индекс больше или равен длине массива, просматривается весь массив. Если индекс является отрицательным числом, он трактуется как смещение с конца массива. Обратите внимание: если индекс отрицателен, массив всё равно просматривается от конца к началу. Если рассчитанный индекс оказывается меньше 0, массив даже не просматривается. Значение по умолчанию равно длине массива, что означает, что просматривается весь массив.

Описание
Метод lastIndexOf() сравнивает искомый элемент searchElement с элементами в массиве, используя строгое сравнение (en-US) (тот же метод используется оператором ===, тройное равно).

Примеры
Пример: использование lastIndexOf()
В следующем примере метод lastIndexOf() используется для поиска значений в массиве.
*/
const arrayNumbers = [2, 5, 9, 2];
console.log(arrayNumbers.lastIndexOf(2)); // 3
console.log(arrayNumbers.lastIndexOf(7)); // -1
console.log(arrayNumbers.lastIndexOf(2, 3)); // 3
console.log(arrayNumbers.lastIndexOf(2, 2)); // 0
console.log(arrayNumbers.lastIndexOf(2, -2)); // 0
console.log(arrayNumbers.lastIndexOf(2, -1)); // 3
/*
Пример: нахождение всех вхождений элемента
В следующем примере метод lastIndexOf() используется для поиска всех индексов элемента в указанном массиве, которые с помощью метода push() добавляются в другой массив.
*/
const indicesLast = [];
const arrayLetters = ["a", "b", "a", "c", "a", "d"];
let elementFind = "a";
let idxLast = arrayLetters.lastIndexOf(elementFind);
while (idxLast != -1) {
    indicesLast.push(idxLast);
    idxLast = idxLast > 0 ? arrayLetters.lastIndexOf(element, idxLast - 1) : -1;
}

console.log(indicesLast);  // [4, 2, 0]

/*
Обратите внимание, что мы обрабатываем случай idxLast == 0 отдельно, поскольку элемент всегда будет найден, независимо от параметра fromIndex, если он является первым элементом в массиве. Этим он отличается от метода indexOf().
*/

console.log("**10)Array includes()**********************");
/*
Метод includes() определяет, содержит ли массив определённый элемент, возвращая в зависимости от этого true или false.

 пример
*/
const arrDigits = [1, 2, 3];

console.log(arrDigits.includes(2));  // true

const pets = ["cat", "dog", "bat"];

console.log(pets.includes("cat"));  // true
console.log(pets.includes("ca"));  // false
/*
Синтаксис
arr.includes(searchElement[fromIndex = 0])
Параметры
searchElement - Искомый элемент.

fromIndex Необязательный
Позиция в массиве, с которой начинать поиск элемента searchElement. При отрицательных значениях поиск производится начиная с индекса array.length + fromIndex по возрастанию. Значение по умолчанию равно 0.

Возвращаемое значение
Boolean.

Примеры
*/
console.log([1, 2, 3].includes(2)); // true
console.log([1, 2, 3].includes(4)); // false
console.log([1, 2, 3].includes(3, 3)); // false
console.log([1, 2, 3].includes(3, -1)); // true
console.log([1, 2, NaN].includes(NaN)); // true

/*
fromIndex больше или равен длине массива
Если fromIndex больше или равен длине массива, то возвращается false. При этом поиск не производится.
*/

const arrLetters = ["a", "b", "c"];

console.log(arrLetters.includes("c", 3)); // false
console.log(arrLetters.includes("c", 100)); // false

/*
Вычисленный индекс меньше нуля 0
Если fromIndex отрицательный, то вычисляется индекс, начиная с которого будет производиться поиск элемента searchElement. Если вычисленный индекс меньше нуля, то поиск будет производиться во всём массиве.
*/
// длина массива равна 3
// fromIndex равен -100
// вычисленный индекс равен 3 + (-100) = -97

const arrLetters2 = ["a", "b", "c"];

console.log(arrLetters2.includes("a", -100)); // true
console.log(arrLetters2.includes("b", -100)); // true
console.log(arrLetters2.includes("c", -100)); // true

/*
Использование includes() в качестве общих метода
includes() специально сделан общим. Он не требует, чтобы this являлся массивом, так что он может быть применён к другим типам объектов (например, к массивоподобным объектам). Пример ниже показывает использование метода includes() на объекте arguments.
*/

(function () {
    console.log([].includes.call(arguments, "a")); // true
    console.log([].includes.call(arguments, "d")); // false
})("a", "b", "c");


console.log("**11)Array find()************************");
/*
Метод find() возвращает значение первого найденного в массиве элемента, которое удовлетворяет условию переданному в callback функции. В противном случае возвращается undefined.

Также смотрите метод findIndex(), который возвращает индекс найденного в массиве элемента вместо его значения.

Если вам нужно найти позицию элемента или наличие элемента в массиве, используйте Array.prototype.indexOf() или Array.prototype.includes() соответственно.

Синтаксис
arr.find(callback[, thisArg])
Параметры
callback - Функция, вызывающаяся для каждого значения в массиве, принимает три аргумента:

element -Текущий обрабатываемый элемент в массиве.

index - Индекс текущего обрабатываемого элемента в массиве.

array - Массив, по которому осуществляется проход.

thisArg
Необязательный параметр. Значение, используемое в качестве this при выполнении функции callback.

Возвращаемое значение
Значение элемента из массива, если элемент прошёл проверку, иначе undefined.

Описание
Метод find вызывает переданную функцию callback один раз для каждого элемента, присутствующего в массиве, до тех пор, пока она не вернёт true. Если такой элемент найден, метод find немедленно вернёт значение этого элемента. В противном случае, метод find вернёт undefined.
Функция callback вызывается с тремя аргументами: значением элемента, индексом элемента и массивом, по которому осуществляется проход.

Если в метод find был передан параметр thisArg, при вызове callback он будет использоваться в качестве значения this. В противном случае в качестве значения this будет использоваться значение undefined.

Метод find не изменяет массив, для которого он был вызван.

Диапазон элементов, обрабатываемых методом find, устанавливается до первого вызова функции callback. Элементы, добавленные в массив после начала выполнения метода find, не будут посещены функцией callback. Если существующие, непосещение элементы массива изменяются функцией callback, их значения, переданные в функцию, будут значениями на тот момент времени когда метод find посетит их; удалённые элементы все ещё будут посещены.

Примеры

Пример: поиск простого числа в массиве
Следующий пример находит в массиве положительных чисел элемент, являющийся простым числом (либо возвращает undefined, если в массиве нет простых чисел).
*/

function isPrime1(element, index, array) {
    start = 2;
    while (start <= Math.sqrt(element)) {
        if (element % start++ < 1) {
            return false;
        }
    }
    return element > 1;
}

console.log([4, 6, 8, 12].find(isPrime1)); // undefined, не найдено
console.log([4, 5, 8, 12].find(isPrime1)); // 5


console.log("**12)Array filter()************************");
/*
Метод filter() создаёт новый массив со всеми элементами, прошедшими проверку, задаваемую в передаваемой функции.

пример
*/

const words = ["spray", "elite", "exuberant", "destruction", "present"];

const result4 = words.filter((word) => word.length > 6);

console.log(result4);  // [ 'exuberant', 'destruction', 'present' ]

console.log(words.filter((word) => word === "spray"));  // может найти слово в массиве  [ 'spray' ]


console.log(words.filter((word) => word === "sprays"));  // вернет пустой массив []
/*
Синтаксис
// Стрелочная функция
filter((element) => { ... } )
filter((element, index) => { ... } )
filter((element, index, array) => { ... } )

// Колбэк-функция
filter(callbackFn)
filter(callbackFn, thisArg)

// Встроенная колбэк-функция
filter(function callbackFn(element) { ... })
filter(function callbackFn(element, index) { ... })
filter(function callbackFn(element, index, array){ ... })
filter(function callbackFn(element, index, array) { ... }, thisArg)

callbackFn - Функция-предикат, которая будет вызвана для проверки каждого элемента массива. Если функция возвращает true, то элемент остаётся в массиве, если false, то удаляется.

Принимает три аргумента

element - Текущий обрабатываемый элемент в массиве.

index Необязательный - Индекс текущего обрабатываемого элемента в массиве.

array Необязательный - Обрабатываемый массив, на котором был вызван метод filter().

thisArg Необязательный - Значение, используемое в качестве this при вызове колбэк-функции callbackFn.

Возвращаемое значение
Вернётся новый массив с элементами, которые прошли проверку. Если ни один элемент не прошёл проверку, то будет возвращён пустой массив.

Описание
Метод filter() вызывает переданную функцию callback один раз для каждого элемента, присутствующего в массиве, и создаёт новый массив со всеми значениями, для которых функция callback вернула значение, которое может быть приведено к true. Функция callback вызывается только для индексов массива с уже определёнными значениями; она не вызывается для индексов, которые были удалены или которым значения никогда не присваивались. Элементы массива, не прошедшие проверку функцией callback, просто пропускаются и не включаются в новый массив.

Функция callback вызывается с тремя аргументами:

значение элемента;
индекс элемента;
массив, по которому осуществляется проход.
Если в метод filter() был передан параметр thisArg, при вызове callback он будет использоваться в качестве значения this. В противном случае в качестве значения this будет использоваться значение undefined. В конечном итоге, значение this, наблюдаемое из функции callback, определяется согласно обычным правилам определения this.

Метод filter() не изменяет массив, для которого он был вызван.

Элементы массива, обрабатываемые методом filter(), устанавливается до первого вызова функции callback. Элементы, добавленные в массив после начала выполнения метода filter(), либо изменённые в процессе выполнения, не будут обработаны функцией callback. Соответствующим образом, если существующие элементы удаляются из массива, они также не будут обработаны

Предупреждение: одновременное изменение элементов, описанное в предыдущем параграфе, часто приводит к труднопонимаемому коду, поэтому не рекомендуется делать это (за исключением особых случаев).

Примеры
Фильтрация всех маленьких значений
Следующий пример использует filter() для создания отфильтрованного массива, все элементы которого больше или равны 10, а все меньшие 10 удалены.
*/

function isBigEnough(value) {
    return value >= 10;
}

let filtered = [12, 5, 8, 130, 44].filter(isBigEnough);
// массив filtered теперь содержит [12, 130, 44]
/*
Найти все простые числа в массиве*****
Следующий пример возвращает все простые числа в массиве:
Простые числа определяются как положительные целые числа, которые имеют ровно два делителя: единицу и само число. По определению, отрицательные числа не являются простыми.
*/
const array16 = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

function isPrime4(num) {
    for (let i = 2; num > i; i++) {
        if (num % i == 0) {
            return false;
        }
    }
    return num > 1;
}

console.log(array16.filter(isPrime4)); // [2, 3, 5, 7, 11, 13]
/*
Фильтрация неверных записей в JSON
В следующем примере метод filter() используется для создания отфильтрованного JSON-объекта, все элементы которого содержат ненулевое числовое поле id.
*/

let arr16 = [
    { id: 15 },
    { id: -1 },
    { id: 0 },
    { id: 3 },
    { id: 12.2 },
    {},
    { id: null },
    { id: NaN },
    { id: "undefined" },
];

let invalidEntries = 0;

function filterByID(item) {
    if (Number.isFinite(item.id) && item.id !== 0) {
        return true;
    }
    invalidEntries++;
    return false;
}

let arrByID = arr16.filter(filterByID);

console.log("Отфильтрованный массив\n", arrByID);
// Отфильтрованный массив
// [{ id: 15 }, { id: -1 }, { id: 3 }, { id: 12.2 }]

console.log("Количество некорректных элементов = ", invalidEntries);
// Количество некорректных элементов = 5
/*
`Number.isFinite()` - это статический метод объекта `Number` в JavaScript, который используется для определения, является ли переданное значение конечным числом. Он возвращает `true`, если значение является конечным числом, и `false` в противном случае.

В отличие от глобальной функции `isFinite()`, которая преобразует свой аргумент в число перед проверкой, метод `Number.isFinite()` проверяет только сам аргумент и возвращает `false` для значений, которые не являются числами или являются `Infinity` или `-Infinity`.
*/
Примеры:


Number.isFinite(Infinity);  // false
Number.isFinite(-Infinity); // false
Number.isFinite(NaN);       // false
Number.isFinite(123);       // true
Number.isFinite('123');     // false, потому что '123' не является числом
Number.isFinite(true);      // false, потому что true преобразуется в 1, которое является числом

/*
В примере функция `filterByID` использует `Number.isFinite(item.id)` для проверки, является ли `id` числом и конечным (не `Infinity`, не `-Infinity`, и не `NaN`), и возвращает `true`, если это так. Если `id` не является числом или является `0`, функция возвращает `false`.


/*
Поиск в массиве
В следующем примере filter() используется для фильтрации содержимого массива на основе входных данных.
*/
let fruits = ["apple", "banana", "grapes", "mango", "orange"];

/**
 * Элементы массива фильтруется на основе критериев поиска (query)
 */
function filterItems(query) {
    return fruits.filter(function (el) {
        return el.toLowerCase().indexOf(query.toLowerCase()) > -1;
    });
}

console.log(filterItems("ap")); // ['apple', 'grapes']
console.log(filterItems("an")); // ['banana', 'mango', 'orange']
/*
Этот код определяет функцию `filterItems(query)`, которая фильтрует элементы массива `fruits` на основе заданного критерия поиска `query`. Функция использует метод `filter()` для создания нового массива, содержащего только те элементы, которые удовлетворяют критериям поиска.

Вот как это работает:

1. Функция `filterItems(query)` принимает строку `query` в качестве аргумента, которая представляет собой критерий поиска.

2. Внутри функции используется метод `filter()` для фильтрации элементов массива `fruits`. Для каждого элемента массива выполняется функция обратного вызова, которая проверяет, содержит ли текущий элемент строку `query`.

3. Внутри функции обратного вызова строка `query` и текущий элемент массива `el` приводятся к нижнему регистру с помощью метода `toLowerCase()`. Это делается для обеспечения регистронезависимого поиска.

4. Затем проверяется, содержит ли приведенная к нижнему регистру строка `el` подстроку, представленную `query`. Это делается с помощью метода `indexOf()`, который возвращает индекс первого вхождения подстроки в строку или `-1`, если подстрока не найдена.

5. Если индекс, возвращаемый методом `indexOf()`, больше `-1`, это означает, что подстрока найдена в текущем элементе массива, и элемент добавляется в новый массив, создаваемый методом `filter()`.

6. В конце функция `filterItems(query)` возвращает новый массив, содержащий только те элементы, которые соответствуют критериям поиска `query`.

Этот подход позволяет эффективно фильтровать массив по критериям поиска, игнорируя регистр букв.


Реализация со стрелочной функцией:
*/
const fruits2 = ["apple", "banana", "grapes", "mango", "orange"];

/**
 * Элементы массива фильтруется на основе критериев поиска (query)
 */
const filterItems2 = (arr, query) => {
    return arr.filter(
        (el) => el.toLowerCase().indexOf(query.toLowerCase()) !== -1,
    );
};

console.log(filterItems2(fruits2, "ap")); // ['apple', 'grapes']
console.log(filterItems2(fruits2, "an")); // ['banana', 'mango', 'orange']


const fruit3 = ["apple", "banana", "grapes", "mango", "orange", "apple", "banana", "apple"];
// поиск и удаление дубликатов в массиве - если 2 и более элементов в массиве, они все будут удалены 
const doubleFree = fruit3.filter(el => fruit3.indexOf(el) === fruit3.lastIndexOf(el));
console.log(doubleFree);  // [ 'grapes', 'mango', 'orange' ]


// нахождение дубликатов
const dublicate = fruit3.filter(el => fruit3.indexOf(el) !== fruit3.lastIndexOf(el));
console.log(dublicate);  // [ 'apple', 'banana', 'apple', 'banana', 'apple' ]


// создание массива с неповторяющимися элементами
const fruit4 = ["apple", "banana", "grapes", "mango", "orange", "apple", "banana", "apple", "kiwi"];

const exclusive = fruit4.filter((el, i) => i === fruit4.indexOf(el)); // индекс текущего элемента равен индексу первого вхождения этого элемента
console.log(exclusive);  // [ 'apple', 'banana', 'grapes', 'mango', 'orange' ]

const exclusive2 = []
for (let i = 0; i < fruit4.length; i++) {
    if (i === fruit4.indexOf(fruit4[i])) {
        exclusive2.push(fruit4[i]);
        console.log(exclusive2);
    }
}
// [ 'apple', 'banana', 'grapes', 'mango', 'orange', 'kiwi' ]

// создание нового массива со всеми элементами, отвечающими условию в функции = берем элементы по нечетному индексу
const digits = [-4, 0, 876, 88, -22, 777];

const oddIndex = digits.filter((el, i) => i % 2);  // если индекс нечетный 3 % 2 = 1 === true; 0 === false

console.log(oddIndex);  // [ 0, 88, 777 ]



console.log("**13)Array findIndex()**********************");
/*
Метод findIndex() возвращает индекс в массиве, если элемент удовлетворяет условию проверяющей функции. В противном случае возвращается -1.

Также смотрите метод find(), который возвращает значение найденного в массиве элемента вместо его индекса.

Синтаксис
arr.findIndex(callback[, thisArg])

Параметры
callback - Функция, вызывающаяся для каждого значения в массиве, принимает три аргумента:

element - Текущий обрабатываемый элемент в массиве.

index - Индекс текущего обрабатываемого элемента в массиве.

array - Массив, по которому осуществляется проход.

thisArg
Необязательный параметр. Значение, используемое в качестве this при выполнении функции callback.

Описание
Метод findIndex вызывает переданную функцию callback один раз для каждого элемента, присутствующего в массиве, до тех пор, пока она не вернёт true. Если такой элемент найден, метод findIndex немедленно вернёт индекс этого элемента. В противном случае, метод findIndex вернёт -1. Функция callback вызывается только для индексов массива, имеющих присвоенные значения; она не вызывается для индексов, которые были удалены или которым значения никогда не присваивались.

Функция callback вызывается с тремя аргументами: значением элемента, индексом элемента и массивом, по которому осуществляется проход.

Если в метод findIndex был передан параметр thisArg, при вызове callback он будет использоваться в качестве значения this. В противном случае в качестве значения this будет использоваться значение undefined.

Метод findIndex не изменяет массив, для которого он был вызван.

Диапазон элементов, обрабатываемых методом findIndex, устанавливается до первого вызова функции callback. Элементы, добавленные в массив после начала выполнения метода findIndex, не будут посещены функцией callback. Если существующие, непосещение элементы массива изменяются функцией callback, их значения, переданные в функцию, будут значениями на тот момент времени, когда метод findIndex посетит их; удалённые элементы посещены не будут.

Примеры
Пример: поиск индекса простого числа в массиве
Следующий пример находит в массиве индекс элемента, являющийся простым числом (либо возвращает -1, если в массиве нет простых чисел).
*/
function isPrime2(element, index, array) {
    var start = 2;
    while (start <= Math.sqrt(element)) {
        if (element % start++ < 1) {
            return false;
        }
    }
    return element > 1;
}

console.log([4, 6, 8, 12].findIndex(isPrime2)); // -1, не найдено
console.log([4, 6, 7, 12].findIndex(isPrime2)); // 2

testingTools = [
    "management tools",
    "static testing tools",
    "test design and implementation tools",
    "test execution and coverage tools",
    "Non-fanctional testing tools",
    // "DevOps tools", 
    "Collaboration tools",
    "tools supporting scalability and deployment standardization",
    "any other tool"
];

testing = ["plan", "design", "DevOps tools", "test automation"]

function isTool(element, index, array) {
    return this.includes(element);
    // for (let i = 0; i <this.length; i++) {
    //     if (element === this[i]) {
    //         return true;
    //     }
    // }    
    // return false;
}

console.log(testing.findIndex(isTool, testingTools));

console.log("**Для перебора элементов**************");


console.log("**14)Array forEach************************");
/*
Метод forEach() выполняет указанную функцию один раз для каждого элемента в массиве.

Интерактивный пример

Синтаксис
arr.forEach(function callback(currentValue, index, array) {
    //your iterator
}[, thisArg]);
Параметры
callback - Функция, которая будет вызвана для каждого элемента массива. Она принимает от одного до трёх аргументов:

currentValue - Текущий обрабатываемый элемент в массиве.

index Необязательный - Индекс текущего обрабатываемого элемента в массиве.

array Необязательный - Массив, по которому осуществляется проход.

thisArg - Необязательный параметр. Значение, используемое в качестве this при вызове функции callback.

Возвращаемое значение
undefined.

Описание
Метод forEach() выполняет функцию callback один раз для каждого элемента, находящегося в массиве в порядке возрастания. Она не будет вызвана для удалённых или пропущенных элементов массива. Однако, она будет вызвана для элементов, которые присутствуют в массиве и имеют значение undefined.

Функция callback будет вызвана с тремя аргументами:

значение элемента (value)
индекс элемента (index)
массив, по которому осуществляется проход (array)
Если в метод forEach() был передан параметр thisArg, при вызове callback он будет использоваться в качестве значения this. В противном случае, в качестве значения this будет использоваться значение undefined. В конечном итоге, значение this, наблюдаемое из функции callback, определяется согласно обычным правилам определения this, видимого из функции.

Диапазон элементов, обрабатываемых методом forEach(), устанавливается до первого вызова функции callback. Элементы, добавленные в массив после начала выполнения метода forEach(), не будут посещены функцией callback. Если существующие элементы массива изменятся, значения, переданные в функцию callback, будут значениями на тот момент времени, когда метод forEach() посетит их; удалённые элементы посещены не будут. Если уже посещённые элементы удаляются во время итерации (например, с помощью shift()), последующие элементы будут пропущены. (Смотри пример ниже)

Примечание: Не существует способа остановить или прервать цикл forEach() кроме как выбрасыванием исключения. Если вам необходимо такое поведение, метод forEach() неправильный выбор.

Досрочное прекращение может быть достигнуто с:

Простой цикл for
Циклы for...of / for...in
Array.prototype.every()
Array.prototype.some()
Array.prototype.find()
Array.prototype.findIndex()
Если нужно протестировать элементы массива на условие и нужно вернуть булево значение, вы можете воспользоваться методами every(), some(), find() или findIndex().

Метод forEach() выполняет функцию callback один раз для каждого элемента массива; в отличие от методов every() и some(), он всегда возвращает значение undefined.

Примеры
Нет операции для неинициализированных значений (разреженные массивы)
*/
const arraySparse = [1, 3, , 7];
let numCallbackRuns = 0;

arraySparse.forEach((element) => {
    console.log(element);
    numCallbackRuns++;
});

console.log("numCallbackRuns: ", numCallbackRuns);

// 1
// 3
// 7
// numCallbackRuns: 3
// комментарий: как вы видите пропущенное значение между 3 и 7 не вызывало функцию callback.

// Конвертируем цикл for в forEach

const items = ["item1", "item2", "item3"];
const copy1 = [];
const copy2 = [];

// до
for (let i = 0; i < items.length; i++) {
    copy1.push(items[i]);
}

console.log(copy1); //  [ 'item1', 'item2', 'item3' ]
// после
items.forEach(function (item) {
    copy2.push(item);
});

console.log(copy2);  // [ 'item1', 'item2', 'item3' ]
console.table(copy2);
/*

┌─────────┬─────────┐
│ (index) │ Values  │
├─────────┼─────────┤
│ 0       │ 'item1' │
│ 1       │ 'item2' │
│ 2       │ 'item3' │
└─────────┴─────────┘



Печать содержимого массива
Примечание: Для отображения содержимого массива в консоли вы можете использовать console.table(), который выводит отформатированную версию массива.

Следующий пример иллюстрирует альтернативный подход, использующий forEach().

Следующий код выводит каждый элемент массива на новой строке журнала:
*/

function logArrayElements(element, index, array) {
    console.log("a[" + index + "] = " + element);
}

// Обратите внимание на пропуск по индексу 2, там нет элемента, поэтому он не посещается
[2, 5, , 9].forEach(logArrayElements);
// логи:
// a[0] = 2
// a[1] = 5
// a[3] = 9

/*
Использование thisArg
Следующий (надуманный) пример обновляет свойства объекта, когда перебирает записи массива:
*/

function Counter() {
    this.sum = 0;
    this.count = 0;
}
Counter.prototype.add = function (array) {
    array.forEach((entry) => {
        this.sum += entry;
        ++this.count;
    }, this);
    // ^---- Note
};

const objCount = new Counter();
objCount.add([2, 5, 9]);
console.log(objCount.count);  // 3
console.log(objCount.sum);   // 16

/*
Поскольку в forEach() передан параметр thisArg (this), он затем передаётся в callback при каждом вызове. И callback использует его в качестве собственного значения this.

Примечание: Если при передаче callback функции используется выражение стрелочной функции, параметр thisArg может быть опущен, так как все стрелочные функции лексически привязываются к значению this.

Прерывание цикла
Следующий код использует Array.prototype.every() для логирования содержимого массива и останавливается при превышении значением заданного порогового значения THRESHOLD.
*/

let THRESHOLD = 12;
const vector = [5, 2, 16, 4, 3, 18, 20];
let res;

res = vector.every(function (element, index, array) {
    console.log("element:", element);
    if (element >= THRESHOLD) {
        return false;
    }

    return true;
});
console.log("res:", res);  // res: false
// логи:
// element: 5
// element: 2
// element: 16
// every() - все элементы должны соответствовать функции

res = vector.some(function (element, index, array) {
    console.log("element:", element);
    if (element >= THRESHOLD) {
        return true;
    }

    return false;
});
console.log("res:", res);  // res: true
// логи:
// element: 5
// element: 2
// element: 16
// хотя бы 1 элемент должен соответствовать функции

/*
Функция копирования объекта
Следующий код создаёт копию переданного объекта. Существует несколько способов создания копии объекта, и это один из них. Он позволяет понять, каким образом работает Array.prototype.forEach(), используя функции мета-свойств Object.* из ECMAScript 5.
*/

function copy(o) {
    let copy = Object.create(Object.getPrototypeOf(o));
    let propNames = Object.getOwnPropertyNames(o);

    propNames.forEach(function (name) {
        let desc = Object.getOwnPropertyDescriptor(o, name);
        Object.defineProperty(copy, name, desc);
    });

    return copy;
}

let o1 = { a: 1, b: 2 };
console.log(o1);  // { a: 1, b: 2 }
let o2 = copy(o1); // теперь o2 выглядит также, как и o1
console.log(o2);  // { a: 1, b: 2 }
// но это разные объекты
o2.c = 3;
console.log(o1);  // { a: 1, b: 2 }
console.table(o2);  // { a: 1, b: 2, c: 3 }

/*
Модификация массива во время итерации
В следующем примере в лог выводится "one", "two", "four".

При достижении записи, содержащей значение 'two', первая запись всего массива удаляется, в результате чего все оставшиеся записи перемещаются на одну позицию вверх. Поскольку элемент 'four' теперь находится на более ранней позиции в массиве, 'three' будет пропущен.

forEach() не делает копию массива перед итерацией.
*/

let words5 = ["one", "two", "three", "four"];
words5.forEach((word) => {
    console.log(word);
    if (word === "two") {
        words5.shift();
    }
});
// one
// two
// four

/*
Выравнивание (уплощение) массива
Следующий пример приведён только для целей обучения. Если вы хотите выравнять массив с помощью встроенных методов, вы можете использовать Array.prototype.flat()
*/

function flatten(arr) {
    const result = [];

    arr.forEach((i) => {
        if (Array.isArray(i)) {
            result.push(...flatten(i));
        } else {
            result.push(i);
        }
    });

    return result;
}

// Usage
const nested = [1, 2, 3, [4, 5, [6, 7], 8, 9]];

console.log(flatten(nested)); // [1, 2, 3, 4, 5, 6, 7, 8, 9]



console.log("**Для преобразования массива*************************");


console.log("**15)Array map()************************");
/*
Метод map() создаёт новый массив с результатом вызова указанной функции для каждого элемента массива.

Синтаксис
const new_array = arr.map(function callback( currentValue[, index[, array]]) {
    // Возвращает элемент для new_array
}[, thisArg])
Параметры
callback - Функция, вызываемая для каждого элемента массива arr. Каждый раз, когда callback выполняется, возвращаемое значение добавляется в new_array.

Функция callback, создающая элемент в новом массиве, принимает три аргумента:

currentValue - Текущий обрабатываемый элемент массива.

indexНеобязательный 
Индекс текущего обрабатываемого элемента в массиве.

arrayНеобязательный
Массив, по которому осуществляется проход.

thisArgНеобязательный
Необязательный параметр. Значение, используемое в качестве this при вызове функции callback

Возвращаемое значение
Новый массив, где каждый элемент является результатом callback функции.

Описание
Метод map вызывает переданную функцию callback один раз для каждого элемента, в порядке их появления и конструирует новый массив из результатов её вызова. Функция callback вызывается только для индексов массива, имеющих присвоенные значения, включая undefined. Она не вызывается для пропущенных элементов массива (то есть для индексов, которые никогда не были заданы, которые были удалены или которым никогда не было присвоено значение.

Функция callback вызывается с тремя аргументами: значением элемента, индексом элемента и массивом, по которому осуществляется проход.

Если в метод map был передан параметр thisArg, при вызове callback он будет использоваться в качестве значения this. В противном случае в качестве значения this будет использоваться значение undefined. В конечном итоге, значение this, наблюдаемое из функции callback, определяется согласно обычным правилам определения this, видимого из функции.

Метод map не изменяет массив, для которого он был вызван (хотя функция callback может это делать).

Диапазон элементов, обрабатываемых методом map, устанавливается до первого вызова функции callback. Элементы, добавленные в массив после начала выполнения метода map, не будут посещены функцией callback. Если существующие элементы массива изменяются функцией callback, их значения, переданные в функцию, будут значениями на тот момент времени, когда метод map посетит их; удалённые элементы посещены не будут.

Примеры
Пример: отображение массива чисел на массив квадратных корней
Следующий код берёт массив чисел и создаёт новый массив, содержащий квадратные корни чисел из первого массива.
*/

const numbers7 = [1, 4, 9];
const roots = numbers7.map(Math.sqrt);
console.log(numbers7);  // [1, 4, 9]
console.log(roots);  // [ 1, 2, 3 ]
// теперь roots равен [1, 2, 3], а numbers7 всё ещё равен [1, 4, 9]

/*
Пример: отображение массива чисел с использованием функции, содержащей аргумент
Следующий код показывает, как работает отображение, когда функция требует один аргумент. Аргумент будет автоматически присваиваться каждому элементу массива, когда map проходит по оригинальному массиву.
*/

const numbers8 = [1, 4, 9];
const doubles8 = numbers8.map((num) => num * 2);
console.log(numbers8);  // [1, 4, 9]
console.log(doubles8);  // [ 2, 8, 18 ]

// теперь doubles равен [2, 8, 18], а numbers8 всё ещё равен [1, 4, 9]
/*
Пример: обобщённое использование map
Этот пример показывает, как использовать map на объекте строки String для получения массива байт в кодировке ASCII, представляющего значения символов:
*/

const mapArr = Array.prototype.map;
const charCodes = mapArr.call("Hello World", (x) => x.charCodeAt(0));
console.log(charCodes);

// теперь charCodes равен [72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100]
/*
Пример: обобщённое использование map вместе с querySelectorAll
Этот пример показывает, как пройтись по коллекции объектов, собранных с помощью querySelectorAll. В данном случае мы получаем все выбранные опции на экране и печатаем их в консоль:

const elems = document.querySelectorAll("select option:checked");
const values = Array.prototype.map.call(elems, ({ value }) => value);
Более простым способом будет использование метода Array.from().

Пример: использование map для переворачивания строки
*/
const string = "12345";
const reversed = Array.prototype.map
    .call(string, (x) => x)
    .reverse()
    .join("");
// reversed равен '54321'
// Бонус: используйте '===' для проверки того, является ли строка палиндромом

/*
Более простым способом будет использование метода String.split() .

Пример: хитрый вариант использования

Распространённой практикой является использование колбэк-функции с одним аргументом (элемент, над которым производится операция). Некоторые функции также широко используется с одним аргументом, хотя они принимают дополнительные необязательные аргументы. Эти привычки могут привести к неожиданному поведению программы.
*/
// Рассмотрим пример:
["1", "2", "3"].map(parseInt);
console.log(["1", "2", "3"].map(parseInt));

// Хотя ожидаемый результат вызова равен [1, 2, 3],
// в действительности получаем [1, NaN, NaN]

// Функция parseInt часто используется с одним аргументом, но она принимает два.
// Первый аргумент является выражением, а второй - основанием системы счисления.
// В функцию callback Array.prototype.map передаёт 3 аргумента:
// элемент, его индекс и сам массив.
// Третий аргумент игнорируется parseInt, но не второй, следовательно,
// возможна путаница.

const returnInt = (element) => parseInt(element, 10);

["1", "2", "3"].map(returnInt);
// Результатом является массив чисел (как и ожидалось)

// Простейший способ добиться вышеозначенного поведения и избежать чувства "чё за!?":
["1", "2", "3"].map(Number); // [1, 2, 3]



console.log("**16)Array sort()************************");

/*
Метод sort() на месте сортирует элементы массива и возвращает отсортированный массив. Сортировка не обязательно устойчива (англ.). Порядок сортировки по умолчанию соответствует порядку кодовых точек Unicode.

Синтаксис
arr.sort([compareFunction])
Параметры
compareFunction
Необязательный параметр. Указывает функцию, определяющую порядок сортировки. Если опущен, массив сортируется в соответствии со значениями кодовых точек каждого символа Unicode, полученных путём преобразования каждого элемента в строку.

Возвращаемое значение
Отсортированный массив. Важно, что копия массива не создаётся - массив сортируется на месте.

Описание
Если функция сравнения compareFunction не предоставляется, элементы сортируются путём преобразования их в строки и сравнения строк в порядке следования кодовых точек Unicode. Например, слово "Вишня" идёт перед словом "бананы". При числовой сортировке, 9 идёт перед 80, но поскольку числа преобразуются в строки, то "80" идёт перед "9" в соответствии с порядком в Unicode.
*/

console.log("я".charCodeAt(0))  // 1103
console.log("Ё".charCodeAt(0))  // 1025

const fruit7 = ["арбузы", "бананы", "Вишня"];
console.log(fruit7.sort()); // ['Вишня', 'арбузы', 'бананы']

const scores2 = [1, 2, 10, 21];
scores2.sort(); // [1, 10, 2, 21]
console.log(scores2);

const things2 = ["слово", "Слово", "1 Слово", "2 Слова"];
things2.sort(); // ['1 Слово', '2 Слова', 'Слово', 'слово']
console.log(things2)
/*
// В Unicode, числа находятся перед буквами в верхнем регистре,
// а те, в свою очередь, перед буквами в нижнем регистре.
Если функция сравнения compareFunction предоставлена, элементы массива сортируются в соответствии с её возвращаемым значением. Если сравниваются два элемента a и b, то:

Если compareFunction(a, b) меньше 0, сортировка поставит a по меньшему индексу, чем b, то есть, a идёт первым.
Если compareFunction(a, b) вернёт 0, сортировка оставит a и b неизменными по отношению друг к другу, но отсортирует их по отношению ко всем другим элементам. Обратите внимание: стандарт ECMAscript не гарантирует данное поведение, и ему следуют не все браузеры (например, версии Mozilla по крайней мере, до 2003 года).
Если compareFunction(a, b) больше 0, сортировка поставит b по меньшему индексу, чем a.
Функция compareFunction(a, b) должна всегда возвращать одинаковое значение для определённой пары элементов a и b. Если будут возвращаться непоследовательные результаты, порядок сортировки будет не определён.
Итак, функция сравнения имеет следующую форму:

 
function compare(a, b) {
  if (a меньше b по некоторому критерию сортировки) {
    return -1;
  }
  if (a больше b по некоторому критерию сортировки) {
    return 1;
  }
  // a должно быть равным b
  return 0;
}
Для числового сравнения, вместо строкового, функция сравнения может просто вычитать b из a. 

Следующая функция будет сортировать массив по возрастанию:


function compareNumbers(a, b) {
  return a - b;
}


Метод sort можно удобно использовать с функциональными выражениями (и замыканиями):
*/

const numbers9 = [4, 2, 5, 1, 3];
numbers9.sort(function (a, b) {
    return a - b;
});
console.log(numbers9); // [1, 2, 3, 4, 5]

console.log([12, 25, 1, 2, 28].sort());  //  [ 1, 12, 2, 25, 28 ]

console.log([12, 25, 1, 2, 28].sort(function (a, b) { return a - b; }));  //  [ 1, 2, 12, 25, 28 ]

console.log([12, 25, 1, 2, 28].sort((a, b) => a - b));  // [ 1, 2, 12, 25, 28 ]

console.log(["s", "S", "sab", "zts"].sort());  // [ 'S', 's', 'sab', 'zts' ]
console.log(["s", "S", "sab", "zts"].sort((a, b) => b.localeCompare(a)));  // [ 'zts', 'sab', 'S', 's' ]

/*
Для сортировки строк по убыванию нужно использовать b.localeCompare(a)
Объекты могут быть отсортированы по значению одного из своих свойств.
*/

const items3 = [
    { name: "Edward", value: 21 },
    { name: "Sharpe", value: 37 },
    { name: "And", value: 45 },
    { name: "The", value: -12 },
    { name: "Magnetic" },
    { name: "Zeros", value: 37 },
];
items3.sort(function (a, b) {
    if (a.name > b.name) {
        return 1;
    }
    if (a.name < b.name) {
        return -1;
    }
    // a должно быть равным b
    return 0;
});

console.log(items3);
/*
выведет:
[
  { name: 'And', value: 45 },
  { name: 'Edward', value: 21 },
  { name: 'Magnetic' },
  { name: 'Sharpe', value: 37 },
  { name: 'The', value: -12 },
  { name: 'Zeros', value: 37 }
]


Примеры
Пример: создание, отображение и сортировка массива
В следующем примере создаётся четыре массива, сначала отображается первоначальный массив, а затем они сортируются. Числовые массивы сортируются сначала без, а потом с функцией сравнения.
*/

const stringArray = ["Голубая", "Горбатая", "Белуга"];
const numericStringArray = ["80", "9", "700"];
const numberArray = [40, 1, 5, 200];
const mixedNumericArray = ["80", "9", "700", 40, 1, 5, 200];

function compareNumbers(a, b) {
    return a - b;
}

// снова предполагаем, что функция печати определена
console.log("stringArray: ", stringArray.join());
console.log("Сортировка: ", stringArray.sort());

console.log("numberArray: ", numberArray.join());
console.log("Сортировка без функции сравнения: ", numberArray.sort());
console.log(
    "Сортировка с функцией compareNumbers: ",
    numberArray.sort(compareNumbers),
);

console.log("numericStringArray: ", numericStringArray.join());
console.log("Сортировка без функции сравнения: ", numericStringArray.sort());
console.log(
    "Сортировка с функцией compareNumbers: ",
    numericStringArray.sort(compareNumbers),
);

console.log("mixedNumericArray: ", mixedNumericArray.join());
console.log("Сортировка без функции сравнения: ", mixedNumericArray.sort());
console.log(
    "Сортировка с функцией compareNumbers: ",
    mixedNumericArray.sort(compareNumbers),
);

/*
Этот пример произведёт следующий вывод. Как показывает вывод, когда используется функция сравнения, числа сортируются корректно вне зависимости от того, являются ли они собственно числами или строками с числами.

stringArray: Голубая,Горбатая,Белуга
Сортировка: Белуга,Голубая,Горбатая

numberArray: 40,1,5,200
Сортировка без функции сравнения: 1,200,40,5
Сортировка с функцией compareNumbers: 1,5,40,200

numericStringArray: 80,9,700
Сортировка без функции сравнения: 700,80,9
Сортировка с функцией compareNumbers: 9,80,700

mixedNumericArray: 80,9,700,40,1,5,200
Сортировка без функции сравнения: 1,200,40,5,700,80,9
Сортировка с функцией compareNumbers: 1,5,9,40,80,200,700


Пример: сортировка не-ASCII символов
Для сортировки строк с не-ASCII символами, то есть строк с символами акцента (e, é, è, a, ä и т.д.), строк, с языками, отличными от английского: используйте String.localeCompare. Эта функция может сравнивать эти символы, чтобы они становились в правильном порядке.
*/

const items4 = ["réservé", "premier", "cliché", "communiqué", "café", "adieu"];
items4.sort(function (a, b) {
    return a.localeCompare(b);
});
console.log(items4);

// items4 равен ['adieu', 'café', 'cliché', 'communiqué', 'premier', 'réservé']

/*
Пример: сортировка c помощью map
Функция сравнения (compareFunction) может вызываться несколько раз для каждого элемента в массиве. В зависимости от природы функции сравнения, это может привести к высоким расходам ресурсов. Чем более сложна функция сравнения и чем больше элементов требуется отсортировать, тем разумнее использовать map для сортировки. 
Идея состоит в том, чтобы обойти массив один раз, чтобы извлечь фактические значения, используемые для сортировки, во временный массив, отсортировать временный массив, а затем обойти временный массив для получения правильного порядка.
*/

// массив для сортировки
const list2 = ["Дельта", "альфа", "ЧАРЛИ", "браво"];

// временный массив содержит объекты с позицией и значением сортировки
const mapped = list2.map(function (el, i) {
    return { index: i, value: el.toLowerCase() };
});

// сортируем массив, содержащий уменьшенные значения
mapped.sort(function (a, b) {
    if (a.value > b.value) {
        return 1;
    }
    if (a.value < b.value) {
        return -1;
    }
    return 0;
});

// контейнер для результа
const result7 = mapped.map(function (el) {
    return list2[el.index];
});[
    { index: 1, value: 'альфа' },
    { index: 3, value: 'браво' },
    { index: 0, value: 'дельта' },
    { index: 2, value: 'чарли' }
]

console.log(mapped); // [
//     { index: 1, value: 'альфа' },
//     { index: 3, value: 'браво' },
//     { index: 0, value: 'дельта' },
//     { index: 2, value: 'чарли' }
//   ]

console.log(result7); // [ 'альфа', 'браво', 'Дельта', 'ЧАРЛИ' ]

console.log(list2);  // [ 'Дельта', 'альфа', 'ЧАРЛИ', 'браво' ]


console.log("**17)Array reverse()************************");

/*
Метод reverse() на месте обращает порядок следования элементов массива. Первый элемент массива становится последним, а последний — первым.

пример
*/
const array5 = ["one", "two", "three"];
console.log("array5: ", array5);  // array5: [ 'one', 'two', 'three' ]

const reversed2 = array5.reverse();
console.log("reversed: ", reversed2); // reversed:  [ 'three', 'two', 'one' ]
console.log("array5: ", array5); // изменился начальный массив array5: [ 'three', 'two', 'one' ]

/*
Синтаксис
array.reverse()
Параметры
Нет.

Возвращаемое значение
Перевёрнутый массив

Описание
Метод reverse() на месте переставляет элементы массива, на котором он был вызван, изменяет массив и возвращает ссылку на него.

Примеры
Пример: обращение порядка элементов в массиве
В следующем примере создаётся массив myArray, содержащий три элемента, а затем массив переворачивается.
*/
const myArray = ["один", "два", "три"];
myArray.reverse();

console.log(myArray); // ['три', 'два', 'один']


console.log("**19)Array reduce()************************");

/*
Метод reduce() применяет функцию reducer к каждому элементу массива (слева-направо), возвращая одно результирующее значение.

 пример
*/
const numbersArr = [1, 2, 3, 4];

const initialValue = 0;
const sumWithInitial = numbersArr.reduce(
    (accumulator, currentValue) => accumulator + currentValue, initialValue,
);

console.log(sumWithInitial);  // 10
/*
Синтаксис
array.reduce(callback[, initialValue])
Параметры
callback
Функция, выполняющаяся для каждого элемента массива, принимает четыре аргумента:

accumulator
Аккумулятор, аккумулирующий значение, которое возвращает функция callback после посещения очередного элемента, либо значение initialValue, если оно предоставлено (смотрите пояснения ниже).

currentValue
Текущий обрабатываемый элемент массива.

indexНеобязательный
Индекс текущего обрабатываемого элемента массива.

arrayНеобязательный
Массив, для которого была вызвана функция reduce.

initialValueНеобязательный
Необязательный параметр. Объект, используемый в качестве первого аргумента при первом вызове функции callback.

Описание
Метод reduce() выполняет функцию callback один раз для каждого элемента, присутствующего в массиве, за исключением пустот, принимая четыре аргумента: начальное значение (или значение от предыдущего вызова callback), значение текущего элемента, текущий индекс и массив, по которому происходит итерация.

При первом вызове функции, параметры accumulator и currentValue могут принимать одно из двух значений. Если при вызове reduce() передан аргумент initialValue, то значение accumulator будет равным значению initialValue, а значение currentValue будет равным первому значению в массиве. Если аргумент initialValue не задан, то значение accumulator будет равным первому значению в массиве, а значение currentValue будет равным второму значению в массиве.

Если массив пустой и аргумент initialValue не указан, будет брошено исключение TypeError. Если массив состоит только из одного элемента (независимо от его положения в массиве) и аргумент initialValue не указан, или если аргумент initialValue указан, но массив пустой, то будет возвращено одно это значение, без вызова функции callback.

Предположим, что reduce() используется следующим образом:
*/
[0, 1, 2, 3, 4].reduce(function (previousValue, currentValue, index, array) {
    return previousValue + currentValue;
});
/*
Колбэк-функция будет вызвана четыре раза, аргументы и возвращаемое значение при каждом вызове будут следующими:

    previousValue	index   array	 
            currentValue          возвращаемое значение
первый вызов	0	1	1	[0, 1, 2, 3, 4]	1
второй вызов	1	2	2	[0, 1, 2, 3, 4]	3
третий вызов	3	3	3	[0, 1, 2, 3, 4]	6
четвёртый вызов	6	4	4	[0, 1, 2, 3, 4]	10
Значение, возвращённое методом reduce() будет равным последнему результату выполнения колбэк-функции — 10.

Если же вы зададите начальное значение initialValue, результат будет выглядеть так:
*/

[0, 1, 2, 3, 4].reduce(function (accumulator, currentValue, index, array) {
    return accumulator + currentValue;
}, 10);
/*
accumulator	currentValue	index	array	возвращаемое значение
первый вызов	10	0	0	[0, 1, 2, 3, 4]	10
второй вызов	10	1	1	[0, 1, 2, 3, 4]	11
третий вызов	11	2	2	[0, 1, 2, 3, 4]	13
четвёртый вызов	13	3	3	[0, 1, 2, 3, 4]	16
пятый вызов	    16	4	4	[0, 1, 2, 3, 4]	20

Значение, возвращённое методом reduce() на этот раз, конечно же, будет равным 20.

Примеры
Суммирование всех значений в массиве
*/
let total = [0, 1, 2, 3].reduce(function (a, b) {
    return a + b;
});
console.log(total);  // total == 6
/*
Суммирование значений в массиве объектов
Чтобы суммировать значения, содержащиеся в массиве объектов, вы должны указать initialValue, чтобы каждый элемент смог пройти через callback.
*/
let initialValueZero = 0;
var sum2 = [{ x: 1 }, { x: 2 }, { x: 3 }].reduce(function (
    accumulator,
    currentValue,
) {
    return accumulator + currentValue.x;
}, initialValueZero);

console.log(sum2);
// sum2 == 6
/*
Тоже самое, но со стрелочной функцией:
*/
let zeroInitialValue = 0;
var sum3 = [{ x: 1 }, { x: 2 }, { x: 3 }].reduce(
    (accumulator, currentValue) => accumulator + currentValue.x,
    zeroInitialValue,
);
// sum3 == 6
/*
Разворачивание массива массивов
*/
const flattened = [
    [0, 1],
    [2, 3],
    [4, 5],
].reduce(function (a, b) {
    return a.concat(b);
});

console.log(flattened);  // flattened равен [0, 1, 2, 3, 4, 5]
/*
Пример: склеивание массивов, содержащихся в объектах массива, с использованием оператора расширения и initialValue
*/

// friends - список из объектов(друзей)
// где поле "books" - список любимых книг друга
const friends = [
    { name: "Anna", books: ["Bible", "Harry Potter"], age: 21 },
    { name: "Bob", books: ["War and peace", "Romeo and Juliet"], age: 26 },
    { name: "Alice", books: ["The Lord of the Rings", "The Shining"], age: 18 },
];

// allbooks - список, который будет содержать все книги друзей +
// дополнительный список указанный в initialValue (previous); current - текущий элемент массива=книги текущего друга
const allbooks = friends.reduce(
    function (prev, curr) {
        return [...prev, ...curr.books];
    },
    ["Alphabet"],
);

console.log(allbooks);
// allbooks = ["Alphabet", "Bible", "Harry Potter", "War and peace",
// "Romeo and Juliet", "The Lord of the Rings", "The Shining"]


console.log("**20)Array reduceRight()********************");
/*
Метод reduceRight() применяет функцию к аккумулятору и каждому значению массива (справа-налево), сводя его к одному значению.

Синтаксис
arr.reduceRight(callback[, initialValue])
Параметры
callback - Функция, выполняющаяся для каждого элемента массива, принимает четыре аргумента:

previousValue
Значение, возвращённое предыдущим выполнением функции callback, либо значение initialValue, если оно предоставлено (смотрите пояснения ниже).

currentValue - Текущий обрабатываемый элемент массива.

index - Индекс текущего обрабатываемого элемента массива.

array - Массив, для которого была вызвана функция reduceRight.

initialValue
Необязательный параметр. Объект, используемый в качестве первого аргумента при первом вызове функции callback.

Описание
Метод reduceRight() выполняет функцию callback один раз для каждого элемента, присутствующего в массиве, за исключением пустот, принимая четыре аргумента: начальное значение (или значение от предыдущего вызова callback), значение текущего элемента, текущий индекс и массив, по которому происходит итерация.

Вызов колбэк-функции callback будет выглядеть так:

array.reduceRight(function (previousValue, currentValue, index, array) {
  // ...
});
При первом вызове функции, параметры previousValue и currentValue могут принимать одно из двух значений. Если при вызове reduceRight() передан аргумент initialValue, то значение previousValue будет равным значению initialValue, а значение currentValue будет равным последнему значению в массиве. Если аргумент initialValue не задан, то значение previousValue будет равным последнему значению в массиве, а значение currentValue будет равным второму с конца значению в массиве.

Если массив пустой и аргумент initialValue не указан, будет брошено исключение TypeError. Если массив состоит только из одного элемента (независимо от его положения в массиве) и аргумент initialValue не указан, или если аргумент initialValue указан, но массив пустой, то будет возвращено одно это значение, без вызова функции callback.

Вот так будут выглядеть некоторый примеры прогона функции:
*/

[0, 1, 2, 3, 4].reduceRight(
    function (previousValue, currentValue, index, array) {
        return previousValue + currentValue;
    },
);
/*
Колбэк-функция будет вызвана четыре раза, аргументы и возвращаемое значение при каждом вызове будут следующими:

        previousValue	currentValue	index	    array	    возвращаемое значение
первый вызов	4	        3	            3	[0, 1, 2, 3, 4]	        7
второй вызов	7	        2	            2	[0, 1, 2, 3, 4]	        9
третий вызов	9	        1	            1	[0, 1, 2, 3, 4]	        10
четвёртый вызов	10	        0	            0	[0, 1, 2, 3, 4]	        10
Значение, возвращённое методом reduceRight() будет равным последнему результату выполнения колбэк-функции — 10.

Если же вы зададите начальное значение initialValue, результат будет выглядеть так:
*/

[0, 1, 2, 3, 4].reduceRight(function (
    previousValue,
    currentValue,
    index,
    array,
) {
    return previousValue + currentValue;
}, 10);
/*
            previousValue	currentValue	index	    array	     возвращаемое значение
первый вызов	10	            4	          4	    [0, 1, 2, 3, 4]	    14  
второй вызов	14	            3	          3	    [0, 1, 2, 3, 4]	    17
третий вызов	17	            2	          2	    [0, 1, 2, 3, 4]	    19
четвёртый вызов	19	            1	          1	    [0, 1, 2, 3, 4]	    20
пятый вызов	    20	            0	          0	    [0, 1, 2, 3, 4]	    20
Значение, возвращённое методом reduceRight() на этот раз, конечно же, будет равным 20.

Примеры
Пример: суммирование всех значений в массиве
*/
const total2 = [0, 1, 2, 3].reduceRight(function (a, b) {
    return a + b;
});
console.log(total2); // total2 == 6

/*
Пример: разворачивание массива массивов
*/
const flattened2 = [
    [0, 1],
    [2, 3],
    [4, 5],
].reduceRight(function (a, b) {
    return a.concat(b);
}, []);
console.log(flattened2); // flattened2 равен [4, 5, 2, 3, 0, 1]