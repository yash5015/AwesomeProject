import {StyleSheet, Text, ScrollView, View} from 'react-native';
import React from 'react';
import {Dropdown} from 'react-native-element-dropdown';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';

const CustomDrawer = () => {
  return (
    <ScrollView style={styles.container}>
      <View>
        <Text>HOME</Text>
      </View>
      <View>
        <Text>ARTICLE</Text>
      </View>
      <View>
        <Text>PORTFOLIO</Text>
      </View>
      <View>
        <Text>CONTACT US</Text>
      </View>
    </ScrollView>
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'yellow',
    padding: 16,
  },
  dropdown: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});
