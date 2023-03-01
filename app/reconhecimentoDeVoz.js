const SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;
const elementoChute = document.getElementById('chute')


const recognition = new SpeechRecognition()
recognition.leng = 'pt-Br'

recognition.start()

recognition.addEventListener('result', onSpeack)

function onSpeack (e) {
    chute = e.results[0][0].transcript
    exibeChuteNaTela()
    verificaSeOChutePossuiUmValorValido(chute)
}

function exibeChuteNaTela (chute) {
    elementoChute.innerHTML = `
        <div>Você disse:</div>
        <span class="box">${chute}</span>
    `
}

recognition.addEventListener('end', () => recognition.start())

