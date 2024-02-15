let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numberMax = 10;
function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function intentoUser() {
    let numberUser = parseInt(document.getElementById('valorUser').value);
    if (numberUser === numeroSecreto){
        asignarTextoElemento('p',`Acertaste  en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute("disabled");
        document.getElementById('iniciar').setAttribute('disabled' , true);

    } else {
        if (numberUser < numeroSecreto) {
            asignarTextoElemento('p', 'El número secreto es mayor');
        }else if (numberUser > numeroSecreto) {
            asignarTextoElemento('p', 'El número secreto es menor');
        }
        intentos++;
        limpiarCampo()
    }
return;
}
function limpiarCampo(){
   document.querySelector('#valorUser').value = '';
}

function condicionesiniciales(){
    asignarTextoElemento('h1','Juego del número secreto');
    asignarTextoElemento('p',`Indica un numero del 1 al ${numberMax}.`);
    intentos=1;
    numeroSecreto =generarNumeroSecreto();
}
function reiniciar() {
    limpiarCampo();
    condicionesiniciales();
    document.getElementById('iniciar').removeAttribute("disabled");
    document.getElementById('reiniciar').setAttribute('disabled' , true);
}
function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numberMax)+1;
    if (listaNumerosSorteados.length == numberMax){
        asignarTextoElemento('p', 'Ya se han sorteado la cantidad posible de numeros sorteados');
    }else {
    if(listaNumerosSorteados.includes(numeroGenerado)) {
        return generarNumeroSecreto();
    }else{
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
    }
}
}
condicionesiniciales();
