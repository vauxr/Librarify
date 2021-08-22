/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator }  from  '@react-navigation/stack';
import Home from './src/views/Home';
import Library from './src/views/Library';
const Stack = createStackNavigator();
const App = () => (  
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home}/>
      <Stack.Screen name="Library" component={Library}/>
  </Stack.Navigator>
  </NavigationContainer>
  )


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#e0e0e0',
    padding: 19
  }
});

export default App;
