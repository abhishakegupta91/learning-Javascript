console.log('Type Coercion');

var num = 10*'51';
console.log(num);

var c = 'b' + 5+10;
console.log(c);

console.log('>>>>>>>>>>> if-else statement');
if (num === 50){
    console.log("num is equal to 50");
} else if (num === 20){
    console.log("num is not equal to 20");
} else {
    console.log("num not equal");
}

console.log(">>>>>>>>>> Logical Operators");
// && - AND
// || - OR
// ! - NOT

console.log('>>>>>>>>> Coding Task 1');
var scoreOfJohn= 30;
var scoreOfNick = 75;
var pass = 51;

if (scoreOfJohn >= pass && scoreOfNick >= pass){
    console.log("Both Students passed");
} else if(scoreOfJohn >= pass || scoreOfNick >= pass){    
    console.log("One Student passed");
    if (scoreOfJohn > scoreOfNick){
        console.log('John Wins');
    } else {
        console.log('Nick Wins');
    }

} else {
    console.log("Both Students failed");
}