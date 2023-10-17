// import $ from 'jquery';

var allPlayers: string[] = [];

function Player() {
    this.name = "";
    this.strikes = 0;
    this.team = null;
}

// Get player list
fetch('https://docs.google.com/spreadsheets/d/1G97cC4k_gf1gKlNIJ56X2cAUJl9K5lbTzozbCZSZnwA/gviz/tq?tqx=out:csv')
  .then(response => response.text())
  .then(data => {
    allPlayers = data.split('\n');
  })
  .then(() => {
    allPlayers.forEach(player => {
        var newPlayer = new Player();
        newPlayer.name = player;

        const playerList = document.getElementById('player-list');
        const playerStrikes = document.getElementById('player-strikes');
        
        const nameItem = document.createElement('li');
        const strikeItem = document.createElement('li');
        
        nameItem.textContent = newPlayer.name;
        if (playerList != null) {
            playerList.appendChild(nameItem);
        }

        strikeItem.textContent = newPlayer.strikes;
        if (playerStrikes != null) {
            playerStrikes.appendChild(strikeItem);
        }

        // $('#player-list').text(newPlayer.name);
    });
  });
