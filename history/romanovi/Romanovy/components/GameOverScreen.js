import React from 'react';
import { View, Text, Button } from 'react-native';

const GameOverScreen = ({ score, onRestart }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Игра окончена!</Text>
      <Text>Счет: {score}</Text>
      <Button title="Начать заново" onPress={onRestart} />
    </View>
  );
};

export default GameOverScreen;
