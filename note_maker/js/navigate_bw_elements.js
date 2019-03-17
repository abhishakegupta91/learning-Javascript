console.log('>>>>>>> parent & child nodes');

var listItem = document.getElementById('list');
console.log(listItem);

console.log(listItem.parentNode);
console.log(listItem.parentNode.parentNode);    

listItem.parentElement.style.background='orange';


console.log(listItem.childNodes);
console.log(listItem.children);

console.log(listItem.firstChild);
console.log(listItem.firstElementChild);

console.log(listItem.lastChild);
console.log(listItem.lastElementChild);


console.log(listItem.previousElementSibling);
console.log(listItem.previousSibling);

// sab ke sab white spaces (text) count karte hai, except Element wale