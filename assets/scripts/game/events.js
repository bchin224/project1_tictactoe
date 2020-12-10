'use strict'

const getFormFields = require('./../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')

let initPlayer = 'X' // initialize turn and player variables

const onNewGame = function (event) {
  event.preventDefault() // prevent page refresh
  // get new game ID info
  const newGameData = event.target
  const data = getFormFields(newGameData)
  api.newGame(data)
    .then(ui.newGameSuccess)
    .catch(ui.newGameFailure)
}

const onBoxClick = function (event) {
  event.preventDefault()
  // event.target = the element being clicked
  console.log('Box was clicked', event.target)
  // set selected box to a value
  const selectedBox = event.target
  // const data = getFormFields(selectedBox)
  // console.log('This is data?', data)

  // define currentPlayer and set to initialized player
  const currentPlayer = initPlayer

  // $(selectedBox.text() ===  the text set in onNewGame)
  if ($(selectedBox).text() === '') {
    // console.log('This is empty')
    if (currentPlayer === 'X') {
      $(selectedBox).text('X')
      $('#message-display').text('')
      initPlayer = 'O'
      $('#turn').text('It is O\'s turn')
    } else if (currentPlayer === 'O') {
      $(selectedBox).text('O')
      $('#message-display').text('')
      initPlayer = 'X'
      $('#turn').text('It is X\'s turn')
    }
  } else {
    $('#message-display').text('That space has already been taken! Try again!')
    console.log('Space was taken')
  }

  // check if space is empty, then add
  // then add to array
  // console.log('Updated box data', updateBox)
  const gameOver = false

  api.boxClick(selectedBox.dataset.cellIndex, currentPlayer, gameOver)
    .then(ui.gameDataSuccess)
    .catch(ui.gameDataFailure)
}

const onMenuClick = function (event) {
  event.preventDefault()
  $('.gameplay').hide()
  $('.authenticated').show()
}

module.exports = {
  onNewGame,
  onBoxClick,
  onMenuClick
}
