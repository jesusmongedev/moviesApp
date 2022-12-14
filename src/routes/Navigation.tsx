import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';

import { HomeScreen } from '../screens/HomeScreen';
import { DetailScreen } from '../screens/DetailScreen';
import { Movie } from '../types/movieDB.type';

export type RootStackParams = {
  HomeScreen: undefined,
  DetailScreen: Movie
}

const Stack = createStackNavigator<RootStackParams>();

export const Navigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle:{backgroundColor: 'white'}
      }}
    >
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="DetailScreen" options={{ cardStyle: { backgroundColor: '#f5f5f5' } }} component={DetailScreen} />
    </Stack.Navigator>
  );
}