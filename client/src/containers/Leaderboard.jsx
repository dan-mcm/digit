import React, { useEffect, useState } from 'react';
import axios from "axios";

export default function Leaderboard(props){

    const [leaderboard, setLeaderboard] = useState([]);

    useEffect(() => {
        getLeaderboard()
    }, [])

    const getLeaderboard = () => {
        return axios.get('/leaderboard').then((response) => {
            let data = response.data;
            let sortedDataByScore = data.sort((a, b) => b.score - a.score)
            setLeaderboard(sortedDataByScore);
          }
        )
    }


    return (
        <div>
            <h1>Leaderboard</h1>
            <table>
                <thead>
                    <tr>
                    <th>Rank</th>
                    <th>Player ID</th>
                    <th>Score</th>
                    </tr>
                </thead>
                <tbody>
                    {/* TODO can add a table join on express server end to grab in player name */}
                    {leaderboard.map((player,index) => (
                    <tr key={player.id}>
                        <td>{index + 1}</td>
                        <td>{player.player_id}</td>
                        <td>{player.score}</td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
    
}