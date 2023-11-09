

const creaTabella = function(){
    const tombola = document.getElementById("tombola")

    for(let i=1; i <= 76; i++){
        const numDiv = document.createElement("div")
        numDiv.className = 'box'
        numDiv.innerText = i
        tombola.appendChild(numDiv)
    }
}

const estrazioneNum = function(){
    const numeriEstratti = []
    const numeroRandom = Math.floor(Math.random() * 76) + 1
    const index = numeriEstratti.indexOf(numeroRandom)

    if(index !== -1){
        const evidenziaNumEstratto = document.querySelector(`.box:nth-child(${numeroRandom})`)
        evidenziaNumEstratto.classList.add("estratto")
        numeriEstratti.push(numeroRandom)
    }
}






creaTabella()