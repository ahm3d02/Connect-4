let randomq
let winner
let currentColumn
let circleX = [160, 240, 320, 400, 480, 560, 640]
let circleY = [150, 250, 350, 450, 550, 650]
let gamemode = 0
let board = [
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0]
]
let columns = 7
let rows = 6
let square = 100
let counterX = 350
let counterY = 70
let turn = 1
let rowAsString
let aX = 200
let aY = 210
let bX = 200
let bY = 230
let answers = ["a", "a", "b", "b", "a", "a", "b", "a", "a", "b", "a", "a", "a", "b", "a", "a", "a", "b", "a", "a", "a", "b", "a", "a", "a", "b", "a", "a", "a", "b", "a", "a", "a", "a", "a", "b", "b", "a", "b", "a", "a"]
let questions = ["Which is a output device?\n\n\n\na. Projector\nb. Microphone", "Which is a input device?\n\n\n\na. Scanner\nb. Speaker", "Which is a larger value?\n\n\n\na. Bit\nb. Byte", "Which is a larger value?\n\n\n\na. Mb\nb. Gb", "Which is a smaller value?\n\n\n\na. Gb\nb. TB", "Which is the standard keyboard format?\n\n\n\na. QWERTY\nb. AZERTY", "A laser is a type of what?\n\n\n\na. Speaker\nb. Printer", "DPI stands for which of the following?\n\n\n\na. Dots per Inch\nb. Displays per inch", "Which is a larger value?\n\n\n\na. gigahertz\nb. megahertz", "Which is a larger value?\n\n\n\na. hertz\n b. megahertz", "Which is a smaller value?\n\n\n\na. bit\nb. Byte", "An optical drive is a type of…\n\n\n\na. Removable Storage\nb. Permanant Storage", "The microprocessor is apart of the… \n\n\n\na. System unit\nb. Computer Unit", "DVD players can only read DVDs\n\n\n\na. True\nb. False", "Physical parts of the computer are…\n\n\n\na. Hardware\nb. Software", "Hardware devices that are attached to a computer are…\n\n\n\na. Peripherals\nb. Info", "When the computer accepts data, it is…\n\n\n\na. Input\nb. Output", "When the computer stores results, it is…\n\n\n\na. Processing\nb. Storage", "Blank means the raw facts given to the computer?\n\n\n\na. Data\nb. Programs", "RAM stands for?\n\n\n\na. Random Access Memory\nb. Random Access Mode", "Which is a type of output?\n\n\n\na. Soft Copy\nb. Hard Copy", "The motherboard is involved in what step?\n\n\n\na. Output\nb. Processing", "An output device is a…\n\n\n\na. Printer\nb. Mouse", "Saving results of processing is a type of what?\n\n\n\na. Processing\nb. Output", "A storage device is which?\n\n\n\na. USB\nb. Keyboard", "An input device example is…\n\n\n\na. Speaker\nb. Webcam", "What makes a computer powerful?\n\n\n\na. Speed\nb. Colour", "Another name for a storage unit is?\n\n\n\na. Auxillary storage\nb. Prime Storage", "LAN stands for…\n\n\n\na. Local Area Network\nb. Local Assessment Network", "A video card is which type of system?\n\n\n\na. Processing\nb. Storage", "A USB is a type of flash drive?\n\n\n\na. True\nb. False", "Modems can be internal and external\n\n\n\na. True\nb. False", "An application can consist of games such as FIFA?\n\n\n\na. True\nb. False ", "A webcam is an input device?\n\n\n\na. True\nb. False", "Blu-ray is a storage unit?\n\n\n\na. True\nb. False", "Which is larger?\n\n\n\na. Hz\nb. GHz", "Is a graphic tablet a type of pointing device?\n\n\n\na. True\nb. False"]

function preload(){
}

function setup(){
  createCanvas(700, 700)
  randomq = floor(random((questions.length)))

}

function draw() {

  if (gamemode == 0) {

    background(150, 100, 255)
    fill(255, 255, 50)
    textSize(33)
    textFont('Seymour One');
    text("Computer Four", 244, 60)
    // image(connect, 150,150)
    rect(100, 100, 140, 60)
    rect(100, 180, 160, 60)
    rect(100, 260, 140, 60)
    fill(0)
    textSize(20)
    text("Credits",120,300)
    text("Game", 125, 140)
    textSize(15)
    text("Instructions", 110, 210)
    textSize(30)
    textFont('Luckiest Guy')
    text("Play Your Friends, Prove Your Worth!", 90,600)
  }


  if (gamemode == 1) {
    background(0, 150, 200)
    textSize(40)
    text("INSTRUCTIONS:", 250, 40)
    textSize(14)
    text("1.To win Computer Four you must be the first player to get four of your colored checkers \n in a row either horizontal or vertical or diagonal", 10, 100)
    text("2.Each player will drop in one checker piece at a time", 10, 200)
    text("3.This will give you a chance to either build your row,\n or stop your opponent from getting four in a row", 10, 300)
    text("4.Use the arrow keys to move left or right where you would like to place the counter,\n the down arrow will place down the counter", 10, 400)
    text("5.Every turn you will be asked a computer hardware question you must answer correctly,\n or else you will lose your turn", 10, 500)
    text("6.GOOD LUCK!", 10, 600)
    fill(255)
    rect(0,0,100,30)
    fill(0)
    text("main menu", 8, 15)

  }





  if (gamemode == 3) {
    drawBoard()
    fill(0)
    text("Use the arrow keys to navigate through the game",350,20)
    if (counterX >= 650) {
      counterX = 650
    }
    if (counterX <= 50) {
      counterX = 50
    }
    if (counterY >= 630) {
      counterY = 630
    }
    if (turn == 1) {
      fill(255, 0, 0)
      ellipse(counterX, counterY, 50, 50)
    }
    if (turn == 2) {
      fill(255, 255, 0)
      ellipse(counterX, counterY, 50, 50)
    }
  }


  if (gamemode == 4) {
    askQuestion()
  }

  if (gamemode == 5) {
    winScreen(winner)
  }
  if (gamemode == 7){
      background(0)
      fill(0,255,255)
      textAlign(CENTER)
      textSize(50)
      text("Made by Youssef and Nick", 350, 350)
  }
}

