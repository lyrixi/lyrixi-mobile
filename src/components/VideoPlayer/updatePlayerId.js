function updatePlayerId(rootDOM) {
  window._lyrixi_videoplayer_player_ = window._lyrixi_videoplayer_player_
    ? window._lyrixi_videoplayer_player_ + 1
    : 1

  let playerId = `_lyrixi_videoplayer_player_${window._lyrixi_videoplayer_player_}`

  // Set id
  let player = rootDOM.querySelector('.lyrixi-videoplayer-page-player')
  if (player) {
    player.setAttribute('id', playerId)
  }

  return playerId
}

export default updatePlayerId
