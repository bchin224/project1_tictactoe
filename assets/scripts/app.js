'use strict'

const authEvents = require('./auth/events.js')
const gameEvents = require('./game/events.js')

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  // authentication listeners
  $('.authenticated').hide()
  $('.gameplay').hide()
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('click', authEvents.onSignOut)
  // game listeners
  $('#new-game-btn').on('click', gameEvents.onNewGame)
  $('.box').on('click', gameEvents.onBoxClick)
  $('#menu-button').on('click', gameEvents.onMenuClick)
})
