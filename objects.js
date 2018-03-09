const playlist = {PaulSimon: "Graceland"};

function updatePlaylist(playlist, artistName, songTitle) {
  var artistName = 
  object.assign({}, playlist, {[artistName]: songTitle})
}