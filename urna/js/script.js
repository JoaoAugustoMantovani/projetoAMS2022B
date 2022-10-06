/*Botões*/
var arr = []
function inserir(valor) {
    /*Som*/
    const button = document.getElementById('btn_1')
    button.addEventListener('click', audioBotoes());
    /*Função*/
    arr.push(valor)
    document.getElementById("txtVoto").value = arr.slice(0,2).join("");
}

function mostrar(){
    document.getElementById('txtVoto')
}

/*Audio dos Botões*/
function audioBotoes() {
    const audioBotoes = document.getElementById('AudioBotoes')
    audioBotoes.play()
}
function audioConfirma() {
    const audioConfirma = document.getElementById('AudioConfirma')
    audioConfirma.play()
}

/*Botão Corrige*/
function corrige() {
    /*Som*/
    const button = document.getElementById('btn_1')
    button.addEventListener('click', audioBotoes());
    /*Função*/
    document.getElementById("txtVoto").value = "";
    arr = []
}

/*Botão Confirma*/
function confirma() {

    const button = document.getElementById('btnConfirma')
    button.addEventListener('click', audioConfirma());

    if (document.getElementById("txtVoto").value == 1) {
        document.getElementById("imgCandidato").scr = "img/CaboDaciolo.jpg";
    }
}

function branco() {
    const button = document.getElementById('btnBranco');
    button.addEventListener('click', audioBotoes());
}

function mudarImagem() {
    let vVoto = parseInt(document.getElementById("txtVoto"));

    if (vVoto == 1) {
        document.getElementById("imgCandidato").src = "img/CaboDaciolo.jpg"
    } else if (vVoto == 2) {

    }
    if (vVoto == 1) {
        document.getElementById("imgCandidato").src = "img/CaboDaciolo.jpg"
    } else if (vVoto == 2) {

    }
    if (vVoto == 1) {
        document.getElementById("imgCandidato").src = "img/CaboDaciolo.jpg"
    } else if (vVoto == 2) {

    }

}