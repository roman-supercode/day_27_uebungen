// substring() Methode extrahiert Zeichen zwischen zwei Indizes (Positionen au einer Zeichenfolge und gibt die Teilzeichenfolge zurück.

const text = 'Susi is back from codingschool';

// Aufgabe:
// Susi
// is 
// school
// Susi is school


//Indexbasiert = first position is 0, ...
const susi = text.substring(0, 4);
console.log(susi);
const is = text.substring(5, 7);
console.log(is);
const school = text.substring(24);
console.log(school);

// Ausgabe in HTML
document.write(`${susi} <br> ${is} <br> ${school} <br> ${susi} ${is} ${school}`);
