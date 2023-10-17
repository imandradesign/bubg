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
        // const strikeItem = document.createElement('li');
        
        nameItem.textContent = newPlayer.name;
        if (playerList != null) {
            playerList.appendChild(nameItem);
        }

        // strikeItem.textContent = newPlayer.strikes;
        // if (playerStrikes != null) {
        //     playerStrikes.appendChild(strikeItem);
        // }

        playerStrikes?.appendChild(newPlayer.strikes);

        // $('#player-list').text(newPlayer.name);
    });
  });



// Define the function to fetch player names
async function fetchPlayerNames(): Promise<void> {
    try {
      const response = await fetch('https://docs.google.com/spreadsheets/d/1G97cC4k_gf1gKlNIJ56X2cAUJl9K5lbTzozbCZSZnwA/gviz/tq?tqx=out:csv');
      const data = await response.text();
      const allPlayers = data.split('\n');
  
      // Clear the existing list items
      const playerListElement = document.getElementById('player-list');
      if (playerListElement) {
        playerListElement.innerHTML = '';
      }
  
      // Add the fetched players to the list
      allPlayers.forEach(player => {
        var newPlayer = new Player();
        newPlayer.name = player;

        const playerListElement = document.getElementById('player-list');
        const nameItem = document.createElement('li');

        nameItem.textContent = newPlayer.name;
        
        if (playerListElement) {
            playerListElement.appendChild(nameItem);
        }
      });
  
    } catch (error) {
      console.error('An error occurred:', error);
    }
  }
  
  // Attach the fetch function to button click
  const fetchButton = document.getElementById('fetch-button');
  if (fetchButton) {
    fetchButton.addEventListener('click', fetchPlayerNames);
  }
  