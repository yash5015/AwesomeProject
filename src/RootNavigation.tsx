import {
  Image,
  StyleSheet,
  ScrollView,
  Text,
  TextInput,
  Pressable,
  View,
} from 'react-native';
import HomeFood from './screens/HomeFood';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Food from './screens/Food';
import Recipe from './screens/Recipe';

import DrawNavigation from './DrawNavigation';
import {NavigationContainer} from '@react-navigation/native';
// import Chats from './Chats';
import ChatApp from './screens/ChatApp';
import symbolicateStackTrace from 'react-native/Libraries/Core/Devtools/symbolicateStackTrace';
const Stack = createNativeStackNavigator();
const RootNavigation = ({navigation}) => {
  const handleTitle = route => {
    return (
      <View>
        {/* <Image
          source={{uri: `${imageLink}`}}
          style={{width: 40, height: 40, borderRadius: 50, marginRight: 10}}
        /> */}
        <Text>route.params.headerTitle </Text>
      </View>
    );
  };

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="DrawNavigation"
        screenOptions={
          {
            // headerShown: false,
          }
        }>
        <Stack.Screen
          name="DrawNavigation"
          component={DrawNavigation}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="HomeFood"
          options={{title: 'Home'}}
          component={HomeFood}
        />
        {/* `${(route.params.image) => addDP(route.params.image)}${
              route.params.headerTitle
            }` */}
        <Stack.Screen name="Recipe" component={Recipe} />
        <Stack.Screen name="Food" component={Food} />
        <Stack.Screen
          name="ChatApp"
          options={({route}) => ({
            headerTitle: (
              props, // App Logo
            ) => (
              <View style={styles.items}>
                <Image
                  style={styles.img}
                  source={{uri: `${route.params.headerDp}`}}
                  resizeMode="contain"
                />
                <Text style={styles.name}>{route.params.headerTitle}</Text>
              </View>
            ),
            headerTitleAlign: 'center',
            // title: `${route.params.headerTitle}`,
          })}
          component={ChatApp}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;

const styles = StyleSheet.create({
  items: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  name: {
    fontWeight: 600,
    color: '#000',
    fontSize: 16,
  },
  img: {
    width: 40,
    height: 40,
    borderRadius: 50,
    marginRight: 10,
  },
});
