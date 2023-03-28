import {
  Image,
  StyleSheet,
  ScrollView,
  Text,
  TextInput,
  Pressable,
  View,
} from 'react-native';
import HomeFood from './HomeFood';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Food from './Food';
import Recipe from './Recipe';
import Chat from './Chat';
const Stack = createNativeStackNavigator();
const Home = ({navigation}) => {
  return (
    <Stack.Navigator
      independent="true"
      initialRouteName="HomeFood"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="HomeFood" component={HomeFood} />
      <Stack.Screen name="Chat" component={Chat} />
      {/* <Stack.Screen name="Recipe" component={Recipe} /> */}
    </Stack.Navigator>
  );
};

export default Home;

const styles = StyleSheet.create({});
