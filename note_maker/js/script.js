let el = document.querySelector('#search-note');
console.log(el);

let el2 = document.querySelector('ul');
console.log(el2);

let el3 = document.querySelector('ul li');
console.log(el3);

let el4 = document.querySelector('ul li:nth-child(2)');
console.log(el4);


let li = document.getElementsByTagName('li');
for (var i = 0; i < li.length; i++) {
    console.log(li[i]);
}
console.log(typeof(li));
/*
 Till now li is an HTMLCollection not an array,
 So, to use Array operatons on this, we can use
 Array.from() function, available since 2015 ES5
 */

 li_array = Array.from(li);
 console.log(typeof(li_array));

 // click on down arrow and check __proto__ on console.


/* 
querySelector('header h2');
Returns only the first matching in above query, as an HTMLCollection

// querySelectorAll('header, li, #note-list');
Returns all the matching collectings in above query, as an HTMLCollection or NodeList
we can operate only forEach function on this.

// getElementsByTagName('p');
Returns all the matching tags, as an HTMLCollection

// getElementsByClassName('fa');
Returns all the matching class, as an HTMLCollection;

we can operate array operations like forEach, push, pop etc. after converting them 
to Array using Array.from(myCollection) function.

*/

console.log(">>>>>>>>>>>>>>>> forEach function >>>>>>>>>");
icons = document.querySelectorAll('.fa');

icons.forEach(function(icon, index, arr){ 
    console.log(icon, index, arr);
    icon.innerHTML = 'icon';
});


