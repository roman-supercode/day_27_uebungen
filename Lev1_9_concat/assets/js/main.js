const text1 = "Sam is going to codingschool";
const text2 = "Susi";
const text3 = "programming bike";
const text4 = "and";

// Sam is going to school and to the movie theater
let concat1 = text1
    .replace("codingschool", "school")
    .concat(" ", text4, " to the movie theater");
console.log(concat1);

// Sam is going to movie theater
let concat2 = text1
    .slice(0, 16)
    .concat("movie theater");
console.log(concat2);

// Susi and Sam are going to school
let concat3 = text2.concat(" ", text4, " ", text1.slice(0, 3), " are going to school");
console.log(concat3);

// Susi and Sam are going to gym and to the movie theater
let concat4 = text2.concat(" ", text4, " ", text1.slice(0, 3), " going to gym and theater");
console.log(concat4);

// Susi is going to school and to the movie theater
let concat5 = text2.concat(" ", text1.slice(4, 16), "school and to the movie theater");
console.log(concat5);

document.write(`${concat1} <br> ${concat2} <br> ${concat3} <br> ${concat4} <br> ${concat5}`);


