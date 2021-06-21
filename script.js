"use strict";
let Jane = {
    name: "Jane",
    score: 98,
    date: "2020-01-24",
    passed: true
};
let Joe = {
    name: "Joe",
    score: 77,
    date: "2018-05-14",
    passed: true

};
let Jack = {
    name: "Jack",
    score: 59,
    date: "2019-07-05",
    passed: false
};
let Jill = {
    name: "Jill",
    score: 88,
    date: "2020-04-22",
    passsed: true
};

let submissions = [Jane, Joe, Jack, Jill];

function addSubmission(array, newName, newScore, newDate) {
   let newObject = array ={     
        name: newName,
        score: newScore,
        date: newDate,
        passed: newScore >= 60
    };
    submissions.push(newObject);
    
}

function deleteSubmissionByIndex(array, index){
    submissions.splice(index, 1)
}



function deleteSubmissionByName(array, name) {
    submissions.splice(submissions.indexOf(name), 1)
};

function editSubmission(array, index, newScore) {
    submissions[index].score = newScore
    if (newScore > 59) {passed = true}
    //add pass/fail
};


// function findSubmissionByScore(){
//     return submissions.score === 59
// }



// function findSubmissionByName (array, findName){
//     console.log(
//         submissions.filter(submission => {
//             submission.name === findName
//         } )
//     )
// }


// TEST ARRAY
var orders = [
    { drink: 'Cappuccino', name: 'John Appleseed' }, 
    { drink: 'Espresso', name: 'Mya Stuart' },
    { drink: 'Cappuccino', name: 'Emma Berry' }
    ];

var check_orders = orders.filter(order => (order.name === "John Appleseed"));

// BACK TO THE THINGS

let checkName = submissions.filter(submission => (submission.name === "Jill"));

function xscore(findScore){
    let checkScore = submissions.filter(submission => (submission.score === findScore));
    console.log(checkScore);
};

function findSubmissionByName(findName){
    let checkName = submissions.filter(submission => (submission.name === findName));
    console.log(checkName);
};


// function findSubmissionByName (findName){
//     submissions.filter(submission => (submission.name === findName));
// }


// submissions.findIndex(function(submission){
//     return submission.score === 59})

// function findSubmissionByScore (findScore) {
//     submissions.findIndex(function(submission){
//             return submission.score === findScore})
// }

console.log("hello")