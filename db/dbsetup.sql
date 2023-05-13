\c digit

-- for tracking all match data - may contain duplicates
CREATE TABLE IF NOT EXISTS players(
    id SERIAL PRIMARY KEY,
    player_name VARCHAR(20) UNIQUE,
    gold BIGINT,
    attack INT,
    hit_points INT,
    luck INT  
);