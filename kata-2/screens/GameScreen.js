import React, { useState } from 'react';

import { View, Text, Button, StyleSheet } from 'react-native';
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
  return (
    <View style={styles.screen}>
      <Text>Opponent's Guess</Text>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card style={styles.buttonContainer}>
        <Button title="LOWER" onPress={() => {}}></Button>
        <Button title="GREATER" onPRess={() => {}}></Button>
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
