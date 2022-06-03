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



/*----------------------------- Event Listeners -----------------------------*/



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


squareEls.forEach(function(square) {
  square.addEventListener('click', handleClick)
  handClick()
  let sqIdx = target.evt
  if (board[sqIdx] !== null) {
    return
  }
  else if (winner !== null) {
    return
  } else {
    return (turn*-1)
  }
  let winner = getWinner
  render()
})

function handleClick(evt) {

}