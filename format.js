<<<<<<< format.js
let map = [
    "wwwwwww",  //botões
    "0000000",
    "0000000",
    "0000000",
    "0000000",
    "0000000",
    "0000000",
]

let jogadores = 1
let count = 0
let lineMap
let columnMap

//botões





for (let line = 1; line <= 7; line++){
    lineMap = document.createElement('div')
    lineMap.setAttribute ('id', 'line'+[line]) 
    document.getElementById('board').appendChild(lineMap) 
    for(let column = 1; column <= 7; column++){
        columnMap = document.createElement('div')
        columnMap.setAttribute('id', [line]+ ',' +[column])
        document.getElementById('line'+[line]).appendChild(columnMap)  
        if(line === 1){
            columnMap.setAttribute('class', 'button')
        }
    }
}

function jogadas() {
    if(jogadores === 1){
        //ação de criar o disco no botão acionado
        //jogadores ++
    }else{
        ////ação de criar o disco no botão acionado
        //jogadores --
    }
}
