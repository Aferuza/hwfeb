
function print(string){
console.log(string);

}
print("Hellop");
print("Novo")


let a=6;
let b =9;

//way #1
function add(a,b){
    return a+b
}
add(a, b);
//2. print accepts another function as a param 
print(add(a,b));

//best to assig a var to the result of what function returns

let sum = add(a,b);
//way#2
let sum1= function add1(d,c){
    return d+c}
    //print our var - evthing happens in 1 place
console.log(sum1(5,7));

//3. in order now to have such a verbose code- use this way
let add1 = function(d,c){
    return d+c;
}

//4. arrow fn I can convert fn sum1 into an arrow anonm fn
let sumArrow =(x,y)=>{
return x+y
}
print(sumArrow(34,10));

//5. f-n decraration allows hoisting
print(subtract(34,2));
function subtract(g,w){
    return g-w
}

//6. with arrow f-ns- hoisting will not work

let square = function(n){
    console.log(n);
        return n*n;}
  let ab= square(5);
  let ba = ab+1;
  console.log(ba); // to check that the squareing took place  
//console.log(square(5));

//7. recursive fn
function recursiveF(n){
    if(n>100){
        return n}
        console.log(recursiveF(n+1));
        return n*n
    }
print(recursiveF(6));

//7.1 recursive function square it up ===========????????????????????
function squreItUp(startN){
    let square = startN * startN;
    if(square>100000){
        console.log(square);
    }else{
    squreItUp(square);
}}
console.log(squreItUp(2));

//7.2 Exit the function
function sqItUp(startNumb){
    if((typeof startNumb !=='number')||(startNumb<=1)){
        return -1;
    }
    console.log(sqItUp(5));
}



console.log(sqItUp(-4));

//8.use pop in a fn to remove el from arry
let items=["phone", "laptop", "ipad"];
function popFunc(array){
    let element = array.pop;
    return{array, element};
}
console.log(popFunc());

//9. addNums function =============????????????????????????????????
function addNums(numsToAdd){
    let sum =0;
    for(let singleNum in numsToAdd){
        sum = sum + numsToAdd[singleNum];
        return sum;
    }
}
console.log(addNums(4,7,8,9));


//10. function to return todays Date in string format
function getDate(){
    let rightD =new Date();
    console.log(rightD.toDateString());
}
console.log(getDate());

//11.calculate square of circle
function getCir(){
    let radius= 12;
    return 2*Math.PI*radius**2; // 2PR**2
}
console.log(getCir());

//12. spread operator in function ==============??????????????????
function flexNames(...arrNames){
    let welcome = "Welcome";
    for(let i=0; i<arrNames.length; i++){
        welcome=arrNames[i]+ " ";
    }
    return welcome;
}
console.log(flexNames("Karry", "Loopa", "Poory"));

//13. self invoking function- no need to invoke it separately
(function(){
    let text = "I am anonym function"
    console.log(text);
})();

//14. 