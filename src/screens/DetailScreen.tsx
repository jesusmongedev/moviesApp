import { View, Image, Dimensions, TouchableOpacity, Text, ScrollView, StyleSheet } from 'react-native';
import React from 'react'
import { StackScreenProps } from '@react-navigation/stack';

import { RootStackParams } from '../routes/Navigation';
import { styles } from '../styles/movieTheme';
import { colors } from '../constants/colors';

const screenHeight = Dimensions.get('screen').height

interface DetailProps extends StackScreenProps<RootStackParams, 'DetailScreen'>{}

export const DetailScreen = ({ navigation: { pop }, route: { params } }: DetailProps) => {

  const { poster_path, title, vote_average, release_date, overview } = params

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
          <Text style={styles.returnText}>🔙</Text>
        </TouchableOpacity>
      </View>

      <View style={detailStyles.container}>

        <Text style={detailStyles.title}>{title}</Text>
        <Text style={detailStyles.subTitle}>⭐ {vote_average} {new Date(release_date).toDateString()}</Text>

        <Text style={{ ...detailStyles.title, marginTop: 8 }}>Overview</Text>
        <Text style={detailStyles.text}>{overview}</Text>
        

      </View>

    </ScrollView>
  )
}

const detailStyles = StyleSheet.create({
    container: {
      margin: 18
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
      color: colors.black
    },
    subTitle: {
      fontSize: 16,
      opacity: 0.8
    },
    text: {
      fontSize: 16,
      color: colors.black
    }
});

