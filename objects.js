const playlist = {"Paul Simon": "Graceland"};

function updatePlaylist(playlist, artistName, songTitle) {
  return Object.assign({}, playlist, {[artistName]: songTitle})
}
updatePlaylist(playlist, "Phil Ochs", )