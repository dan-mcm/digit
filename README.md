# DIGIT

Developed on Windows 11 OS
* Node v18.16.0
* NPM  v9.5.1

## DB
Running postgres DB via docker-compose container.

### Initial Setup
```
cd db-setup
docker-compose up -d
# exec into container
docker exec -it digit psql -U dbuser digit

# useful command to random enter existing user to leaderboard
INSERT INTO leaderboard (player_id, score)
SELECT id, 0, floor(random() * 10000) + 1
FROM players;
```

## Client
Bootstrapped from create-react-app.

```
cd client
npm install
npm run start
```

### Endpoints

```
/home # landing page - create player
/leaderboard # retrieves leaderboard
/battles # handles user battle submissions / battle processor
```

## Server
Bootstrapped from express.

```
cd server
npm install
npm run start
```

### Environmental Variables
As the express server calls the DB this is configured via a .env file to mimic production safety. You will need to create a .env file within the server directory and pass in the following varialbes:

```
# staging/dev test values
DB_USER=""
DB_PASSWORD=""
DB_HOST=""
DB_NAME=""
DB_PORT=""
```