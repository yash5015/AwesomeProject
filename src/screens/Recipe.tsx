/* eslint-disable react-native/no-inline-styles */
import {Image, StyleSheet, Text, View, Pressable} from 'react-native';
import React, {useEffect, useState} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Recipe = ({Fid, label, image, ingredients}) => {
  const [like, setLike] = useState([]);
  const [LikedData, setLikedData] = useState([]);
  const getLikedFood = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('FavFood');
      console.log('json value', jsonValue);
      if (jsonValue != null) {
        setLike(JSON.parse(jsonValue));
      }
    } catch (e) {
      console.log('error at like', e);
    }
  };

  const handleLike = async id => {
    const jsonValue = await AsyncStorage.getItem('FavFood');
    // console.log('json value', jsonValue);
    let arrLike = JSON.parse(jsonValue);
    // console.log('arrLike', arrLike);
    if (arrLike) {
      if (!arrLike.includes(id)) {
        arrLike.push(id);
      } else {
        arrLike.splice(arrLike.indexOf(id), 1);
      }
    }
    setLike([...arrLike]);
    const jsonValue2 = JSON.stringify(arrLike);
    await AsyncStorage.setItem('FavFood', jsonValue2);
    // console.log('after json value', jsonValue2);
  };
  useEffect(() => {
    getLikedFood();
  }, []);
  return (
    <View style={styles.card}>
      <View style={styles.fav}>
        <Pressable onPress={() => handleLike(Fid)}>
          {/* {console.log('like', like)} */}
          {!like.includes(Fid) ? (
            <AntDesign name="hearto" size={30} color="#fb3958" />
          ) : (
            <AntDesign name="heart" size={30} color="#fb3958" />
          )}
        </Pressable>
      </View>
      <View
        style={{
          marginTop: 25,
        }}>
        <Text style={styles.title}>{label}</Text>
        <View style={styles.imgcont}>
          <Image source={{uri: `${image}`}} style={styles.img} />
        </View>

        <View style={styles.ingredients}>
          {ingredients.map((items, id) => (
            <Text style={styles.ingredientsText}>
              {id + 1}. {items}
            </Text>
          ))}
        </View>
      </View>
    </View>
  );
};

export default Recipe;

const styles = StyleSheet.create({
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
