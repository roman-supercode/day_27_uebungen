// Schreibe eine Funktion, um die Daten von der Selectbox zu erhalten.

const briefUndPostkarte = `<b>Brief und Postkarte</b> <br>
    	L: 10 - 23,5 cm
    	B: 7 - 12,5 cm
    	H: bis 1 cm`;

const paket2Kg = `<b>DHL Paket 2 kg</b> <br>
      bis 60 x 30 x 15 cm`;

const paket5Kg = `<b>DHL Paket 5 kg</b> <br>
      bis 120 x 60 x 60 cm`;

const paket10Kg = `<b>DHL Paket 10 kg</b> <br>
      bis 120 x 60 x 60 cm
      <b>Extra große Größe</b>`;


const showtxt = () => {
      const select = document.getElementById("mylist").value;
      const output = document.getElementById("masse");

      switch (select) {
            case "0":
                  output.innerHTML = briefUndPostkarte;
                  break;
            case "1":
                  output.innerHTML = paket2Kg;
                  break;
            case "2":
                  output.innerHTML = paket5Kg;
                  break;
            case "3":
                  output.innerHTML = paket10Kg;
                  break;
            default:
                  output.innerHTML = "Auswahl treffen!";
      }
};
