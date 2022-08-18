import { View, Text, FlatList } from 'react-native';
import React from 'react'
import { MoviePoster } from '../MoviePoster/index';
import { Movie } from '../../types/movieDB.type';

interface Props {
    title?: string,
    movies: Movie[],
}

export const HorizontalSlider = ( { title, movies }: Props ) => {
  return (
    <View 
      style={{ 
        height: title ? 270 : 220, 
      }}
    >

        { title && <Text style={{ fontSize: 24, fontWeight: 'bold', margin: 8 }}> { title } </Text> }

        <FlatList
        data={ movies }
        renderItem={ ( { item } ) => (
            <MoviePoster movie={ item } width={140} height={200} />
        )}
        keyExtractor={ ( { id } ) => id.toString()  }
        horizontal
        showsHorizontalScrollIndicator={ false }
        />

  </View>
  )
}
