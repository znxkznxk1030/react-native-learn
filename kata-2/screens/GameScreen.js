import React from 'react';

import { View, Text, StyleSheet } from 'react-native';

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
  return <View></View>;
};

const styles = StyleSheet.create({});

export default GameScreen;
