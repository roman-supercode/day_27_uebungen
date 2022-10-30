// slice() Methode extrahiert einen Teil eines Strings btw. substrings und gibt ihn in einer neuen Zeichenfolge aus. Die Methode ändert die ursprüngliche Zeichenfolge nicht.

const A = 'Susi is going to codingschool';

// Aufgabe:
// Susi
// is
// is going to school
// school
// Susi is school


//Indexbasiert = first position is 0, ...
const susi = A.slice(0, 4);
console.log(susi);

const is = A.slice(5, 7);
console.log(is);

const isGoingTo = A.slice(5, 16);
console.log(isGoingTo);

const school = A.slice(23);
console.log(school);

// Ausgabe in HTML
document.write(`${susi} <br> ${is} <br> ${isGoingTo} ${school} <br> ${school} <br> ${susi} ${is} ${school}`);
