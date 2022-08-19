import { View, Image, Dimensions } from 'react-native';
import React from 'react'
import { StackScreenProps } from '@react-navigation/stack';

import { RootStackParams } from '../routes/Navigation';
import { styles } from '../styles/movieTheme';

const screenHeight = Dimensions.get('screen').height

interface DetailProps extends StackScreenProps<RootStackParams, 'DetailScreen'>{}

export const DetailScreen = ({ navigation: { pop }, route: { params } }: DetailProps) => {

  const { poster_path } = params

  const uri = `https://image.tmdb.org/t/p/w500/${poster_path}`  

  return (
    <View style={{ 
      ...styles.imageContainer, 
      width: '100%', 
      height: screenHeight * 0.7 
    }}>
      <Image
        source={{
          uri
        }}
        style={{
          ...styles.image,
          borderRadius: 0,
          borderBottomLeftRadius: 25,
          borderBottomRightRadius: 25
        }}
      />   
    </View>
  )
}

