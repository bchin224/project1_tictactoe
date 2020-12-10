'use strict'

const getFormFields = require('./../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')

let player = 'X' // initialize turn and player variables

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
  // event.preventDefault()
  // event.target = the element being clicked
  console.log('Box was clicked', event.target)
  // set selected box to a value
  // $(selectedBox.text() ===  the text set in onNewGame)
  const selectedBox = event.target
  console.log('This is the value of a blank', $(selectedBox).text())
  // const updateBox = selectedBox.data
  if ($(selectedBox).text() === '') {
    // console.log('This is empty')
    if (player === 'X') {
      $(selectedBox).text('X')
      $('#message-display').text('')
      player = 'O'
      $('#turn').text('It is O\'s turn')
    } else if (player === 'O') {
      $(selectedBox).text('O')
      $('#message-display').text('')
      player = 'X'
      $('#turn').text('It is X\'s turn')
    }
  } else {
    $('#message-display').text('That space has already been taken! Try again!')
    console.log('Space was taken')
  }

  // check if space is empty, then add

  // then add to array
  // console.log('Updated box data', updateBox)
  api.boxClick(selectedBox)
    .then(console.log('box clicked'))
    .catch(console.log('no box click'))
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
