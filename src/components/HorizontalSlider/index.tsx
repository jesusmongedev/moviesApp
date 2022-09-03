import { View, Text, FlatList, StyleSheet } from 'react-native';
import React from 'react'
import { StackNavigationProp } from '@react-navigation/stack';

import { MoviePoster } from '../MoviePoster/index';
import { Movie } from '../../types/movieDB.type';
import { RootStackParams } from '../../routes/Navigation';

interface Props {
    title?: string,
    movies: Movie[],
    navigation: StackNavigationProp<RootStackParams, any, undefined>
}

export const HorizontalSlider = ( { title, movies, navigation }: Props ) => {
  return (
    <View style={{ height: title ? 260 : 210 }} >

        { title && <Text style={ styles.title }> { title } </Text> }

        <FlatList
        data={ movies }
        renderItem={ ( { item } ) => (
            <MoviePoster movie={ item } width={140} height={200} navigation={navigation} />
        )}
        keyExtractor={ ( { id } ) => id.toString()  }
        horizontal
        showsHorizontalScrollIndicator={ false }
        />

  </View>
  )
}

const styles = StyleSheet.create({
    title: {
      fontSize: 22, 
      fontWeight: 'bold', 
      marginLeft: 8, 
      marginBottom: 4,
      color: '#121212'
    }
});
