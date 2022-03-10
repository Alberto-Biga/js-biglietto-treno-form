//RECUPERO DATO DA INPUT

let km = document.getElementById("kilometriSelezionati");
let nominativo = document.getElementById("nomeCognome");
let età = document.getElementById("fasciaEtàSelezionata");

let genera = document.getElementById("genera");

genera.addEventListener("click",
  function(){
    console.log(km.value);
    console.log(nominativo.value)
    console.log(età.value)
  }
);


//CALCOLO PREZZO
// let prezzo = ( km * 0.21 )
// console.log( prezzo)


// SCONTO 20% MINORENNE SCONTO 40% OVER 65
// let prezzoMinorenne = ( prezzo - ( prezzo * 0.2 ))
// let prezzoMinorenneArrotondato = prezzoMinorenne.toFixed(2) 
// console.log( 'prezzo minorenne  ' + prezzoMinorenneArrotondato)

// let prezzoOver65 = ( prezzo - ( prezzo * 0.4 ))
// let prezzoOver65Arrotondato = prezzoOver65.toFixed(2) 
// console.log( 'prezzo over65  ' + prezzoOver65Arrotondato)

// let prezzoStandard = prezzo
// let prezzoStandardArrotondato = prezzoStandard.toFixed(2) 
// console.log('prezzo standard  ' + prezzoStandardArrotondato)