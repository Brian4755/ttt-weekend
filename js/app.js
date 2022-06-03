/*-------------------------------- Constants --------------------------------*/
let winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]

/*---------------------------- Variables (state) ----------------------------*/
let board
let turn
let winner


/*------------------------ Cached Element References ------------------------*/
let squareEls = document.querySelectorAll('.square')
let messageEl = document.getElementById('message')
let resetBtnEl = document.querySelector('button')


/*----------------------------- Event Listeners -----------------------------*/
squareEls.forEach(function(square) {
  square.addEventListener('click', handleClick)
})

resetBtnEl.addEventListener('click', function() {
  init()
})

/*-------------------------------- Functions --------------------------------*/
init()
function init() {
  board = [
    null, null, null,
    null, null, null,
    null, null, null]
  turn = 1
  winner = null
  render()
}

function render() {

  board.forEach(function(square, i) {
    if (square === 1) {
      squareEls[i].textContent = 'X'
    } 
    if (square === -1) {
      squareEls[i].textContent = 'O'
    }
    if (!square) {
      squareEls[i].textContent = ''
    }
  })
  renderMessage()
}

function renderMessage() {
  if (winner === null) {
    messageEl.textContent = `It is player ${turn === 1 ? 'X' : 'O'}'s turn`
  } else if (winner === 'T') {
    messageEl.textContent = "It's a tie"
  } else {
    messageEl.textContent = `Player ${turn === 1 ? 'O' : 'X'} won!`
  }
}


function handleClick(evt) {
  const sqIdx = parseInt(evt.target.id.substring(2))
  console.log(typeof sqIdx)
  if (board[sqIdx] !== null || winner !== null) {
    return
  }

  board[sqIdx] = turn
  getWinner()
  turn*=-1
  render()
}

function getWinner() {
  winningCombos.forEach(function(winningcombo) {
    let sum = board[winningcombo[0]] + board[winningcombo[1]] + board[winningcombo[2]]
    if (Math.abs(sum) === 3) {
      winner = turn
    }

    if (board.includes(null) === false) {
      winner = 'T'
    }
  })
}