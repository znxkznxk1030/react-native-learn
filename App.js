import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {
  Button,
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  FlatList,
} from 'react-native';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);

  const addGoalHandler = (goalTitle) => {
    console.log(goalTitle);
    setCourseGoals([
      ...courseGoals,
      { id: parseInt(Math.random() * 1000000).toString(), value: goalTitle },
    ]);
  };

  const removeGoalHandler = (goalId) => {
    setCourseGoals([...courseGoals.filter((_goal) => _goal.id !== goalId)]);
  };

  return (
    <View style={styles.screen}>
      <GoalInput onAddGoal={addGoalHandler} />
      <FlatList
        keyExtractor={(item) => item.id}
        data={courseGoals}
        renderItem={(itemData) => (
          <GoalItem
            onDelete={removeGoalHandler}
            id={itemData.item.id}
            title={itemData.item.value}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
});
