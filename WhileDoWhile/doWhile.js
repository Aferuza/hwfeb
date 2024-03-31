//1.
function getUsername(username){
while(username === " "){
    console.log(" username is  ${username}");
}
console.log("Please enter your username");
}
getUsername("Anna");

//2.
let i =0;
let n = 0;
while(i<5){
    i++;
    if(i ===3){
        continue;
    }
    n+= i;
    console.log(n);//1,3,7,12
}
//3.
x=0;
do{
    x++;
}
while (x>5);
console.log(x); // 1

//4.