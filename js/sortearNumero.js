//constantes
const menorValor = 1;
const maiorValor = 1000;
const numeroSecreto = sortearNumero();

//utilizado para que quando for mudada a constante menorVAlor ou maiorValor já altere no HTML, fiz de duas formas.
const elementoMenorValor = document.getElementById('menor-valor')
elementoMenorValor.innerHTML = menorValor

document.getElementById('maior-valor').innerHTML = maiorValor //Uma forma diferente de fazer a mesma coisa do 'elementoMenorValor'

//função
function sortearNumero() {
    return parseInt(Math.random() * maiorValor + 1)
}

console.log('O numero secreto é:', numeroSecreto);




