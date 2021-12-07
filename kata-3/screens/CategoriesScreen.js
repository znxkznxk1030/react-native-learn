import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  FlatList,
  Platform,
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { CATEGORIES } from '../data/dummy-data';
import Colors from '../constants/Colors';

const CategoriesScreen = (props) => {
  console.log(props);

  const renderGridItem = (itemData) => {
    return (
      <View style={styles.gridItem}>
        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate({
              routeName: 'CategoryMeals',
              params: {
                categoryId: itemData.item.id,
              },
            });
          }}
        >
          <Text>{itemData.item.title}</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <FlatList
      // style={styles.screen}
      keyExtractor={(item, index) => {
        return item.id;
      }}
      data={CATEGORIES}
      renderItem={renderGridItem}
      numColumns={2}
    />
  );
};

CategoriesScreen.navigationOptions = {
  headerTitle: 'Meal Categories',
  headerStyle: {
    backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : '',
  },
  headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor,
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
    // width: 150,
    // backgroundColor: 'black',
    // justifyContent: 'center',
    // alignItems: 'center'
  },
});

export default CategoriesScreen;
