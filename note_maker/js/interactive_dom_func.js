// addEventListener
var h2 = document.querySelector('header h2');

//h2.addEventListener('click', a);
// h2.addEventListener('mouseover', b);
// h2.addEventListener('click', c);
h2.addEventListener('click', d);


function a() {
    console.log('Clicked the H2 element');
}

function b() {
    console.log('On mouser over h2');
}

function c1() {
    console.log('Clicked c');
}


console.log('>>>>>>>>>> Event Objects');


function c1(e) {
    console.log(e.target);
    console.log(e);
}


function d(){
    console.log(this);
}

console.log('>>>>>>>>>> Event passing Arguments');

h2.addEventListener('click', function(){
    
    r = sum_up(5,3);
    console.log(r);
})


function sum_up(x,y){
    console.log('Summing up the numbers');
    return x+y
}


// console.log('>>>>>>>>>> Event Bubbling clicked h2 inside header ');

// var div = document.querySelector('div.wrapper');
// var header = document.querySelector('header');
// var h2 = document.querySelector('header h2');

// div.addEventListener('click', function(){
//     console.log('From div');
// });

// header.addEventListener('click', function(){
//     console.log('From header');
// });

// h2.addEventListener('click', function(){
//     console.log('From h2');
// });
// console.log('Order was h2 header and then div function');

console.log('>>>>>>>>>> Event Bubbling with Delay');

var div = document.querySelector('div.wrapper');
var header = document.querySelector('header');
var h2 = document.querySelector('header h2');

div.addEventListener('click', function(){
    let delay = new Date().getTime() + 10000;
    while(new Date() < delay){}
    console.log('From div');
});

header.addEventListener('click', function(){
    let delay = new Date().getTime() + 1000;
    while(new Date() < delay){}
    console.log('From header');
});

h2.addEventListener('click', function(){
    let delay = new Date().getTime() + 1000;
    while(new Date() < delay){}
    console.log('From h2');
});
console.log('Order was h2 header and then div function');

// To change the order of exection
// from outer to Inner, pass a 3rd parameter as true to 
// addEventListener('click', a, true);