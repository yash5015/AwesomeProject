import {Image, StyleSheet, ScrollView, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../api';

const Like = ({navigation}) => {
  const [LikedData, setLikedData] = useState([]);
  const [Data, setData] = useState([]);
  const getLikedFood = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('FavFood');
      // console.log('json value', jsonValue);
      if (jsonValue != null) {
        setLikedData(JSON.parse(jsonValue));
      }
    } catch (e) {
      console.log('error at like', e);
    }
  };
  // const getLikedData = async () => {
  //   try {
  //     const jsonValue = await AsyncStorage.getItem('api');
  //     // console.log('api value', jsonValue);
  //     if (jsonValue != null) {
  //       setData(JSON.parse(jsonValue));
  //     }
  //   } catch (e) {
  //     console.log('error at like', e);
  //   }
  // };
  useEffect(() => {
    navigation.addListener('focus', () => {
      getLikedFood();
      // getLikedData();
    });
  });
  return (
    <ScrollView>
      <View style={styles.FoodItems}>
        {api.map((item, id) =>
          LikedData.includes(item.id) ? (
            <View key={id} style={styles.card}>
              <View style={{marginTop: 25}}>
                <Text style={styles.title}>{item.recipe.label}</Text>
                <View style={styles.imgcont}>
                  <Image
                    source={{uri: `${item.recipe.image}`}}
                    style={styles.img}
                  />
                </View>

                <View style={styles.ingredients}>
                  {item.recipe.ingredientLines.map((ingitems, Iid) => (
                    <Text style={styles.ingredientsText}>
                      {Iid + 1}. {ingitems}
                    </Text>
                  ))}
                </View>
              </View>
            </View>
          ) : null,
        )}
      </View>
    </ScrollView>
  );
};

export default Like;

const styles = StyleSheet.create({
  FoodItems: {
    alignItems: 'center',
  },
  fav: {
    width: 30,
    height: 30,
    position: 'absolute',
    right: 5,
    top: 5,
  },

  card: {
    width: '80%',
    padding: 10,
    borderRadius: 10,
    // alignItems: 'center',
    borderWidth: 1,
    marginVertical: 10,
    elevation: 10,
    backgroundColor: '#fff0ff',
  },
  imgcont: {
    width: '100%',
    height: 250,
    alignItems: 'center',
    borderRadius: 10,
    // backgroundColor: 'yellow',
    marginVertical: 10,
  },
  img: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
    position: 'absolute',
    resizeMode: 'cover',
  },
  title: {
    fontSize: 25,
    textAlign: 'center',
    fontWeight: 600,
  },
  ingredients: {
    marginVertical: 10,
    paddingVertical: 10,
  },
  ingredientsText: {
    color: 'green',
  },
});
