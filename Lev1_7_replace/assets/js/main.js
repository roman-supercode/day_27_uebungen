// substring() Methode extrahiert Zeichen zwischen zwei Indizes (Positionen au einer Zeichenfolge und gibt die Teilzeichenfolge zurück.
//Indexbasiert = first position is 0, ...


const text = "Sam is good at codingschool";

// Sam is bad at school
let badAtSchool = text
    .replace("codingschool", "school") //replace multiple strings!
    .replaceAll("good", "bad"); //replace multiple strings!
console.log(badAtSchool);


// Susi is good at school 
const school = text.replace("codingschool", "school");
console.log(school);

// Sam is good at tennis
const tennis = text.replace("codingschool", "tennis");
console.log(tennis);

//Ausgabe im HTML
document.write(`${badAtSchool} <br> ${school} <br> ${tennis}`);
