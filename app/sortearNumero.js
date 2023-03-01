const menorValor = 1
const maiorValor = 100
const numeroSecreto = geraNumeroAleatório()

function geraNumeroAleatório () {
    return parseInt(Math.random() * maiorValor + 1)
}

console.log(numeroSecreto)

const elementoMenorValor = document.getElementById("menorValor")
elementoMenorValor.innerHTML = menorValor

const elementoMaiorValor = document.getElementById('maiorValor')
elementoMaiorValor.innerHTML = maiorValor

