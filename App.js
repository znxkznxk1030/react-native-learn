import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';

import * as Device from 'expo-device';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  console.log('Device totalMemory : ' + Device.totalMemory);
  console.log('Device modelName : ' + Device.modelName);

  console.log('Rerendering ' + JSON.stringify(courseGoals));

  const addGoalHandler = (goalTitle) => {
    console.log('goalTitle : ' + goalTitle);
    if (goalTitle.length === 0) {
      return;
    }

    setCourseGoals([
      ...courseGoals,
      { id: parseInt(Math.random() * 1000000).toString(), value: goalTitle },
    ]);
    setIsAddMode(false);
  };

  const removeGoalHandler = (goalId) => {
    console.log('To be deleted : ' + goalId);
    console.log(courseGoals);
    setCourseGoals([...courseGoals.filter((_goal) => _goal.id !== goalId)]);
  };

  const cancelGoalAdditionHandler = () => {
    setIsAddMode(false);
  };

  return (
    <View style={styles.screen}>
      <Button title="Add New Goal" onPress={() => setIsAddMode(true)} />
      <GoalInput
        visible={isAddMode}
        onAddGoal={addGoalHandler}
        onCancel={cancelGoalAdditionHandler}
      />
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
