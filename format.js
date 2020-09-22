let map = [
  ["w", "w", "w", "w", "w", "w", "w"], //BOTOES
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
];

let button;
let players = 0;
let lineMap;
let columnMap;
let currentPosition;

for (let line = 1; line <= 7; line++) {
  lineMap = document.createElement("div");
  lineMap.setAttribute("id", "line" + [line]);
  document.getElementById("board").appendChild(lineMap);
  for (let column = 1; column <= 7; column++) {
    columnMap = document.createElement("div");
    columnMap.setAttribute("id", [line] + "," + [column]);
    document.getElementById("line" + [line]).appendChild(columnMap);
    if (line === 1) {
      columnMap.setAttribute("class", "button");
    }
  }
}

for (let i = 1; i <= 7; i++) {
  button = document.getElementById(`1,${i}`);
  button.addEventListener("click", plays);
}

function plays() {
  let clickedButton = this.id[2];
  for (let i = 6; i >= 0; i--) {
    if (map[i][clickedButton - 1] === 0) {
      players++;
      map[i][clickedButton - 1] = players;
      currentPosition = document.getElementById(`${i + 1},${clickedButton}`);
      currentPosition.setAttribute("class", "player" + players);
      break;
    }
  }
  if (players === 2) {
    players = 0;
}
    winCondition()
}

function winCondition(){
  // horizontal
  for(let i = 1; i < map.length; i++){
    for(let j = 0; j < 4; j++){
      if(map[i][j] === map[i][j + 1] && map[i][j] === map[i][j + 2] && map[i][j] === map[i][j + 3] && map[i][j] !== 0){
        if(map[i][j] === 1){
          console.log('player one')
        }
        else{
          console.log('player two')
        }
      }
    }
  }
  // vertical
  for(let i = 1; i < 4; i++){
    for(let j = 0; j < 7; j++){
    if(map[i][j] === map[i + 1][j] && map[i][j] === map[i + 2][j] && map[i][j] === map[i + 3][j] && map[i][j] !== 0)
      if(map[i][j] === 1){
        console.log('player one')
      }
      else{
        console.log('player two')
      }
    }
  }
  // diagonal
  for(let i = 1; i < 4; i++){
    for(let j = 0; j < 4; j++){
      if(map[i][j] === map[i + 1][j + 1] && map[i][j] === map[i + 2][j + 2] && map[i][j] === map[i + 3][j + 3] && map[i][j] !== 0){
        if(map[i][j] === 1){
          console.log('player one')
        }
        else{
          console.log('player two')
        }
      }
    }
  }
  // hexagonal
  for(let i = 1; i < 4; i++){
    for(let j = 3; j < 7; j++){
      if(map[i][j] === map[i + 1][j - 1] && map[i][j] === map[i + 2][j - 2] && map[i][j] === map[i + 3][j - 3] && map[i][j] !== 0){
        console.log("diagonal2")
      }
    }
  }
}