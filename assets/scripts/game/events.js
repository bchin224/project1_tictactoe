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
  $('.box').text('') // clear board for new game

  api.newGame(data)
    .then(ui.newGameSuccess)
    .catch(ui.newGameFailure)
}

const onBoxClick = function (event) {
  event.preventDefault()
  // console.log('Box was clicked', event)
  // set selected box to a value
  const selectedBox = event.target
  // const updateBox = selectedBox.data
  if (player === 'X') {
    $(selectedBox).text('X')
    player = 'O'
  } else if (player === 'O') {
    $(selectedBox).text('O')
    player = 'X'
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
