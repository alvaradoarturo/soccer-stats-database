async function searchPlayers() {
    const country = document.getElementById('country').value;
    const team = document.getElementById('team').value;
    const position = document.getElementById('position').value;
    const sortBy = document.getElementById('sort').value;

    let queryParams = '';

    if (country !== undefined) {
        queryParams += `country=${encodeURIComponent(country)}&`;
        console.log(queryParams);
    }
    if (team !== undefined) {
        queryParams += `team=${encodeURIComponent(team)}&`;
    }
    if (position !== undefined) {
        queryParams += `position=${encodeURIComponent(position)}&`;
    }
    if (sortBy !== undefined) {
        queryParams += `sortBy=${encodeURIComponent(sortBy)}&`;
    }

    // Make GET request to search-players
    const url = `http://localhost:3000/search-players?${queryParams}`;

    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error('Failed to search players');
        }

        const data = await response.json();
        //console.log('Search results:', data);
        displayResults(data);

    } catch (error) {
        console.error('Error searching players:', error);

    }
}

function displayResults(data) {
    // Clear previous results
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = '';

    // Create table element
    const table = document.createElement('table');
    table.border = '1'; // Add border for demonstration

    // Create table header
    const headerRow = table.insertRow();
    ['Name', 'Team Name', "National Team", 'Goals', 'Assists'].forEach(headerText => {
        const headerCell = document.createElement('th');
        headerCell.textContent = headerText;
        headerRow.appendChild(headerCell);
    });

    // Populate table with data
    data.forEach(player => {
        const row = table.insertRow();
        ['Name', 'Team Name', 'National Team', 'Goals', 'Assists'].forEach(key => {
            const cell = row.insertCell();
            cell.textContent = player[key];
        });
    });

    // Append table to resultsDiv
    resultsDiv.appendChild(table);
}
function submitForm() {
    // Get form data
    const playerName = document.getElementById('playerName').value;
    const team = document.getElementById('team').value;
    const position = document.getElementById('position').value;
    const goals = document.getElementById('goals').value;
    const assists = document.getElementById('assists').value;
    const nationality = document.getElementById('nationality').value;

    // Construct the request body
    const requestBody = {
        Name: playerName,
        Team: team,
        Position: position,
        Goals: goals,
        Assists: assists,
        NationalTeamID: nationality
    };

    // Make POST request to add-player endpoint
    fetch('http://localhost:3000/add-player', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestBody)
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to add player');
            }
            // Clear the form fields
            document.getElementById('addPlayerForm').reset();
            // Display an alert message
            alert('Player added successfully');
        })
        .catch(error => {
            console.error('Error adding player:', error);
        });
}

function submitDeleteForm() {
    // Get form data
    const playerName = document.getElementById('playerName').value;
    const team = document.getElementById('team').value;
    const position = document.getElementById('position').value;
    // Construct the request body
    const requestBody = {
        Name: playerName,
        Team: team,
        Position: position,
    };

    // Make POST request to add-player endpoint
    fetch('http://localhost:3000/remove-player', {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestBody)
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to remove player');
            }
            // Clear the form fields
            document.getElementById('removePlayerForm').reset();
            // Display an alert message
            alert('Player removed successfully');
        })
        .catch(error => {
            console.error('Error removing player:', error);
        });
}

function submitUpdateForm() {
    // Get form data
    const playerName = document.getElementById('playerName').value;
    const team = document.getElementById('team').value;
    const position = document.getElementById('position').value;
    const goals = document.getElementById('goals').value;
    const assists = document.getElementById('assists').value;
    // Construct the request body
    const requestBody = {
        Name: playerName,
        Team: team,
        Position: position,
        Goals: goals,
        Assists: assists,
    };

    // Make PUT request to add-player endpoint
    fetch('http://localhost:3000/update-player', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestBody)
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to remove player');
            }
            // Clear the form fields
            document.getElementById('removePlayerForm').reset();
            // Display an alert message
            alert('Player updated successfully');
        })
        .catch(error => {
            console.error('Error updated player:', error);
        });
}
