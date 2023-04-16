const btMudCor = document.querySelector("#mudaCor")

const geraNumAleatorio = () => Math.trunc(Math.random()*255)

const criaCor = () =>  `rgb(${geraNumAleatorio()}, ${geraNumAleatorio()}, ${geraNumAleatorio()})`