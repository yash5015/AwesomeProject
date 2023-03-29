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

const Chat = ({navigation, route}) => {
  const [messages, setMessages] = useState([]);
  const handleChat = id => {
    navigation.navigate('ChatApp', {
      FoodId: id,
    });
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

export default Chat;

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
