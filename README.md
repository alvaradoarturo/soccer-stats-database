# soccer-stats-database
This project is a full-stack application designed to manage and query soccer player statistics. The application allows users to add new players, search for player statistics based on various criteria,  update detailed information about players, and delete players.

## Features
- Add Player: A form to add new players to the database, capturing details such as player name, team, position, goals, assists, and nationality.
- Update Player: A form to add update players in the database using details such as player name, team, goals, assists, and nationality.
- Delete Player: A form to delete players in the database using details such as player name, team, and nationality.
- Search Players: A search interface with dropdown menus to filter players by country, team, position, and sort results by most goals or assists.
- Database: MySQL database to store detailed information about players, teams, leagues, and national teams.
- Backend: Node.js server with Express framework to handle API requests, manage database interactions, and serve the frontend.
- Frontend: HTML, CSS, and JavaScript for a simple and interactive user interface.

## Technologies Used
- Frontend: HTML, CSS, JavaScript
- Backend: Node.js, Express
- Database: MySQL
- API: RESTful endpoints for adding, updating, deleting, and searching players
- Middleware: CORS and body-parser for handling cross-origin requests and parsing request bodies

## Installation
1. Clone the repository
`git clone https://github.com/alvaradoarturo/soccer-stats-database.git
cd soccer-stats-database`

2. Install backend dependencies
`npm install`

3. Configure MySQL Database
- Create a MySQL database named SoccerPlayerProps.
- Import the provided SQL file to create the necessary tables and seed data.

4. Update Database Configuration
- Update the MySQL connection settings in server.js with your MySQL username and password.

5. Start the Backend Server
`node server.js`

6. Open the Application
- Open index.html in your browser to start using the application.

Contact
For any questions or feedback, please reach out to aalva058@gmai.com.
