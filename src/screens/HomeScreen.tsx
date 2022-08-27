import { Dimensions, ScrollView, View } from 'react-native'
import React from 'react'

import { StackScreenProps } from '@react-navigation/stack'
import Carousel from 'react-native-snap-carousel';

import { RootStackParams } from '../routes/Navigation';
import { useMovies } from '../hooks/useMovies';


import { MoviePoster } from '../components/MoviePoster/index';
import { BasicActivityIndicator } from '../components/ActivityIndicator/index';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { HorizontalSlider } from '../components/HorizontalSlider';
import { BackgroundGradient } from '../components/BackgroundGradient/index';
import { URI } from '../constants/uris';

interface StackProps extends StackScreenProps<RootStackParams, any>{}

const { width: windowWidth } = Dimensions.get('window')

export const HomeScreen = ({ navigation }: StackProps) => {

  const { nowPlaying, popular, topRated, upcoming, isLoading } = useMovies();  
  const { top } = useSafeAreaInsets()

  const getPosterColors = ( index: number ) => {
    const movie = nowPlaying[index]
    const uri = `${URI.poster}/${movie.poster_path}`
    console.log({uri})
  }
  
  if( isLoading ) { return <BasicActivityIndicator Activitycolor='red' Activitysize={100} /> }  

  return (
    <BackgroundGradient>
      <ScrollView style={{ marginTop: top + 20 }}>
      
          {/* Main Carousel */}
          <View style={{ height: 440 }}>
            <Carousel
              data={ nowPlaying }
              renderItem={ ({ item }) => <MoviePoster movie={ item } navigation={navigation} /> }
              sliderWidth={ windowWidth }
              itemWidth={ 300 }
              inactiveSlideOpacity={ 0.9 }
              onSnapToItem={ index => getPosterColors(index) }
            />
          </View>
          {/* Popular Movies */}
          <HorizontalSlider title='Popular' movies={ popular } navigation={navigation} />
          {/* Top Rated Movies */}
         <HorizontalSlider title='Top rated' movies={ topRated } navigation={navigation} />
          {/*  Upcoming Movies */}
         <HorizontalSlider title='Upcoming' movies={ upcoming } navigation={navigation} />
      </ScrollView>
    </BackgroundGradient>
  )
}