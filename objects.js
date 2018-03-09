const playlist = {PaulSimon: "Graceland"};

function updatePlaylist(playlist, artistName, songTitle) {
  object.assign({}, playlist, {[artistName]: songTitle})
}