function keyPressed() {
  if (keyCode == LEFT_ARROW && gamemode == 3) {
    counterX -= 100
  }
  if (keyCode == RIGHT_ARROW && gamemode == 3) {
    counterX += 100
  }
  if (keyCode == DOWN_ARROW && gamemode == 3) {
    dropCounter()
  }
}

function checkAnswer(answer) {
  if (answer == answers[randomq]) {
    gamemode = 3

  }
  else {
    randomq = floor(random((questions.length)))
  }
}

function mousePressed() {
  if (mouseX >= 100 && mouseX <= 240 && mouseY >= 100 && mouseY <= 160 && gamemode === 0) {
    gamemode = 4
  }

  if (mouseX >= 100 && mouseX <= 260 && mouseY >= 180 && mouseY <= 240 && gamemode === 0) {
    gamemode = 1
  }
  if (mouseX >=0 && mouseX <=100 && mouseY >= 0 && mouseY <=30 && gamemode === 1){
    gamemode = 0
  }
  if (mouseX >= aX && mouseX <= aX + 300 && mouseY >= aY && mouseY <= aY + 19 && gamemode === 4)   {
    checkAnswer("a")
  }
  if (mouseX >= bX && mouseX <= bX + 300 && mouseY >= bY && mouseY <= bY + 19 && gamemode === 4)   {
    checkAnswer("b")
  }
  if (mouseX >= 250 && mouseX <= 450 && mouseY >= 400 && mouseY <= 450 && gamemode === 5) {
    gamemode = 3
  }
  if (mouseX >=100 && mouseX <=240 && mouseY >=260 && mouseY <= 320){
    gamemode = 7
  }
}

function drawBoard() {
  background(165)
  noStroke()
  for (let i = 0; i < columns; i++) {
    for (let x = 0; x < rows; x++) {
      fill(0, 0, 255)
      rect(i * square, (x + 1) * square, square, square)
      if (board[x][i] == 0) {
        fill(255)
      } else if (board[x][i] == 1) {
        fill(255, 0, 0)
      } else if (board[x][i] == 2) {
        fill(255, 255, 0)
      }
      drawCounter((i * square + 50), (x + 1) * square + 50)
    }
  }
}

function dropCounter() {
  currentColumn = (counterX - square / 2) / square
  for (let i = board.length - 1; i >= 0; i--) {
    if (board[i][currentColumn] == 0) {
      askQuestion()
      board[i][currentColumn] = turn
      randomq = floor(random((questions.length)))
      gamemode = 4
      winCheck(turn)
      if (turn === 1) {
        turn = 2
      }
      else {
        turn = 1
      }

      break
    }
  }

}

function drawCounter(x, y) {
  ellipse(x, y, square / 2, square / 2)
}

function askQuestion() {
  // randomq = floor(random((questions.length)))
  background(0)
  fill(0,255,255)
  textSize(20)
  textAlign(CENTER)
  text("Question:(Type your answer)\n" + questions[randomq], 350, 100)


}

function winCheck(player) {
  winner = 0
  let pwin = ""


  //4 in a row
  for (let i = 0; i < 4; i++) {
    pwin += str(player)
  }

  //Horizontal
  for (i = 0; i < rows; i++) {
    rowAsString = board[i].join("")

    if (rowAsString.includes(pwin)) {
      winner = player
    }
  }


  //Vertical
  let columnAsString = ""
  for (let i = board.length - 1; i >= 0; i--) {
    columnAsString += str(board[i][currentColumn])
  }
  if (columnAsString.includes(pwin)) {
    winner = player
  }

  //Diagonals
  let negDiagStr = ""
  for (let x = 0; x < columns - 3; x++) {
    for (let y = 0; y < rows - 3; y++) {
      negDiagStr =  str(board[y][x]) + str(board[y + 1][x + 1]) + str(board[y + 2][x + 2]) + str(board[y + 3][x + 3])
      if (negDiagStr === pwin) {
        winner = player
      }
    }
  }

  let posDiagStr = ""
  for (let x = 0; x < columns - 3; x++) {
    for (let y = 3; y < rows; y++) {
      posDiagStr =  str(board[y][x]) + str(board[y - 1][x + 1]) + str(board[y - 2][x + 2]) + str(board[y - 3][x + 3])
      if (posDiagStr === pwin) {
        winner = player
      }
    }
  }

  //The winner
  if (winner != 0) {
    gamemode = 5
  }
}

function winScreen(name) {
  board = [
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0]
]
  turn = 1
  counterX = 350
  background(0)
  fill(0,255,255)
  textAlign(CENTER)
  textSize(50)
  text("Player " + name + " WINS!", 350, 350)
  rect(250, 400, 200, 50)
  fill(0)
  textSize(30)
  text("Play Again", 350, 435)
}
