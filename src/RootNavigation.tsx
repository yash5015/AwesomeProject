import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator, DrawerContent} from '@react-navigation/drawer';
import Home from './screens/Home';
import Article from './screens/Article';
import CustomDrawer from './CustomDrawer';

const Drawer = createDrawerNavigator();
const RootNavigation = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          drawerStyle: {
            backgroundColor: 'red',
            width: 250,
          },
        }}
        drawerContent={props => <CustomDrawer {...props} />}>
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Article" component={Article} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;

const styles = StyleSheet.create({});
