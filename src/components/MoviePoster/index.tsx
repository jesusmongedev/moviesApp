import React from 'react'
import { Image } from 'react-native';

import { StackNavigationProp } from '@react-navigation/stack';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { Movie } from '../../types/movieDB.type';
import { RootStackParams } from '../../routes/Navigation';

import { styles } from '../../styles/movieTheme';
import { URI } from '../../constants/uris';
interface Props {
    movie: Movie,
    height?: number,
    width?: number, 
    navigation: StackNavigationProp<RootStackParams, any, undefined>
}

export const MoviePoster = ({ movie, width= 300, height=420, navigation: { navigate } }: Props) => {
    
  const uri = `${URI.poster}/${movie?.poster_path}`  

  return (
    <TouchableOpacity 
      activeOpacity={0.8}
      onPress={() => navigate('DetailScreen', movie)}
      style={{ 
        ...styles.imageContainer, 
        width, 
        height, 
        marginHorizontal: 8 
      }}
    >
      <Image
        source={{ uri }}
        style={ styles.image }
      />
    </TouchableOpacity>
  )
}
