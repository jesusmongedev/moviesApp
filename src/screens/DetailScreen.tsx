import { View, Image, Dimensions, TouchableOpacity, Text, ScrollView, StyleSheet, ActivityIndicator } from 'react-native';
import React from 'react'
import { StackScreenProps } from '@react-navigation/stack';

import Icon from 'react-native-vector-icons/MaterialIcons'

import { RootStackParams } from '../routes/Navigation';
import { styles } from '../styles/movieTheme';
import { useMovieDetails } from '../hooks/useMovieDetails';
import { MovieDetails } from '../components/MovieDetails/index';
import { detailStyles } from '../styles/movieDetailsTheme';

const screenHeight = Dimensions.get('screen').height

interface DetailProps extends StackScreenProps<RootStackParams, 'DetailScreen'>{}

export const DetailScreen = ({ navigation: { pop }, route: { params } }: DetailProps) => {

  const { poster_path, title, release_date, id} = params

  const { isLoading, movieComplete, cast } = useMovieDetails( id )

  console.log(cast[0]?.name)
  
  const uri = `https://image.tmdb.org/t/p/w500/${poster_path}`  

  return (
    <ScrollView>
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
        <TouchableOpacity
          style={styles.returnContainer}
          onPress={ () => pop()}
        >
          <Icon 
            name='arrow-back-ios'
            size={38}
            color='white'
          />
        </TouchableOpacity>
      </View>

      <View style={detailStyles.container}>

        <Text style={detailStyles.title}>{title}</Text>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 4 }}>
          <Icon
              name='date-range'
              size={20}
              color='gray'
          />
          <Text style={detailStyles.subTitle}> {release_date.toString()}</Text>
        </View>


        { (isLoading) && <ActivityIndicator color='red' style={{ marginTop: screenHeight * 0.1 }} /> }

        { (!isLoading) && <MovieDetails cast={cast} movieDetails={movieComplete!} /> }

      </View>

    </ScrollView>
  )
}



