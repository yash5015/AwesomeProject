import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator, DrawerContent} from '@react-navigation/drawer';
// import RootNavigation from './RootNavigation';

// import CustomDrawer from './CustomDrawer';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Like from './screens/Like';
// import Recipe from './screens/Recipe';
// import Food from './screens/Food';
// import ChatApp from './screens/ChatApp';
import Chats from './screens/Chats';
import HomeFood from './screens/HomeFood';
const Drawer = createDrawerNavigator();

const DrawNavigation = () => {
  const ShowLikes = props => {
    props.navigation.navigate('Like');
  };
  return (
    // drawerContent={props => <CustomDrawer {...props} />}
    // <NavigationContainer></NavigationContainer>
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: {
          backgroundColor: 'aliceblue',
          width: 250,
        },
        headerStyle: {
          backgroundColor: 'aliceblue',
        },
      }}>
      <Drawer.Screen
        name="HomeFood"
        component={HomeFood}
        options={props => ({
          title: 'Home',
          headerRight: () => {
            return (
              <Pressable onPress={() => ShowLikes(props)}>
                <AntDesign name="heart" size={24} color="#fb3958" />
              </Pressable>
            );
          },
          headerLeftContainerStyle: {
            paddingHorizontal: 10,
          },
          headerRightContainerStyle: {
            paddingHorizontal: 10,
          },
        })}
      />
      <Drawer.Screen name="Like" component={Like} />
      {/* <Drawer.Screen name="Recipe" component={Recipe} /> */}
      {/* <Drawer.Screen name="Food" component={Food} /> */}
      <Drawer.Screen name="Chats" component={Chats} />
      {/* <Drawer.Screen name="ChatApp" component={ChatApp} /> */}
    </Drawer.Navigator>
  );
};

export default DrawNavigation;

const styles = StyleSheet.create({});
