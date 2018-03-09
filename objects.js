const playlist = {"Paul Simon": "Graceland"};

function updatePlaylist(playlist, artistName, songTitle) {
  var artistName = ""
  object.assign({}, playlist, {[artistName]: songTitle})
}