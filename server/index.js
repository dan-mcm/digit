const express = require('express')
const DB = require('./utils/dbQueries.js');

const app = express()
const port = 5000
app.use(express.json())
app.get('/health', (req, res) => {
  res.send('Healthy!')
})

// get all players from db
app.get('/players', (req, res) => {
    const pool = DB.createPool();
    const players = DB.getPlayers(pool);
    
    players
    .then(result =>{
        res.send(result)
    })
    .catch(err => res.send(err))
})

// create player to add to the db
app.post('/players/create', (req, res) => {
    const pool = DB.createPool();
    const createPlayer = DB.createPlayer(pool, req.body.player_name)
    createPlayer
        .then(result => {
            res.send(result)
        })
        .catch( err => res.send(err))
})  

// get leaderboard table
app.get('/leaderboard', (req, res) => {
    res.send('Leaderboard Endpoint')
})


app.listen(port, () => {
  console.log(`DIGIT App listening on port ${port}`)
})