// Gib mit Hilfe von String concatenation oder Template literals einen Satz in der Konsole und in der HTML aus, der diese Variablen nutzt.

const vorname = "Rocket";
const nachname = "Raccoon";
const alter = "unknown";
const geburtsort = "Halfworld, Keystone Quadrant";
const größe = "1.22m";
const gewicht = "24.95kg";
const hobbies = "building explosive devices and flying spaceships";

const output = `I'm ${vorname} ${nachname} my age is ${alter}. 
I'm ${größe} tall and ${gewicht} and was born in Halfworld, Keystone Quedrant. My hobbies are ${hobbies}`;

// Ausgabe in der Konsole
console.log(output);

// Ausgabe im HTML
document.getElementById("htmlAusgabe").innerHTML = output;
