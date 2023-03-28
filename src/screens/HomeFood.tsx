import {
  Image,
  StyleSheet,
  ScrollView,
  Text,
  TextInput,
  Pressable,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Recipe from './Recipe';
import api from '../api';
import AsyncStorage from '@react-native-async-storage/async-storage';

const HomeFood = ({navigation}) => {
  const [recipe, setRecipe] = useState([]);
  const getRecipe = async () => {
    setRecipe(api);
    try {
      const jsonValue = JSON.stringify(recipe);
      await AsyncStorage.setItem('api', jsonValue);
    } catch (e) {
      // read error
      console.log('error in home', e);
    }
  };
  useEffect(() => {
    getRecipe();
  }, []);

  return (
    <ScrollView>
      <View>
        <View style={styles.FoodItems}>
          {recipe.map((data, id) => (
            <Recipe
              navigation={navigation}
              key={id}
              Fid={data.id}
              label={data.recipe.label}
              image={data.recipe.image}
              ingredients={data.recipe.ingredientLines}
            />
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

export default HomeFood;

const styles = StyleSheet.create({
  FoodItems: {
    alignItems: 'center',
  },
});
