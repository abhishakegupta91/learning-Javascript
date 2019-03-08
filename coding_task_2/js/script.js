/*
############################# Coding Task ##############
1. Create an array students, insert four items, which should be objects & have three properties:
name, score1, score2 with some values.

2. Suppose that students have change to get different degrees of diploma, 
like A, B, C, D, E and those degrees are relevant to the following passing limits 91, 81, 71, 61, 51.
According to that, create two arrays passing limits and for degrees.

3. Create a function that will calculate total score (score1 + score2) for each student.

4. Create function and use in it for loops, if else statements & whatever you need,
in order to figure out, which student has passed an exam and what kind of degree he has got.

5. Display the result in console.
*/

// Solution:

console.log('>>>>>>>>>>>> Coding Test');
var students = [
    ['John', 47, 46],
    ['Bob', 23, 24],
    ['Nick', 40, 35],
    ['Alex', 44, 45],
];

var degree = ['A', 'B', 'C', 'D', 'E'];
var pass_limit = [91, 81, 71, 61, 51];

function totalScore(score1, score2) {
    return score1 + score2;
}

console.log('Calculate');
for (var i = 0; i < students.length; i++) {
    total = totalScore(students[i][1], students[i][2]);
    if (total >= pass_limit[0]) {
        console.log(students[i][0] + ' has got ' + degree[0] + ' degree');
    } else if(total >= pass_limit[1]){
        console.log(students[i][0] + ' has got ' + degree[0] + ' degree');
    } else if(total >= pass_limit[2]){
        console.log(students[i][0] + ' has got ' + degree[0] + ' degree');
    } else if(total >= pass_limit[3]){
        console.log(students[i][0] + ' has got ' + degree[0] + ' degree');
    } else if(total >= pass_limit[4]){
        console.log(students[i][0] + ' has got ' + degree[0] + ' degree');
    } else{
        console.log(students[i][0] + ' Failed');
    }
}