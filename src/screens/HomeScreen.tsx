import { Dimensions, View } from 'react-native'
import React from 'react'
import { StackScreenProps } from '@react-navigation/stack'

import { RootStackParams } from '../routes/Navigation'
import { useMovies } from '../hooks/useMovies';

import Carousel from 'react-native-snap-carousel';

import { MoviePoster } from '../components/MoviePoster/index';
import { BasicActivityIndicator } from '../components/ActivityIndicator/index';
import { useSafeAreaInsets } from 'react-native-safe-area-context';


interface StackProps extends StackScreenProps<RootStackParams, any>{}

const { width: windowWidth } = Dimensions.get('window')



export const HomeScreen = ({ navigation: { navigate } }: StackProps) => {

  const { nowPlayingMovies, isLoading } = useMovies();  
  const { top } = useSafeAreaInsets()
  
  if( isLoading ) { return <BasicActivityIndicator Activitycolor='red' Activitysize={100} /> }  

  return (
    <View style={{ marginTop: top + 20 }}>
      
      
        <View style={{ height: 440 }}>
          <Carousel
            data={ nowPlayingMovies }
            renderItem={ ({ item }) => <MoviePoster movie={ item }/> }
            sliderWidth={ windowWidth }
            itemWidth={ 300 }
          />
        </View>

    </View>
  )
}