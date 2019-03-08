var date = new Date();
console.log(date);

console.log(date.getDate());
console.log(date.getDay());
console.log(date.getSeconds());
console.log(date.getUTCDay());
console.log(date.getHours());
console.log(date.getMonth());
console.log(date.getFullYear());
console.log(date.getDay());

var date = new Date("January 20 2019 10:14:08.101");
console.log(date);

console.log(date.getDate());
console.log(date.getDay());
console.log(date.getSeconds());
console.log(date.getUTCDay());
console.log(date.getHours());
console.log(date.getMonth());
console.log(date.getFullYear());
console.log(date.getDay());
console.log(date.getMilliseconds());

// Set Date Object methods

date.setFullYear(2022);
date.setDate(29);
date.setMonth(11);
console.log(date);
