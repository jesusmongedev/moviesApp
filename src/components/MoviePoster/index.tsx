import { View, Text, Image, StyleSheet } from 'react-native';
import React from 'react'
import { Movie } from '../../types/movieDB.type';

interface Props {
    movie: Movie,
    height?: number,
    width?: number
}

export const MoviePoster = ({ movie, width= 300, height=420 }: Props) => {
    
  const uri = `https://image.tmdb.org/t/p/w500/${movie?.poster_path}`  

  return (
    <View style={{ ...styles.imageContainer, width, height, marginHorizontal: 8 }}>
      <Image
        source={{ uri }}
        style={ styles.image }
      />
    </View>
  )
}

const styles = StyleSheet.create({
    imageContainer: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.25,
        shadowRadius: 8,

        elevation: 8,
        borderRadius: 10,
    },
    image: {
        flex: 1,
        borderRadius: 18,
    }
});
