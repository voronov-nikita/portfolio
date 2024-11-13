import React, { useState } from 'react';
import { SafeAreaView, View, Text, Button } from 'react-native';
import GameScreen from './components/GameScreen';
import GameOverScreen from './components/GameOverScreen';

const App = () => {
  const [isGameOver, setIsGameOver] = useState(false);
  const [score, setScore] = useState(0);

  const handleGameOver = (finalScore) => {
    setIsGameOver(true);
    setScore(finalScore);
  };

  const restartGame = () => {
    setIsGameOver(false);
    setScore(0);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {isGameOver ? (
        <GameOverScreen score={score} onRestart={restartGame} />
      ) : (
        <GameScreen onGameOver={handleGameOver} />
      )}
    </SafeAreaView>
  );
};

export default App;
