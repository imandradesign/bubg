import $ from 'jquery';

function Player() {
    this.name = "";
    this.strikes = 2;
    this.teamLetter = null;
}

// Get player list
fetch('https://docs.google.com/spreadsheets/d/1G97cC4k_gf1gKlNIJ56X2cAUJl9K5lbTzozbCZSZnwA/gviz/tq?tqx=out:csv')
  .then(response => response.text())
  .then(data => {
    const allPlayers = data.split('\n');

    allPlayers.forEach(player => {
        var newPlayer = new Player();
        newPlayer.name = player;

        $('#player-list').text(newPlayer.name);
    })
  });