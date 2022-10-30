//indexOf() gibt die Position des ersten Vorkommens eines Werts in einer Zeichenfolge zurück.

const txt = "How inappropriate to call this planet Earth, when clearly it is Ocean.";


// Suche die Position des Zeichens “h” in der Variablen txt.
let result = txt.indexOf("h");
console.log(result);

// Suche die Position des Zeichens “Earth” in der Variablen txt.
result = txt.indexOf("Earth");
console.log(result);

// Suche die Position des Zeichens “Moon” in der Variablen txt.
result = txt.indexOf("Moon");
console.log(result); // -1 = wenn der Wert nicht gefinden wird

// Ausgabe erfolg in der Konsole
