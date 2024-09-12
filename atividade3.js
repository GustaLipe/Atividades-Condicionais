function verificarNumeroNoIntervalo(numero, limiteInferior, limiteSuperior) {
    if (numero >= limiteInferior && numero <= limiteSuperior) {
        return true;
    } else {
        return false;
    }
}

console.log(verificarNumeroNoIntervalo(5, 1, 10));