import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Navigation } from './src/routes/Navigation';

export const App = () => {

  return (
    <NavigationContainer>
      <Navigation/>
    </NavigationContainer>
  );
};


