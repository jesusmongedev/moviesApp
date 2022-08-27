import { View, Image, Dimensions, TouchableOpacity, Text, ScrollView, ActivityIndicator } from 'react-native';
import React from 'react'
import { StackScreenProps } from '@react-navigation/stack';

import Icon from 'react-native-vector-icons/MaterialIcons'

import { RootStackParams } from '../routes/Navigation';
import { useMovieDetails } from '../hooks/useMovieDetails';
import { MovieDetails } from '../components/MovieDetails/index';

import { styles } from '../styles/movieTheme';
import { detailStyles } from '../styles/movieDetailsTheme';
import { URI } from '../constants/uris';

const screenHeight = Dimensions.get('screen').height

interface DetailProps extends StackScreenProps<RootStackParams, 'DetailScreen'>{}

export const DetailScreen = ({ navigation: { pop }, route: { params } }: DetailProps) => {

  const { poster_path, title, release_date, id} = params

  const { isLoading, movieComplete, cast } = useMovieDetails( id )

  console.log(cast[0]?.name)
  
  const uri = `${URI.poster}/${poster_path}`  

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

        {/* Back Button */}
        <TouchableOpacity
          activeOpacity={0.6}
          style={styles.returnContainer}
          onPress={ () => pop()}
        >
          <Icon 
            name='arrow-back-ios'
            size={40}
            color='white'
            style={{ textAlign: 'center', paddingLeft: 10 }}
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

      </View>

        { (isLoading) && <ActivityIndicator color='red' style={{ marginTop: screenHeight * 0.055 }} /> }

        { (!isLoading) && <MovieDetails cast={cast} movieDetails={movieComplete!} /> }


    </ScrollView>
  )
}



