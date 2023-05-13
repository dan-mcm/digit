\c digit

CREATE TABLE IF NOT EXISTS players(
    id SERIAL PRIMARY KEY,
    player_name VARCHAR(20) UNIQUE,
    gold BIGINT,
    attack INT,
    hit_points INT,
    luck INT  
);

CREATE TABLE IF NOT EXISTS leaderboard(
    id SERIAL PRIMARY KEY,
    player_id INT REFERENCES players(id),
    score INT
);