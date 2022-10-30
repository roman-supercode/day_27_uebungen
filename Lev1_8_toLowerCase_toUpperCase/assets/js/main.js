// toUpperCase & toLowerCase

const text = "Sam is going to codingschool";

// SAM IS GOING TO SCHOOL
let allUpperCase = text
    .replace("codingschool", "school")
    .toUpperCase();
console.log(allUpperCase);

// sam is going at school 
let allLowerCase = text
    .toLowerCase()
    .replace("codingschool", "school");
console.log(allLowerCase);

// SAM is going to SCHOOL
let SAM = text
    .slice(0, 4).toUpperCase()
    .concat(text.slice(4, -12))
    .concat(text.slice(-6).toUpperCase());

console.log(SAM);

// sam IS GOING TO school
let sam = text.slice(0, 4).toLowerCase()
    .concat(text.slice(4, -12).toUpperCase())
    .concat(text.slice(-6));
console.log(sam);

// Sam Is Going To School
let SamIsGoingTo = text.slice(0, 1).toUpperCase()
    .concat(text.slice(1, 4))
    .concat(text.slice(4, 5).toUpperCase())
    .concat(text.slice(5, 7))
    .concat(text.slice(7, 8).toUpperCase())
    .concat(text.slice(8, 13))
    .concat(text.slice(13, 14).toUpperCase())
    .concat(text.slice(14, 16))
    .concat(text.slice(22, 23).toUpperCase())
    .concat(text.slice(23));
console.log(SamIsGoingTo);

document.write(`${allUpperCase} <br> ${allLowerCase} <br> ${SAM}<br> ${sam}<br> ${SamIsGoingTo}`);