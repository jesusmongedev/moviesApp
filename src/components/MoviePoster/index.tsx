import { Image, StyleSheet } from 'react-native';
import React from 'react'

import { StackNavigationProp, StackScreenProps } from '@react-navigation/stack';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { Movie } from '../../types/movieDB.type';
import { RootStackParams } from '../../routes/Navigation';
interface Props {
    movie: Movie,
    height?: number,
    width?: number, 
    navigation: StackNavigationProp<RootStackParams, any, undefined>
}

export const MoviePoster = ({ movie, width= 300, height=420, navigation: { navigate } }: Props) => {
    
  const uri = `https://image.tmdb.org/t/p/w500/${movie?.poster_path}`  

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

const styles = StyleSheet.create({
    imageContainer: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.25,
        shadowRadius: 8,

        elevation: 8,
        borderRadius: 18,
    },
    image: {
        flex: 1,
        borderRadius: 18,
    }
});
