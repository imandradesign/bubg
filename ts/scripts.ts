function Player() {
    this.name = "";
    this.strikes = 0;
    this.team = null;
}

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
  