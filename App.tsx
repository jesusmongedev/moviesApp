import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
// import { RnAnimatedScreen } from './src/screens/RnAnimatedScreen';
import { Navigation } from './src/routes/Navigation';
import { GradientProvider } from './src/context/GradientContext';
// import { AnimationScreen } from './src/screens/AnimationScreen';

export const App = () => {

  return (
    <NavigationContainer>
      <GradientProvider>
      <Navigation/>
      {/* <AnimationScreen/> */}
      {/* <RnAnimatedScreen/> */}
      </GradientProvider>
    </NavigationContainer>
  );
};


