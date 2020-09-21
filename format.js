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
}
