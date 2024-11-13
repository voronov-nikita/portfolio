import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import Card from './Card'; // Предполагаем, что у вас есть этот компонент для карт
import { FontAwesome } from '@expo/vector-icons';

const questions = [
  { id: 1, text: "Увеличить налоги?", effectLeft: { wealth: -10, people: -5 }, effectRight: { wealth: 10, people: 5 } },
  { id: 2, text: "Построить церковь?", effectLeft: { religion: 15, wealth: -10 }, effectRight: { religion: -5, people: 10 } },
  { id: 3, text: "Увеличить армию?", effectLeft: { army: -10, people: -5 }, effectRight: { army: 10, people: 5 } },
];

const GameScreen = () => {
  const [kingdom, setKingdom] = useState({ army: 50, religion: 50, people: 50, wealth: 50 });
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);

  // Функция для применения эффектов выбора
  const applyEffects = (effects) => {
    const newKingdom = { ...kingdom };
    for (let key in effects) {
      newKingdom[key] += effects[key];
      // Проверка выхода за пределы
      if (newKingdom[key] <= 0 || newKingdom[key] >= 100) {
        setIsGameOver(true);
        return;
      }
    }
    setKingdom(newKingdom);
    setCurrentQuestionIndex((prevIndex) => (prevIndex + 1) % questions.length);
  };

  const handleSwipeLeft = () => {
    const currentQuestion = questions[currentQuestionIndex];
    applyEffects(currentQuestion.effectLeft);
  };

  const handleSwipeRight = () => {
    const currentQuestion = questions[currentQuestionIndex];
    applyEffects(currentQuestion.effectRight);
  };

  // Перезапуск игры
  const restartGame = () => {
    setKingdom({ army: 50, religion: 50, people: 50, wealth: 50 });
    setCurrentQuestionIndex(0);
    setIsGameOver(false);
  };

  // Функция для отображения заливки иконки
  const getFillColor = (value) => {
    const color = value > 50 ? 'white' : 'grey';
    return { color, opacity: value / 100 }; // чем выше значение, тем более насыщенный цвет
  };

  if (isGameOver) {
    return (
      <View style={styles.container}>
        <Text style={styles.deathText}>Ваше правление закончилось!</Text>
        <Button title="Начать заново" onPress={restartGame} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.stats}>
        <View style={styles.iconContainer}>
          <FontAwesome name="shield" size={50} style={[styles.icon, getFillColor(kingdom.army)]} />
          <Text>Армия</Text>
        </View>
        <View style={styles.iconContainer}>
          <FontAwesome name="cross" size={50} style={[styles.icon, getFillColor(kingdom.religion)]} />
          <Text>Церковь</Text>
        </View>
        <View style={styles.iconContainer}>
          <FontAwesome name="users" size={50} style={[styles.icon, getFillColor(kingdom.people)]} />
          <Text>Народ</Text>
        </View>
        <View style={styles.iconContainer}>
          <FontAwesome name="money" size={50} style={[styles.icon, getFillColor(kingdom.wealth)]} />
          <Text>Экономика</Text>
        </View>
      </View>
      {questions[currentQuestionIndex] && (
        <Card
          question={questions[currentQuestionIndex]}
          onSwipeLeft={handleSwipeLeft}
          onSwipeRight={handleSwipeRight}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f0f0f0',
  },
  stats: {
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  iconContainer: {
    alignItems: 'center',
  },
  icon: {
    marginBottom: 5,
  },
  deathText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'red',
    marginBottom: 20,
    textAlign: 'center',
  },
});

export default GameScreen;
