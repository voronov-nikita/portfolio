import React, { useRef } from 'react';
import { View, Text, StyleSheet, PanResponder, Animated } from 'react-native';

const Card = ({ question, onSwipeLeft, onSwipeRight }) => {
  const pan = useRef(new Animated.ValueXY()).current;

  // PanResponder для обработки жестов
  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: Animated.event(
      [null, { dx: pan.x, dy: pan.y }],
      { useNativeDriver: false }
    ),
    onPanResponderRelease: (_, gesture) => {
      if (gesture.dx > 120) {
        // Свайп вправо
        Animated.timing(pan, {
          toValue: { x: 500, y: gesture.dy },
          duration: 200,
          useNativeDriver: true,
        }).start(() => {
          onSwipeRight(); // вызываем колбэк для GameScreen
          pan.setValue({ x: 0, y: 0 });
        });
      } else if (gesture.dx < -120) {
        // Свайп влево
        Animated.timing(pan, {
          toValue: { x: -500, y: gesture.dy },
          duration: 200,
          useNativeDriver: true,
        }).start(() => {
          onSwipeLeft(); // вызываем колбэк для GameScreen
          pan.setValue({ x: 0, y: 0 });
        });
      } else {
        // Возврат карточки в центр, если свайп недостаточно силен
        Animated.spring(pan, {
          toValue: { x: 0, y: 0 },
          useNativeDriver: true,
        }).start();
      }
    },
  });

  const rotate = pan.x.interpolate({
    inputRange: [-200, 0, 200],
    outputRange: ['-10deg', '0deg', '10deg'],
  });

  return (
    <Animated.View
      style={[
        styles.card,
        { transform: [{ translateX: pan.x }, { translateY: pan.y }, { rotate }] },
      ]}
      {...panResponder.panHandlers}
    >
      <Text style={styles.question}>{question.text}</Text>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: '90%',
    padding: 50,
    borderRadius: 10,
    fontStyle:{
        color: '#afafaf',

    },
    backgroundColor: '#181818',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    // elevation: 4,
  },
  question: {
    fontSize: 18,
    color: "#afafaf",
    textAlign: 'center',
  },
});

export default Card;
