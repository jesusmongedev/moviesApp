import { Dimensions, FlatList, ScrollView, Text, View } from 'react-native'
import React from 'react'
import { StackScreenProps } from '@react-navigation/stack'

import { RootStackParams } from '../routes/Navigation'
import { useMovies } from '../hooks/useMovies';

import Carousel from 'react-native-snap-carousel';

import { MoviePoster } from '../components/MoviePoster/index';
import { BasicActivityIndicator } from '../components/ActivityIndicator/index';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { HorizontalSlider } from '../components/HorizontalSlider';


interface StackProps extends StackScreenProps<RootStackParams, any>{}

const { width: windowWidth } = Dimensions.get('window')



export const HomeScreen = ({ navigation: { navigate } }: StackProps) => {

  const { nowPlayingMovies, isLoading } = useMovies();  
  const { top } = useSafeAreaInsets()
  
  if( isLoading ) { return <BasicActivityIndicator Activitycolor='red' Activitysize={100} /> }  

  return (
    <ScrollView style={{ marginTop: top + 20 }}>
      
        {/* Main Carousel */}
        <View style={{ height: 440 }}>
          <Carousel
            data={ nowPlayingMovies }
            renderItem={ ({ item }) => <MoviePoster movie={ item }/> }
            sliderWidth={ windowWidth }
            itemWidth={ 300 }
            inactiveSlideOpacity={ 0.9 }
          />
        </View>

        {/* Now Playing Movies */}
        <HorizontalSlider title='Now Playing Movies' movies={ nowPlayingMovies } />

        {/* Top Rated Movies */}
       <HorizontalSlider movies={ nowPlayingMovies } />

        {/*  Horror Movies */}
       <HorizontalSlider title='Horror Movies' movies={ nowPlayingMovies } />

    </ScrollView>
  )
}