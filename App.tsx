import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Getstarted from './screens/Getstarted';
import Home from './screens/Home';
import Halamandaftar from './screens/Halamandaftar';

import {IconButton} from 'react-native-paper';
import Isiquran from './screens/Isiquran';

const Stack = createNativeStackNavigator();
const Tab = createMaterialTopTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Getstarted">
        <Stack.Screen name="Getstarted" component={Getstarted} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Halamandaftar" component={Halamandaftar} options={{headerShown: true}} />
        <Stack.Screen name="Isiquran" component={Isiquran} options={{headerShown: true}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
