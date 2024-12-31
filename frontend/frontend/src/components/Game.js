import React, { useState } from 'react';

function Game() {
  const [score, setScore] = useState(0);
  const [question, setQuestion] = useState('What song is this snippet from?');
  const [userAnswer, setUserAnswer] = useState('');
  const [walletAddress, setWalletAddress] = useState('');
  const [gameStarted, setGameStarted] = useState(false);

  const startGame = async () => {
    const username = 'TestUser'; // Replace with actual username (perhaps from Telegram login)
    const response = await fetch('http://localhost:5000/api/games/start', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, walletAddress }),
    });

    const data = await response.json();
    if (data.message === 'Game started') {
      setGameStarted(true);
    }
  };

  const submitAnswer = async () => {
    const response = await fetch('http://localhost:5000/api/games/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ walletAddress, answer: userAnswer }),
    });

    const data = await response.json();
    if (data.message === 'Answer submitted') {
      setScore(data.score);
    }
  };

  return (
    <div>
      <h1>Music Trivia</h1>
      {gameStarted ? (
        <>
          <p>{question}</p>
          <input
            type="text"
            value={userAnswer}
            onChange={(e) => setUserAnswer(e.target.value)}
            placeholder="Your answer"
          />
          <button onClick={submitAnswer}>Submit Answer</button>
          <p>Score: {score}</p>
        </>
      ) : (
        <button onClick={startGame}>Start Game</button>
      )}
    </div>
  );
}

export default Game;
