let count = 0
document.getElementById("button-rules").addEventListener("click", function(){
    count++
    document.getElementById("regras").classList.toggle("hidden")
    document.getElementById("creditos").classList.add("hidden")
    document.getElementById("paragrafo").innerText = "O jogo é uma espécie de jogo da velha, que consiste em fichas vermelhas e azuis, e um tabuleiro bilateral e vertical, com diversos furos, e um botão deslizante amarelo na parte inferior do tabuleiro, para remoção das fichas. O objetivo do jogo é ir colocando as fichas, até que o jogador consiga colocar 4 fichas em linha (podendo ser na horizontal ou na vertical), e impedir que o adversário consiga o mesmo."
})
document.getElementById("button-credits").addEventListener("click", function(){
    document.getElementById("creditos").classList.toggle("hidden")
    document.getElementById("regras").classList.add("hidden")
    document.getElementById("paragrafo1").innerText = "Christian"
    document.getElementById("paragrafo2").innerText = "Alexandre"
    document.getElementById("paragrafo3").innerText = "Raphael"
    document.getElementById("paragrafo4").innerText = "Eliabe"
    document.getElementById("paragrafo1").href = "https://www.linkedin.com/in/christian-sequeira-meirelles/"
    document.getElementById("paragrafo2").href = "https://twitter.com/AlexandreAlfa_"
    document.getElementById("paragrafo3").href = "https://www.linkedin.com/in/raphaelgs96/"
    document.getElementById("paragrafo4").href = "https://www.linkedin.com/in/eliabe-santos/"
})