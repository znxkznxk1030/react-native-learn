import React, { useRef, useState } from 'react';

import { View, Text, Button, StyleSheet, Alert } from 'react-native';
import NumberContainer from '../components/NumberContainer';
import Card from '../components/Card';

const generateRandomBetween = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const ret = Math.floor(Math.random() * (max - min)) + min;
  if (ret === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return ret;
  }
};

const GameScreen = (props) => {
  const [currentGuess, setCurrentGuess] = useState(
    generateRandomBetween(1, 100, props.userChoice)
  );

  const currentLow = useRef(1);
  const currentHigh = useRef(100);

  const nextGuessHandler = (direction) => {
    if (
      (direction === 'lower' && currentGuess <= props.userChoice) ||
      (direction === 'greater' && currentGuess >= props.userChoice)
    ) {
      Alert.alert("Don't lie", 'You know that this is wrong...', [
        { text: 'Sorry!', style: 'cancel' },
      ]);
      return;
    }

    if (direction === 'lower') {
      currentHigh.current = currentGuess;
    } else {
      currentLow.current = currentGuess;
    }

    setCurrentGuess(
      generateRandomBetween(currentLow, currentHigh, currentGuess)
    );
  };

  return (
    <View style={styles.screen}>
      <Text>Opponent's Guess</Text>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card style={styles.buttonContainer}>
        <Button
          title="LOWER"
          onPress={nextGuessHandler.bind(this, 'lower')}
        ></Button>
        <Button
          title="GREATER"
          onPress={nextGuessHandler.bind(this, 'greater')}
        ></Button>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    width: 300,
    maxWidth: '80%',
    justifyContent: 'space-around',
    marginTop: 20,
  },
});

export default GameScreen;
