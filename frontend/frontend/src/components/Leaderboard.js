import React, { useState, useEffect } from 'react';

function Leaderboard() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchLeaderboard = async () => {
      const response = await fetch('http://localhost:5000/api/games/leaderboard');
      const data = await response.json();
      setUsers(data.users);
    };

    fetchLeaderboard();
  }, []);

  return (
    <div>
      <h1>Leaderboard</h1>
      <ul>
        {users.map((user, index) => (
          <li key={index}>{user.username}: {user.score}</li>
        ))}
      </ul>
    </div>
  );
}

export default Leaderboard;
