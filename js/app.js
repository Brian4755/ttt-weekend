/*-------------------------------- Constants --------------------------------*/
let winningCombos

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
  board = [null, null, null, null, null, null, null, null, null]
  turn = 1
  winner = null
  render()
}

function render() {

  board.forEach(function(square, i) {
    console.log(squareEls[i])
    if (square === 1) {
      squareEls[i].textContent = 'X'
    } 
    if (square === -1) {
      squareEls[i].textContent = 'O'
    }
  })
}

function renderMessage() {
  if (winner === null) {
    messageEl.textContent = `It is player ${turn === 1 ? 'X' : 'O'}'s turn`
  }
  if (winner === 'T') {
    messageEl.textContent = "It's a tie"
  }
  else {
    messageEl.textContent = `Player ${turn === 1 ? 'O' : 'X'} won!`
  }
}
