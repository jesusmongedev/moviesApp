import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { RnAnimatedScreen } from './src/screens/RnAnimatedScreen';
// import { Navigation } from './src/routes/Navigation';
// import { AnimationScreen } from './src/screens/AnimationScreen';

export const App = () => {

  return (
    <NavigationContainer>
      {/* <Navigation/> */}
      {/* <AnimationScreen/> */}
      <RnAnimatedScreen/>
    </NavigationContainer>
  );
};


