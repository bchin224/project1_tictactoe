'use strict'

// const gameEvents = require('./events.js')
const store = require('./../store.js')

const newGameSuccess = function (data) {
  // console.log('New Game Started', data.game._id)
  store.game = data.game
  // console.log(store.game) // object with array, game id, over set to false, etc
  $('#message-display').text('')
  // clear board for new game (this is the value of each box)
  $('.box').text('')
  // initialize that X starts the game
  $('.turn').text('It is X\'s turn')
  // reveal gameplay class and grid
  $('.gameplay').show()
  $('.authenticated').hide()
}
const newGameFailure = function (error) {
  $('#message-display').text('Failed to start new game' + error.responseJSON.message)
}

const gameDataSuccess = function (response) {
  store.game = response.game
}
const gameDataFailure = function (error) {
  $('#message-display').text('Failed to acces game data' + error.responseJSON.message)
}

const gameHistorySuccess = function (response) {
  // console.log(response.games.length)
  $('#message-display').text(`You have played ${response.games.length} times!`)
}
const gameHistoryFailure = function (error) {
  $('#message-display').text('Failed to get number of games played' + error.responseJSON.message)
}

module.exports = {
  newGameSuccess,
  newGameFailure,
  gameDataSuccess,
  gameDataFailure,
  gameHistorySuccess,
  gameHistoryFailure
}
