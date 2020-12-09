'use strict'

const gameEvents = require('./events.js')
const store = require('./../store.js')

const newGameSuccess = function (data) {
  console.log('New Game Started', data.game._id)
  store.game = data.game
  console.log(store.game)
  $('#message-display').text('')
  $('#turn').text(`It is ${gameEvents.turn}'s turn`)
  // reveal gameplay class and grid
  $('.gameplay').show()
  $('.authenticated').hide()
}

const newGameFailure = function (error) {
  $('#message-display').text('Failed to start new game' + error.responseJSON.message)
}

module.exports = {
  newGameSuccess,
  newGameFailure
}
