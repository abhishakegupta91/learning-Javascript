console.log('>>>>>>>> IMMEDIATE LEVEL JAVASCRIPT');
// Functions
// Arrays
// Objects
// Loops
// Date Object
// Digital clock Object

// Syntax 1: to define a function: standard function declaration
// Statement Way
function funName(params) {
    // Code Block
    console.log('Inside funName');
}

funName();

function passExam(name, score) {
    var passUni = 71;
    var passColl = 51;

    if (score >= passUni) {
        console.log(name + ' has enrolled to University with '
            + score + 'points');
    } else {
        console.log(name + ' has failed');
    }
}

passExam('Adam', 65);
passExam('John', 625);
passExam('Zebra', 165);

/*
parameters - name & score, params use to define the 
function
Arguments - 'John',625 : values used to pass to function
while calling it.
*/

console.log('>>>>>>>>>> Statements & Expressions');
// Syntax 2: to define a function:
// Expression Way: assign a variable a value as function
// Anonymous functions

var sum = function (a, b) {
    console.log(a + b);
}

sum(9, 10);
// Learn about hoisting, in java script.
console.log('>>>>>>>>>> function Expressions');
/*
statements does not produce a value, like if statement
Expressions produces a value.
*/


console.log('>>>>>>> Array');
var arr = ['John',
    'Bob',
    'Mary',
    [1, 2, 3],
    [true, false],
    function(name){
        return 'Hello ' + name
    }
];
console.log(arr);
console.log({ arr });
console.log(arr[0]);
console.log(arr[4]);
console.log(arr[3][1]);
console.log(arr[5]('Jhonny'));

var arr2 = new Array('John', 48, [1,2,3]);
console.log(arr2);

// Both add-remove at the end
arr2.push(23);
console.log(arr2);
arr2.pop();
console.log(arr2);

// In the begining
arr2.shift();
arr2.unshift(44);
console.log(arr2);

console.log(arr2.indexOf(32));
console.log(arr2.indexOf('John'));
console.log(arr2.indexOf(48));


console.log('>>>>>>>> OBJECTS');

var person = new Object();
person.firstname = 'John';
person['lastname'] = 'Smith';
job = 'profession';
person[job] = 'Instructor';

person.son = new Object;
person.son.name = 'Nick';
console.log(person);

console.log('>>>>>>>> OBJECTS LESSON 2');

var person = {
    firstName: 'John',
    lastName : 'Smith',
    age:27,
    daughter:{
        name:'Mary',
        age:5,
    },
    myFunc: function(par){
        console.log(par.daughterName + ' is a daughter of '
        + par.fatherName + ' and she is ' + par.daughterAge
        + ' years old');
    }
};

console.log(person);
console.log(person.daughter.name);

person.myFunc({
    daughterName:'Jessy',
    fatherName:'Michael',
    daughterAge:5
});
