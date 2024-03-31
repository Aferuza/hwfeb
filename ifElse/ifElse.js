let x = 0;
do{
    x++;
}
while(x<5);
console.log(x); // 5

//2. Bonus if true- salary shd be multiplied by 10

function calcBonus(salary, bonus){
    if (bonus === true){
        salary*=10
    }
    return`${salary}`

}
console.log(calcBonus(5040));

//3. Make a number negative or check if its already negative
function makeNeg(num){
    if(num >0){
        return -num;
    }
    return num;

}
console.log(makeNeg(78));
//with ternary operator
//const negNum = num<o ? -num : num;

//4.