import React from 'react';
import { View, StyleSheet } from 'react-native';

const Card = (props) => {
  return (
    <View style={{ ...styles.card, ...props.style }}>{props.children}</View>
  );
};

const styles = StyleSheet.create({
  card: {
    // flex: 1,
    width: 300,
    maxWidth: '80%',
    alignItems: 'center',
    shadowColor: '#000',  // for ios
    shadowOffset: { width: 0, height: 2 },  // for ios
    shadowRadius: 6,  // for ios
    shadowOpacity: 0.26,  // for ios
    elevation: 8, // for android
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
  },
});

export default Card;
