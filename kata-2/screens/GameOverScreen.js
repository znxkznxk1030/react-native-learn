import React from 'react';
import { View, Button, Text, StyleSheet, Image } from 'react-native';
import BodyText from '../components/BodyText';
import TitleText from '../components/TitleText';

const GameOverScreen = (props) => {
  const { rounds, userNumber, onRestart } = props;

  return (
    <View style={styles.screen}>
      <TitleText>The Game is Over!</TitleText>
      <View style={styles.imageContainer}>
        <Image
        fadeDuration={1000}
          // source={require('../assets/success.png')}
          source={{
            uri: 'https://s3.amazonaws.com/www.explorersweb.com/wp-content/uploads/2021/05/23233000/Summit-Everest-MingmaG.jpg',
          }}
          style={styles.image}
          resizeMode="cover"
        />
      </View>
      <BodyText>Number of rounds: {rounds}</BodyText>
      <BodyText>Number was: {userNumber}</BodyText>
      <Button title="NEW GAME" onPress={onRestart} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: 'black',
    overflow: 'hidden',
    marginVertical: 30,
  },
  image: {
    width: '100%',
    height: '100%',
  },
});

export default GameOverScreen;
