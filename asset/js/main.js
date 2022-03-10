let genera = document.getElementById("genera");
let biglietto = document.getElementById("biglietto");

//creare l'evento al click
genera.addEventListener("click",  
  function() {
    biglietto.classList.toggle("d-none");
    let nominativo = document.getElementById("nomeCognome")    
    let  km  = document.getElementById("kilometri")
    let eta = document.getElementById("età")
    document.getElementById("nomepasseggero").innerHTML = "<h5>" + nominativo.value + "</h5>"
    document.getElementById("offerta").innerHTML = "<h5>" + eta.value + "</h5>"    
    document.getElementById("carrozza").innerHTML = "<h5> 5 </h5>"
    document.getElementById("codicecp").innerHTML = "<h5>"+ "10098" +"</h5>"

    let prezzo = km.value * 0.21
    let prezzoMinorenne = ( prezzo - ( prezzo * 0.2 ))
    let prezzoMinorenneArrotondato = prezzoMinorenne.toFixed(2) //PREZZI ARROTONDATI 2 CIFRE DECIMALI
    console.log( 'prezzo minorenne  ' + prezzoMinorenneArrotondato)

    let prezzoOver65 = ( prezzo - ( prezzo * 0.4 ))
    let prezzoOver65Arrotondato = prezzoOver65.toFixed(2) //PREZZI ARROTONDATI 2 CIFRE DECIMALI
    console.log( 'prezzo over65  ' + prezzoOver65Arrotondato)

    let prezzoStandard = prezzo
    let prezzoStandardArrotondato = prezzoStandard.toFixed(2) //PREZZI ARROTONDATI 2 CIFRE DECIMALI
    console.log('prezzo standard  ' + prezzoStandardArrotondato)


    //OUTPUT FINALE
    if ( eta.value == 1) {
        document.getElementById("costobiglietto").innerHTML ="<h5>" + prezzoMinorenneArrotondato + " euro" + "</h5>";
        console.log ('prezzo definitivo  ' + prezzoMinorenneArrotondato)
    } else if ( eta.value == 2 ) {
        document.getElementById("costobiglietto").innerHTML = "<h5>" + prezzoOver65Arrotondato + " euro" + "</h5>";
        console.log ('prezzo definitivo  ' + prezzoOver65Arrotondato)
    } else {
        document.getElementById("costobiglietto").innerHTML = "</h5>" + prezzoStandardArrotondato + " euro" + "</h5>";
        console.log ('prezzo definitivo  ' + prezzoStandardArrotondato)
    }
        }
    );