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
  // console.log('Box was clicked', event.target)
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
      $('.turn').text('It is O\'s turn')
    } else if (currentPlayer === 'O') {
      $(selectedBox).text('O')
      $('#message-display').text('')
      initPlayer = 'X'
      $('.turn').text('It is X\'s turn')
    }
  } else {
    $('#message-display').text('That space has already been taken! Try again!')
    console.log('Space was taken')
  }

  // check if game is over / won
  let gameOver = false
  const boxValue = $('.box')
  // console.log('index value', boxValue[3].innerText)
  // console.log('index value', boxValue[0].innerText)
  // console.log('player', currentPlayer)
  if (boxValue[0].innerText !== '' && boxValue[0].innerText === boxValue[1].innerText &&
  boxValue[1].innerText === boxValue[2].innerText) {
    $('#message-display').text(`${currentPlayer} won!`)
    gameOver = true
  } else if (boxValue[3].innerText !== '' && boxValue[3].innerText === boxValue[4].innerText &&
  boxValue[4].innerText === boxValue[5].innerText) {
    $('#message-display').text(`${currentPlayer} won!`)
    gameOver = true
  } else if (boxValue[6].innerText !== '' && boxValue[6].innerText === boxValue[7].innerText &&
  boxValue[7].innerText === boxValue[8].innerText) {
    $('#message-display').text(`${currentPlayer} won!`)
    gameOver = true
  } else if (boxValue[0].innerText !== '' && boxValue[0].innerText === boxValue[3].innerText &&
  boxValue[3].innerText === boxValue[6].innerText) {
    $('#message-display').text(`${currentPlayer} won!`)
    gameOver = true
  } else if (boxValue[1].innerText !== '' && boxValue[1].innerText === boxValue[4].innerText &&
  boxValue[4].innerText === boxValue[7].innerText) {
    $('#message-display').text(`${currentPlayer} won!`)
    gameOver = true
  } else if (boxValue[2].innerText !== '' && boxValue[2].innerText === boxValue[5].innerText &&
  boxValue[5].innerText === boxValue[8].innerText) {
    $('#message-display').text(`${currentPlayer} won!`)
    gameOver = true
  } else if (boxValue[0].innerText !== '' && boxValue[0].innerText === boxValue[4].innerText &&
  boxValue[4].innerText === boxValue[8].innerText) {
    $('#message-display').text(`${currentPlayer} won!`)
    gameOver = true
  } else if (boxValue[2].innerText !== '' && boxValue[2].innerText === boxValue[4].innerText &&
  boxValue[4].innerText === boxValue[6].innerText) {
    $('#message-display').text(`${currentPlayer} won!`)
    gameOver = true
  }

  if (gameOver === true) {
    // do something to make the game unclickable?
  }

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
