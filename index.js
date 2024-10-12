const testo = document.getElementById("testo");

function input(input) {
    testo.value += input
}

function uguale() {
    try{
        testo.value = eval(testo.value);
    }
    catch(error){
        testo.value = "Errore";
    }
}

function pulisci() {
    testo.value = "";
}