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
let playerOneVictories = 0;
let playerTwoVictories = 0;
let victoryCondition = 0; // VAR TO STOP MOVEMENT AT VICTORY SCREEN
let victoryButton = document.getElementById("victoryButton");
victoryButton.addEventListener("click", reset);
arrayPrint();
count();
creatButton();
function arrayPrint() {
  document.getElementById("board").innerHTML = "";
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
}

function creatButton() {
  for (let i = 1; i <= 7; i++) {
    let img = document.createElement("img");
    button = document.getElementById(`1,${i}`);
    img.src = "img/raio.png";
    button.appendChild(img);
    button.addEventListener("click", plays);
  }
}

function plays() {
  if (victoryCondition === 0) {
    let div = document.createElement("div");
    let img = document.createElement("img");
    let clickedButton = this.id[2];
    for (let i = 6; i >= 0; i--) {
      if (map[i][clickedButton - 1] === 0) {
        players++;
        map[i][clickedButton - 1] = players;
        currentPosition = document.getElementById(`${i + 1},${clickedButton}`);
        if (players === 1) {
          document
            .getElementById("player-2")
            .removeAttribute("class", "opposite-turn");
          img.src = "img/discos/" + currentTargetP1 + ".png";
          document
            .getElementById("player-1")
            .setAttribute("class", "opposite-turn");
          div.appendChild(img);
          currentPosition.appendChild(div);
        }
        break;
      }
    }
    if (players === 2) {
      document
        .getElementById("player-1")
        .removeAttribute("class", "opposite-turn");
      img.src = "img/discos/" + currentTargetP2 + ".png";
      document
        .getElementById("player-2")
        .setAttribute("class", "opposite-turn");
      div.appendChild(img);
      currentPosition.appendChild(div);
      players = 0;
    }
    winCondition();
  }
}

function winCondition() {
  // horizontal
  let victory = 0;
  for (let i = 1; i < map.length; i++) {
    for (let j = 0; j < 4; j++) {
      if (
        map[i][j] === map[i][j + 1] &&
        map[i][j] === map[i][j + 2] &&
        map[i][j] === map[i][j + 3] &&
        map[i][j] !== 0
      ) {
        if (map[i][j] === 1) {
          playerOneVictories += 10;
          victoryText(`10 pontos para ${currentTargetP1}`);
          victory = 1;
        } else if (map[i][j] === 2) {
          playerTwoVictories += 10;
          victoryText(`10 pontos para ${currentTargetP2}`);
          victory = 1;
        }
      }
    }
  }
  // vertical
  for (let i = 1; i < 4; i++) {
    for (let j = 0; j < 7; j++) {
      if (
        map[i][j] === map[i + 1][j] &&
        map[i][j] === map[i + 2][j] &&
        map[i][j] === map[i + 3][j] &&
        map[i][j] !== 0
      )
        if (map[i][j] === 1) {
          playerOneVictories += 10;
          victoryText(`10 pontos para ${currentTargetP1}`);
          victory = 1;
        } else if (map[i][j] === 2) {
          playerTwoVictories += 10;
          victoryText(`10 pontos para ${currentTargetP2}`);
          victory = 1;
        }
    }
  }
  // diagonal
  for (let i = 1; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      if (
        map[i][j] === map[i + 1][j + 1] &&
        map[i][j] === map[i + 2][j + 2] &&
        map[i][j] === map[i + 3][j + 3] &&
        map[i][j] !== 0
      ) {
        if (map[i][j] === 1) {
          playerOneVictories += 10;
          victoryText(`10 pontos para ${currentTargetP1}`);
          victory = 1;
        } else if (map[i][j] === 2) {
          playerTwoVictories += 10;
          victoryText(`10 pontos para ${currentTargetP2}`);
          victory = 1;
        }
      }
    }
  }
  // hexagonal
  for (let i = 1; i < 4; i++) {
    for (let j = 3; j < 7; j++) {
      if (
        map[i][j] === map[i + 1][j - 1] &&
        map[i][j] === map[i + 2][j - 2] &&
        map[i][j] === map[i + 3][j - 3] &&
        map[i][j] !== 0
      ) {
        if (map[i][j] === 1) {
          playerOneVictories += 10;
          victoryText(`10 pontos para ${currentTargetP1}`);
          victory = 1;
        } else if (map[i][j] === 2) {
          playerTwoVictories += 10;
          victoryText(`10 pontos para ${currentTargetP2}`);
          victory = 1;
        }
      }
    }
  }
  //Empate
  let empate = 0;
  for (let i = 1; i < 7; i++) {
    for (let j = 0; j < 7; j++) {
      if (map[i][j] !== 0) {
        empate++;
      }
    }
  }
  if (empate === 42 && victory === 0) {
    victoryText("Draw");
  }
}

