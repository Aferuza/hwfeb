/**
// to retrieve a substring:
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


String fromCharCode()
String charCodeAt()
String concat()
String trim()
String trimStart()
String trimEnd()
String padStart()
String padEnd()
String repeat()

-----Search Methods

String search()
String match()
String matchAll()
String includes()
String startsWith()
String endsWith()
String valueOf()

------------Доступ к символам***************************************
В первом способе используется метод charAt():
*/
let stringH = "That is the best book I have read";
console.log(stringH.substring(2,4));
let cat = "кот".charAt(-1); // вернёт "о"

console.log(cat);

/*
При доступе к символам посредством нотации с квадратными скобками, попытка удалить символ, или присвоить значение числовому свойству закончится неудачей, поскольку эти свойства являются 
незаписываемыми и ненастраиваемыми - Object.defineProperty() для дополнительной информации.
*/
let кот = "кот"
// reassign
кот[1] = "ро";

console.log(кот[1] = "ро");  // ро
console.log(кот);  // кот

/*
String.fromCharCode()
Юникода -возвращает примитивную строку, а не объект String.Статический метод String.fromCharCode() 
возвращает строку, 
*/

let abc = String.fromCharCode(65, 66, 67); // "ABC"
console.log(abc);  // ABC
/*

String charCodeAt()

Метод charCodeAt() возвращает числовое значение Юникода для символа по указанному индексу (за исключением кодовых точек Юникода, больших 0x10000).
Метод charCodeAt() возвращает NaN, если указанный индекс меньше нуля или больше длины строки.
*/

let charNumber = "ABC".charCodeAt(0); // вернёт 65
console.log(charNumber);

/*

Метод padStart() заполняет текущую строку другой строкой (несколько раз, если нужно) так,
 что итоговая строка достигает заданной длины. Заполнение - в начале (слева) строки.

str.padStart(targetLength [, padString])

targetLength
Длина итоговой строки после дополнения текущей строки. Если значение меньше, чем длина текущей строки, текущая 
строка будет возвращена без изменений.

*/
console.log("abc".padStart(10)); // "       abc"
console.log("abc".padStart(10, "foo")); // "foofoofabc"
console.log("abc".padStart(6, "123465")); // "123abc"
console.log("abc".padStart(8, "0")); // "00000abc"
console.log("abc".padStart(1)); // "abc"

/*
String padEnd()- дополняет текущую строку с помощью заданной строки (в конечном счёте повторяя), 
так чтобы результирующая строка достигла заданной длины. Дополнение применяется в конце (справа) текущей строки.
*/
"abc".padEnd(10); // "abc       "
"abc".padEnd(10, "foo"); // "abcfoofoof"
"abc".padEnd(6, "123456"); // "abc123"
/*
String repeat()

repeat() конструирует и возвращает новую строку, содержащую указанное количество соединённых вместе копий строки, 
на которой он был вызван.

*/

// "абв".repeat(-1); // RangeError
console.log("абв".repeat(0)); // ''
console.log("абв".repeat(1)); // 'абв'
console.log("абв".repeat(2)); // 'абвабв'
console.log("абв".repeat(3.5)); // 'абвабвабв' (количество будет преобразовано в целое число)
// "абв".repeat(1 / 0); // RangeError

({ toString: () => "абв", repeat: String.prototype.repeat }).repeat(2);
// 'абвабв' (метод repeat() является обобщённым методом)
/*

--------------String Search Methods
search() выполняет поиск сопоставления между Regex and Object String.

str.search([regexp])

При успехе метод search() возвращает индекс первого сопоставления с регулярным выражением внутри строки. В противном случае метод вернёт -1.

используйте метод search() (он работает почти так же, как и метод test() 
регулярного выражения, но вместо наличия подстроки возвращает её индекс); для получения дополнительной информации (за счёт более медленного выполнения) используйте метод match() (работает так же, как метод exec() регулярного выражения).

function testInput(re, str) {
  let midstring;
  if (str.search(re) != -1) {
    midstring = " содержит ";
  } else {
    midstring = " не содержит ";
  }
  console.log(str + midstring + re);
}

let testString = "hey JuDe";
let re = /[A-Z]/g;

testInput(re, testString); // выведет: hey Jude содержит /[A-Z]/g
/*
String match() - для регулярных выражений

/*
String matchAll() - для регулярных выражений


console.log("Синий кит".includes("синий")); // вернёт false
/*

let str7 = "Быть или не быть вот в чём вопрос.";

console.log(str7.includes("Быть")); // true
console.log(str7.includes("вопрос")); // true
console.log(str7.includes("несуществующий")); // false
console.log(str7.includes("Быть", 1)); // false
console.log(str7.includes("БЫТЬ")); // false

/*
str.startsWith(searchString[, position])

*/
/*
Метод valueOf() возвращает примитивное значение объекта String

Метод valueOf() возвращает примитивное значение объекта String в виде строкового типа данных. Это значение эквивалентно значению вызова метода String.prototype.toString().
*/

let str4 = "Привет, мир";
console.log(typeof str);

let xStr = new String("Привет, мир");
console.log(xStr.valueOf()); // Отобразит 'Привет, мир'
console.log(typeof xStr);  // object
console.log(typeof xStr.valueOf());  // string
 