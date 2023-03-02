function verificaSeOChutePossuiUmValorValido(chute) {
    const numero = +chute

    if(choteForInvalido(numero)) {
        elementoChute.innerHTML += '<div>Valor inválido</div>'

        return
    }

    if (numeroForMaiorOuMenorQueOValorPermitido(numero)) {
        elementoChute.innerHTML += `<div>
            Valor inválido: O número secreto precisa estar entre ${menorValor} e ${maiorValor}
            </div>`

            return
    }

    if (numero === numeroSecreto) {
        document.body.innerHTML = `
            <h2> Você Acertou! </h2>
            <h3> O número secreto era ${numeroSecreto}</h3>

            <button id="jogarNovamente" class="btn-jogar">Jogar novamente</button>
        `
    } else if (numero > numeroSecreto) {
        elementoChute.innerHTML += `
            <div>O número secreto é menor <i class="fa-solid fa-arrow-down"></i></div>
        `
    } else {
        elementoChute.innerHTML += `
            <div>O número secreto é maior <i class="fa-solid fa-arrow-up"></i></div>
        `
    }
}

function choteForInvalido(numero) {
    return Number.isNaN(numero)
}

function numeroForMaiorOuMenorQueOValorPermitido(numero) {
    return numero > maiorValor || numero < menorValor
}

document.body.addEventListener('click', e => {
    if (e.target.id == 'jogarNovamente') {
        window.location.reload()
    }
})