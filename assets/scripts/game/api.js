const store = require('./../store.js')
const config = require('./../config.js')

const newGame = function (data) {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'POST',
    data: data,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const boxClick = function (cellIndex, player, status) {
  // console.log('Cell index', cellIndex)
  // console.log('player', player)
  // console.log('status', status)
  return $.ajax({
    url: config.apiUrl + '/games/' + store.game._id,
    method: 'PATCH',
    data: {
      game: {
        cell: {
          index: cellIndex,
          value: player
        },
        over: status
      }
    },
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const gamesHistory = function (data) {
  return $.ajax({
    url: config.apiUrl + '/games/',
    method: 'GET',
    data: data,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

module.exports = {
  newGame,
  boxClick,
  gamesHistory
}
