import {
  StyleSheet,
  Text,
  ScrollView,
  View,
  Image,
  Pressable,
} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import firestore, {firebase} from '@react-native-firebase/firestore';
import {GiftedChat} from 'react-native-gifted-chat';
import api from '../api';
import AntDesign from 'react-native-vector-icons/AntDesign';
import ChatApp from './ChatApp';

const Chats = ({navigation, route}) => {
  const [messages, setMessages] = useState([]);
  const handleChat = id => {
    navigation.navigate('ChatApp', {
      FoodId: id,
      headerTitle: api[id - 1].recipe.label,
      headerDp: api[id - 1].recipe.image,
    });
  };
  const getMarker = () => {
    // const events = await firebase.firestore().collection('chats');
    // events.get().then(querySnapshot => {
    //   const tempDoc = querySnapshot.docs.map(doc => {
    //     return {id: doc.id, ...doc.data()};
    //   });
    //   console.log(tempDoc);
    // });
    // let db = firestore();
    // console.log(db.collection('chats'));
  };
  useEffect(() => {
    // const querySnapShot = firestore()
    //   .collection('chats')
    //   .orderBy('createdAt', 'desc');
    // querySnapShot.onSnapshot(snapShot => {
    //   const allChats = snapShot.docs.map(snap => {
    //     console.log(JSON.stringify(snap));
    //     return {...snap.data(), createdAt: new Date()};
    //   });
    //   setMessages(querySnapShot);
    // });
    // console.log(getMarker());
    // getMarker();
  }, []);
  let foodIds = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <ScrollView>
      <View style={styles.chatitems}>
        {foodIds.map((item, id) => (
          <Pressable
            style={styles.items}
            key={id}
            onPress={() => handleChat(item)}>
            <View style={styles.items}>
              <Image
                source={{uri: `${api[item - 1].recipe.image}`}}
                style={styles.img}
              />
              <Text style={styles.name}>{api[item - 1].recipe.label}</Text>
            </View>
            <AntDesign
              style={styles.rightIcon}
              name="right"
              size={24}
              color="#fff"
            />
          </Pressable>
        ))}
      </View>
    </ScrollView>
  );
};

export default Chats;

const styles = StyleSheet.create({
  chatitems: {
    marginVertical: 20,
    alignItems: 'center',
  },
  items: {
    width: '80%',
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: 'grey',
    marginVertical: 10,
    borderRadius: 10,
  },
  img: {
    width: 40,
    height: 40,
    borderRadius: 50,
    marginRight: 10,
  },
  name: {
    fontWeight: 600,
    color: '#fff',
  },
  rightIcon: {
    position: 'absolute',
    right: 0,
  },
});
