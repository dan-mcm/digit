const axios = require('axios').default;
const dotenv = require('dotenv').config();
const { Pool } = require('pg');

function createPool() {
    let pool;
  
    if (process.env.NODE_ENV === 'production') {
      pool = new Pool({
        connectionString: process.env.DATABASE_URL,
        ssl: {
          rejectUnauthorized: false
        }
      });
    }
  
    if (process.env.NODE_ENV !== 'production') {
      pool = new Pool({
        user: process.env.DB_USER,
        host: process.env.DB_HOST,
        database: process.env.DB_NAME,
        password: process.env.DB_PASSWORD,
        port: process.env.DB_PORT
      });
    }
  
    pool.on('error', (err, client) => {
      console.error('Unexpected error on idle client', err);
      process.exit(-1);
    });
  
    return pool;
  }

  // spec didnt specify creating a leaderboard table, will be needed for this to work...
function getPlayers(pool) {
    return pool.connect().then((client) => {
        return client
        .query('SELECT * FROM players')
        .then((res) => {
            client.release();
            return res.rows;
        })
        .catch((err) => {
            client.release();
            console.log(err.stack);
        });
    });
}

function createPlayer(pool, player_name) {
    // hardcoding defualt values for new players for gold, attack, hp, luck
    // these could be customized via frontend selection modifiers later
    let gold = 10000;
    let attack = 10;
    let hit_points = 25; 
    let luck = 7;

    return pool.connect().then((client) => {
        return client
          .query(
            `INSERT INTO players (player_name, gold, attack, hit_points, luck)
              VALUES ('${player_name}', '${gold}', '${attack}', '${hit_points}', '${luck}')`
          )
          .then((res) => {
            client.release();
            return res;
          })
          .catch((err) => {
            client.release();
            console.log(err.stack);
          });
      });
}

// spec didnt specify creating a leaderboard table, will be needed for this to work...
function getLeaderboard(pool) {
    return pool.connect().then((client) => {
        return client
        .query('SELECT * FROM leaderboard')
        .then((res) => {
            client.release();
            return res.rows;
        })
        .catch((err) => {
            client.release();
            console.log(err.stack);
        });
    });
}

module.exports = {
    createPool,
    getPlayers,
    createPlayer,
    getLeaderboard
}