var playlist = { 
  Kanye: "Gold Digger"
};

function updatePlaylist(playlist, artistName, songTitle) {
  return Object.assign({}, playlist, {[artistName]: songTitle})
}
updatePlaylist(playlist, "Phil Ochs", "Here's to the State of Mississippi")

function removeFromPlaylist(playlist, artistName) {
  var artistName = Kanye;
  delete playlist.artistName;
  return playlist
}
  
 removeFromPlaylist(playlist, "Kanye")
 