function victoryText(p) {
  let victoryText = document.getElementById("victoryMessage");
  victoryText.innerHTML = "";
  let paragraph = document.createElement("p");
  paragraph.innerHTML = p;
  victoryText.appendChild(paragraph);

  //ADD STYLE FROM VICTORY SCREEN
  victoryButton.classList.remove("hidden");
  victoryMessage.classList.remove("hidden");
  document.getElementById("menu-Game").classList.add("hidden")
  document.getElementById("victoryImg").classList.remove("hidden")
  document.getElementById("count").classList.add("blur");
  document.getElementById("main").classList.add("blur");
  document.getElementById("background").classList.add("blur");
  document.getElementById("footer").classList.add("blur");
  // VAR TO STOP MOVEMENT AT VICTORY SCREEN
  victoryCondition++;

  count();
}

function count() {
  let countText = document.getElementById("count");
  countText.innerHTML = "";
  let countParagraph = document.createElement("p");
  countParagraph.innerHTML = playerOneVictories + " x " + playerTwoVictories;
  countText.appendChild(countParagraph);
}

function reset() {
  map = [];
  let linha = [];
  for (let i = 0; i < 7; i++) {
    for (let j = 0; j < 7; j++) {
      if (i === 0) {
        linha.push("w");
      } else {
        linha.push(0);
      }
    }
    map.push(linha);
    linha = [];
  }

  arrayPrint(); // transformar em um botão.
  creatButton();
  // RETURN TO PLAY SCREEN
  victoryCondition = 0;

  //REMOVE STYLE FROM VICTORY SCREEN
  victoryButton.classList.add("hidden");
  victoryMessage.classList.add("hidden");
  document.getElementById("menu-Game").classList.remove("hidden")
  document.getElementById("victoryImg").classList.add("hidden")
  document.getElementById("count").classList.remove("blur");
  document.getElementById("main").classList.remove("blur");
  document.getElementById("background").classList.remove("blur");
  document.getElementById("footer").classList.remove("blur");
  document.getElementById("player-2").removeAttribute("class", "opposite-turn");
  document.getElementById("player-1").removeAttribute("class", "opposite-turn");
}

// seleção de casa
let coount = 0;
let currentTargetP1;
let currentTargetP2;

let button1 = document.getElementById("grifinoria");
let button2 = document.getElementById("sonserina");
let button3 = document.getElementById("corvinal");
let button4 = document.getElementById("lufa-lufa");

button1.addEventListener("click", houseSelection);
button2.addEventListener("click", houseSelection);
button3.addEventListener("click", houseSelection);
button4.addEventListener("click", houseSelection);

function houseSelection() {
  if (coount === 0) {
      document.getElementById("start-Game").classList.add("hidden");
    if (currentTargetP2 !== undefined && currentTargetP1 !== undefined) {
      document
        .getElementById(currentTargetP1 + "Img")
        .classList.add("selectImg");
      document
        .getElementById(currentTargetP2 + "Img")
        .classList.add("selectImg");
    }
    currentTargetP2 = undefined;
    currentTargetP1 = undefined;
  }

  coount++;

  if (coount === 1) {
    currentTargetP1 = this.id;
  } else if (coount === 2) {
    currentTargetP2 = this.id;
  }

  if (currentTargetP1 === currentTargetP2) {
    coount = 1;
    currentTargetP2 = undefined
  }

  if (currentTargetP1 !== undefined && coount === 1) {
    //mostrar a casa selecionada "Player 1 selecionou casa x"
    //pedir pro pĺayer2 selecionar sua casa
    document.getElementById("player-1").src =
      "img/discos/" + currentTargetP1 + ".png";
    document
      .getElementById(currentTargetP1 + "Img")
      .classList.remove("selectImg");
  }
  if (currentTargetP2 !== undefined && coount === 2){
    document.getElementById("player-2").src =
      "img/discos/" + currentTargetP2 + ".png";
    document
      .getElementById(currentTargetP2 + "Img")
      .classList.remove("selectImg");
    coount = 0;
  }
  if(currentTargetP2 !== currentTargetP1 && currentTargetP2 !== undefined){
    document.getElementById("start-Game").classList.remove("hidden");
    }
}

let buttonToStart = document.getElementById("start-Game");
buttonToStart.addEventListener("click", function () {
  document.getElementById("menuScreen").classList.add("hidden");
  document.getElementById("gameScreen").classList.remove("hidden");
  playerOneVictories = 0;
  playerTwoVictories = 0;
  count();
  reset();
  document.getElementById("player-2").classList.add("class", "opposite-turn");
});

let buttonToMenu = document.getElementById("menu-Game");
buttonToMenu.addEventListener("click", function () {
  document.getElementById("menuScreen").classList.toggle("hidden");
  document.getElementById("gameScreen").classList.toggle("hidden");
  document.getElementById("start-Game").classList.add("hidden");
});
