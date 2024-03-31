
let myString = 'Knowledge of built in JavaScript methods speeds up a testers work.';
console.log(myString.charAt(5)); 
console.log(myString.indexOf('J')); 
/*
s.charAt(0); или s[0]
s.charAt(s.length - 1);
извлечение подстроки:
s.substring(1, 4); 
s.substr(1, 3); 
s.slice(1, 4); 
s.slice(-3);
s.indexOf(‘l’); 
s.lastIndexOf(‘l’); 
s.split(‘, ’);
s.replace(“l”, “L”); 
s.replaceAll(“l”, “L”); 
s.toUpperCase();
s.toLowerCase(); 

*/ 

//Tatyana HW 02:
/**
 * Задача 1
Напишите программу для бара-автомата. Клиент вводит имя Name и возраст age и получает напиток. Если клиент моложе 21 года, то выводится строка “Возьмите стакан сока”, если клиенту 21 или больше,  выводится строка “Могу предложить бокал вина”, если больше 80-ти,выводится строка “Может, кефир?”

Задача 2.
Вычислить BMI = вес(кг)/рост(м)*2 и вывести комментарии: Underweight (Below 18.5) - выводит надпись “Мало каши ел(а) • Healthy Weight (18.5 - 24.9) выводит надпись “Молодец! Так держать!”• Overweight (25.0 - 29.9) выводит надпись” А тортик лучше отдать соседке” • Obesity (30.0 and Above) выводит надпись “С завтрашнего дня - на воде и огурцах!”

Задача 3
Напишите программу для расчета стоимости билетов. Для пассажиров старше 18 лет- полная цена, для младенцев младше 2 лет - 10% стоимости, для детей от 2-х до 18ти лет - 50 % стоимости, для пенсионеров старше 65 лет - 60% стоимости.

 Задача 1 Напишите последовательность команд, в результате которых
переменные х и у обменяются своими значениями. Выведите значения переменных х и у в консоль. Используйте 2 способа

Задача 2 Create variables for the names with age: Tom, Sam, Jack, Ted.
 Tom is 16, each friend is 2 years older, starting from Tom in order.

 a)Count the age of each person;

b) Insert the names with the age to the string, using concatenation and ${}:
“Tom is - 16 years old, Sam is - …. years old, Jack is … years old,
 Ted is … years old. And the total of our age is ….years old”.

 c) Find out what is the Unicode Value of the 1sr letter of the name,
and add the total to the string: “The total of the Unicode values of
 the 1st letter of the all names is ….!”.


и еще https://www.codewars.com/kata/5808e2006b65bff35500008f/train/javascript - начали разбирать и не закончили - доделать

 

 */


// var str = 'Hello World!';
//         01234567891011
// console.log(str.length);
// < str.length 
// <= str.length - 1
// for (let i=0; i < str.length; i++) {
// console.log(str[i]); // текущий элемент строки
// console.log(i);         // текущий индекс элемента
// }
// console.log(str.indexOf('W'));        // метод
/*
   for (let k=0; k < str.length; k++ ) { // цикл
     if (str[k] === "W") {
     console.log(k);
     }
   }

   for (let m=0; m < str.length; m++ ) { // цикл
     if (m % 2 === 0) {                           // если остаток от деления индекса на 2 равен 0, то есть индекс чётный,
     console.log('Чётный элемент: ' + str[m]);     // то выводим элемент строки, с указанным индексом
     } else {
     console.log('Нечётный элемент: ' + str[m]); 
     }
   }
*/
let arrayNumber = [1, 2, 3, 10, 20, 100];   // чётные элементы - 2, 10, 20, 100
        //         0  1  2   3   4    5        чётные индексы - 0, 2, 4
/*
let sum = 0;
let mult = 1;
for (let x=0; x < arrayNumber.length; x++) {
//    console.log(arrayNumber[x]);
      sum += arrayNumber[x];        // сумма элементов массива
      mult *= arrayNumber[x];       // произведение элементов массива
}
console.log(sum);
console.log(mult);

let sum1 = 0;
for (let y=0; y < arrayNumber.length; y++) {
 if (y % 2 === 0) {                             // если индекс элемента чётный, то cуммируем
 sum1 += arrayNumber[y];                      
 }   
}
console.log(sum1);

let sumEvenElements = 0;
for (let y=0; y < arrayNumber.length; y++) {
 if (arrayNumber[y] % 2 === 0) {                 // если текущий элемент массива чётный, то складываем
 sumEvenElements += arrayNumber[y];      
 }   
}
console.log(sumEvenElements);
*/
// НЕ ПУТАТЬ индексы с элементами массива!

// Задача.  Просуммировать элементы массива, находящиеся по нечётному индексу.

let arrayNumber1 = [1, 2, 3, 4, 5, 6, 7];    // Это элементы массива
//                  0  1  2  3  4  5  6      // Это индексы массива
let sumNumber = 0;                           // Сюда записываем результат суммы элементов массива
/*
for (let el=0; el < arrayNumber1.length; el++) {  // el - Это индекс элемента в массиве
  if (el % 2 === 1) {                             // Если индекс нечётный, то значение элемента массива складываем 
    sumNumber = sumNumber + arrayNumber1[el];     // 0 - чётное число
    console.log(sumNumber); 
  }
}

// console.log(sumNumber);                           //0 - 0 - 2 - 2 - 6 - 6 - 12 - 12
// Чётные числа el % 2 == 0                     - остаток от деления равен 0
// Нечётные числа el % 2 !== 0, el % 2 === 1    - остаток от деления НЕ равен 0 или равен 1
for (let i in arrayNumber1) {                 // вывод индексов массива
if (i % 2 === 1) {                             // Если индекс нечётный, то значение элемента массива складываем 
    sumNumber = sumNumber + arrayNumber1[i];     // 0 - чётное число
//    console.log(sumNumber); 
    console.log('Индекс массива ' + i + ' Сумма элементов ' + sumNumber); 
}
}

for (let el of arrayNumber1){                      // Элементы массива
    sumNumber = sumNumber + el;                    // Сумма элементов массива, не обращаясь к индексам
//    console.log(el);
    console.log(sumNumber);
}
*/
// let str = ["Hello", "World!"];
//               0        1                          // индексы
var str = 'Hello World! You are welcome'.split(" "); // разделить строку по пробелу и записать в массив, 
                                                     // где каждый элемент - строка
// console.log(str);
for (let i=0; i < str.length; i++){               // i - это индекс слова
//  console.log(str[i]);                          // текущий элемент строки - слово
  for (let j=0; j < str[i].length; j++) {         // j - это индекс буквы слова
  if (str[i][j] === 'W') {                        // i,j - это буква j для слова i
    console.log(str[i]);
//  console.log(str[i][j]);                         // выводим букву каждого слова
  }
  }
}




















