import { View, Text, Image, StyleSheet } from 'react-native';
import React from 'react'
import { Movie } from '../../types/movieDB.type';

interface Props {
    movie: Movie
}

export const MoviePoster = ({ movie }: Props) => {
    
  const uri = `https://image.tmdb.org/t/p/w500/${movie?.poster_path}`  

  return (
    <View style={ styles.imageContainer }>
      <Image
        source={{ uri }}
        style={ styles.image }
      />
    </View>
  )
}

const styles = StyleSheet.create({
    imageContainer: {
        width: 300,
        height: 420,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.25,
        shadowRadius: 8,

        elevation: 12,
        borderRadius: 20,
    },
    image: {
        flex: 1,
        borderRadius: 20,
    }
});
