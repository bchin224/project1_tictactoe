'use strict'

const store = require('./../store.js')

const signUpSuccess = function (response) {
  $('#message-display').text('Signed up successfully!')
  $('form').trigger('reset')
}
const signUpFailure = function (error) {
  $('#message-display').text('Sign up failed with error:' + error.responseJSON.message)
}

const signInSuccess = function (response) {
  store.user = response.user
  $('#message-display').text('Signed in successfully!')
  $('.unauthenticated').hide()
  $('.authenticated').show()
  $('form').trigger('reset')
}
const signInFailure = function (error) {
  $('#message-display').text('Sign in failed with error:' + error.responseJSON.message)
}

const changePassSuccess = function () {
  $('#message-display').text('Password successfully changed!')
}
const changePassFailure = function (error) {
  $('#message-display').text('Failed to change password' + error.responseJSON.message)
}

const signOutSuccess = function () {
  console.log('Signed Out')
  $('#message-display').text('Signed out successfully')
  store.user = null
  $('.unauthenticated').show()
  $('.authenticated').hide()
  $('form').trigger('reset')
}
const signOutFailure = function (error) {
  $('#message-display').text('Failed to sign out' + error.responseJSON.message)
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePassSuccess,
  changePassFailure,
  signOutSuccess,
  signOutFailure
}
