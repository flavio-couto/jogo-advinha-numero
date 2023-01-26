function VerificaValorValido(chute) {
    const numero = +chute
    console.log(numero);

    if(chuteInvalido(numero)) { 
        elementoChute.innerHTML +=`
        <div class="mensagem_alerta">Valor informado não é um número</div>`
        return //o RETURN é pra acabar com a sequencia assim que a condição for atendida
    }

    if(numeroForaDoRange (numero)) {
       
       elementoChute.innerHTML +=`
        <div class="mensagem_alerta">número fora do limite. O número deve estar entre ${menorValor} e ${maiorValor}</div>`
        return
    }

    if(numero === numeroSecreto) { 
        document.body.innerHTML = `
        <main>
            <div class="jogo">
                <h2> Parabéns você acertou! </h2>
                <h3> O número secreto é </h3> 
                <div class="numeroSorteado"> <i class="fa-sharp fa-solid fa-arrow-right-long"></i> ${numeroSecreto} <i class="fa-sharp fa-solid fa-arrow-left-long"></i></div>
                <button id="jogar-novamente" class="botao__jogar"> * Jogar novamente *</button>    
            </div>
        </main>
        `
    } else if (numero > numeroSecreto) {
        elementoChute.innerHTML += `
        <div>O número secreto é menor <i class="fa-sharp fa-solid fa-arrow-down-long"></i></div>
        `
    } 
    else {
        elementoChute.innerHTML += `
        <div>O número secreto é maior <i class="fa-sharp fa-solid fa-arrow-up-long"></i></div>
        `
    }
}

function chuteInvalido(numero) { //Aqui ele só vai verificar se o número é realmente um número 'IS NOT A NUMBER'. Se for verdadeiro que não é um número ele dá o log acima.
    return Number.isNaN(numero);
}

function numeroForaDoRange (numero){ // Novamente retorna um TRUE or FALSE para saber se o número está dentro do permitido.
    return numero > maiorValor || numero < menorValor
}

document.body.addEventListener('click', e => { //vai procurar um click em algo com o id jogar-novamente e executar o reload()
    if (e.target.id == 'jogar-novamente') {
        window.location.reload()
    }
})