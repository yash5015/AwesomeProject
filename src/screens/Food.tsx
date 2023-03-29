import {
  StyleSheet,
  Text,
  ScrollView,
  View,
  TouchableOpacity,
  Pressable,
  Image,
  Alert,
} from 'react-native';
import React from 'react';
import api from '../api';

const Food = ({navigation, route}) => {
  const {id} = route.params;
  const handleChat = id => {
    // Alert.alert('Owner is busy right now', 'Please try to connect later');
    navigation.navigate('ChatApp', {
      FoodId: id,
    });
  };

  return (
    <ScrollView>
      <View style={styles.FoodItems}>
        <View style={styles.card}>
          <View style={{marginTop: 25}}>
            <Text style={styles.title}>{api[id - 1].recipe.label}</Text>
            <View style={styles.imgcont}>
              <Image
                source={{uri: `${api[id - 1].recipe.image}`}}
                style={styles.img}
              />
            </View>

            <View style={styles.ingredients}>
              {api[id - 1].recipe.ingredientLines.map((ingitems, Iid) => (
                <Text style={styles.ingredientsText} key={Iid}>
                  {Iid + 1}. {ingitems}
                </Text>
              ))}
            </View>
            <TouchableOpacity style={styles.btn}>
              <Pressable onPress={() => handleChat(id)}>
                <Text>Chat with owner</Text>
              </Pressable>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Food;
type FontWeight =
  | 'normal'
  | 'bold'
  | '100'
  | '200'
  | '300'
  | '400'
  | '500'
  | '600'
  | '700'
  | '800'
  | '900';

const styles = StyleSheet.create({
  btn: {
    backgroundColor: 'lightblue',
    textAlign: 'center',
    padding: 10,
  },
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
    fontWeight: '600' as FontWeight,
  },
  ingredients: {
    marginVertical: 10,
    paddingVertical: 10,
  },
  ingredientsText: {
    color: 'green',
  },
});
