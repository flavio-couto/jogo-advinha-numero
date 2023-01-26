SpeechRecognition = window.SpeechRecongnition || window.webkitSpeechRecognition;

elementoChute = document.getElementById('chute')

const recognition = new SpeechRecognition();
//recognition.lang = 'pt-Br';
recognition.start();

recognition.addEventListener ('result', onSpeak);

function onSpeak(e) {
    chute = e.results[0][0].transcript
    exibeChute(chute)
    VerificaValorValido(chute)
}

function exibeChute (chute) {
    elementoChute.innerHTML =`
    <p>Você disse:</p>
    <span class="box">${chute}</span>
    `
}

recognition.addEventListener('end', () => recognition.start()) //Para não desligar o mic, ele sempre que dá o END ele recomeça


