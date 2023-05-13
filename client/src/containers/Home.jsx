import React, { useState, useEffect } from 'react';
import axios from "axios";

// Create Player
export default function Home(props) {
   
    const [player, setPlayer] = useState('');
    const [existingPlayers, setExistingPlayers] = useState([]);
    const [playerCreateMessage, setPlayerCreateMessage] = useState('');

    useEffect(() => {
        getPlayers()
    }, [])

    const createPlayer = (player_name) => {
        return axios.post(`/players/create`, { player_name }).then((matches) => {
            let data = matches.data;
            setPlayer(data);
            setPlayerCreateMessage('Successfully Created Player.')
            // refreshing player data
            getPlayers();
          }
        );
    }

    const getPlayers = () => {
        return axios.get('/players').then((players) => {
            let data = players.data;
            setExistingPlayers(data);
          }
        )
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(`Creating player, ${player}`);
        createPlayer(player);
    }

    const handleInputChange = (e) => {
        setPlayer(e.target.value);
    }

    return (
        <div>
            <h1>Home</h1>
            <p>Welcome to Gamesite! Create a new account below.</p>
            <hr />
            <h2>Account Creation</h2>
            <p>Insert your playername below and submit.</p>
            <p>Max 20 characters</p>
            <form onSubmit={handleSubmit}>
                <input onChange={handleInputChange} value={player} maxLength='20'></input>
                <button type='submit'>Click to submit</button>
            </form>
            <p>{playerCreateMessage}</p>
            <hr />
            <h2>Current Registered Players</h2>
            {existingPlayers.map(player => {
                return(
                    <ul key={player.id}>
                        <li>id: {player.id}</li>
                        <li>name: {player.player_name}</li>
                        <li>gold: {player.gold}</li>
                        <li>attack: {player.attack}</li>
                        <li>hp: {player.hit_points}</li>
                        <li>luck: {player.luck}</li>
                    </ul>
                )
            })}
        </div>
    )
}
