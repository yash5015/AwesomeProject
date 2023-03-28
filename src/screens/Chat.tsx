import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
import {getAnalytics} from 'firebase/analytics';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAGILAJzwoMGTPwlYPoj3MwE8wxU6DazmY',
  authDomain: 'food-chat-8fb86.firebaseapp.com',
  projectId: 'food-chat-8fb86',
  storageBucket: 'food-chat-8fb86.appspot.com',
  messagingSenderId: '983588635194',
  appId: '1:983588635194:web:1026b51f48a101af9deb03',
  measurementId: 'G-WK6WJJH2XZ',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const Chat = () => {
  const messageRef = firestore.collection('message');
  const query = messagesRef.orderBy('createdAt').limit(25);
  const [message] = useCollectionData(query, {idField: 'id'});
  return (
    <View>
      <Text>Chat</Text>
    </View>
  );
};

export default Chat;

const styles = StyleSheet.create({});
