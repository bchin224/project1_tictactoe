'use strict'

const api = require('./api.js')
const ui = require('./ui.js')

const onNewGame = function (event) {
  event.preventDefault() // prevent page refresh

  // let turn = 'X'
  // const gameGrid =
  // ['', '', '',
  //   '', '', '',
  //   '', '', '']
  // const playerOne = 'X'
  // const playerTwo = 'O'
  // let gamesPlayed = 0 // iterate whenever a game ends

  api.newGame()
    .then(ui.newGameSuccess)
    .catch(ui.newGameFailure)
}

module.exports = {
  onNewGame
}
