//#1. for loop with strings
let strValue= "Warm sunny day";
for(let i=0; i<strValue.length; i++){
    console.log(strValue[i]);
    console.log(i);
}

//#2. str- even numbers
for(let k=0; k<strValue.length; k++){
    if(k%2===0){
        console.log("Even " + strValue[k]);
    }
    {
        console.log("Odd " + strValue[k]);
    }
}
/*
charAt()	Returns the character at a specified index (position)
charCodeAt()	Returns the Unicode of the character at a specified index
concat()	Returns two or more joined strings
constructor	Returns the string's constructor function
endsWith()	Returns if a string ends with a specified value
fromCharCode()	Returns Unicode values as characters
includes()	Returns if a string contains a specified value
indexOf()	Returns the index (position) of the first occurrence of a value in a string
lastIndexOf()	Returns the index (position) of the last occurrence of a value in a string
length	Returns the length of a string
localeCompare()	Compares two strings in the current locale
match()	Searches a string for a value, or a regular expression, and returns the matches
prototype	Allows you to add properties and methods to an object
repeat()	Returns a new string with a number of copies of a string
replace()	Searches a string for a pattern, and returns a string where the first match is replaced
replaceAll()	Searches a string for a pattern and returns a new string where all matches are replaced
search()	Searches a string for a value, or regular expression, and returns the index (position) of the match
slice()	Extracts a part of a string and returns a new string
split()	Splits a string into an array of substrings
startsWith()	Checks whether a string begins with specified characters
substr()	Extracts a number of characters from a string, from a start index (position)
substring()	Extracts characters from a string, between two specified indices (positions)
toLocaleLowerCase()	Returns a string converted to lowercase letters, using the host's locale
toLocaleUpperCase()	Returns a string converted to uppercase letters, using the host's locale
toLowerCase()	Returns a string converted to lowercase letters
toString()	Returns a string or a string object as a string
toUpperCase()	Returns a string converted to uppercase letters
trim()	Returns a string with removed whitespaces
trimEnd()	Returns a string with removed whitespaces from the end
trimStart()	Returns a string with removed whitespaces from the start
valueOf()	Returns the primitive value of a string or a string object
*/
//#4. split: converts String into Array
let str2 = "My favourite cousine is Italian".split(" ");
console.log(str2);//[ 'My', 'favourite', 'cousine', 'is', 'Italian' ]



let str3 = ["Abc", "def", "hij","klm"];
for(let i=0; i<str3.length; i++){
    for(let j=0; j<str3[i].length; j++){
       console.log(str3[i][j]);//prints each char of string separately 
} }
// output with only i for loop    output without clog[j]      output with nested loop
// def -                                 ABC                      A
// hij                                  DEF                       B
// klm                                  HIJ                       C
    
let str4= ["my fav sport is swimming"];
console.log(str4.split("").join(" ")); 