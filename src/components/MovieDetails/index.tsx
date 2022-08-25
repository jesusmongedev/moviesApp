import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { detailStyles } from '../../styles/movieDetailsTheme';
import { Cast } from '../../types/creditsInterface';
import { MovieComplete } from '../../types/movieDB.type';
import { currencyFormat } from '../../utils/details.utils';
import { CastHorizontalSlider } from '../CastHorizontalSlider/index';

interface Props {
  movieDetails: MovieComplete,
  cast: Cast[]
}

export const MovieDetails = ({ cast, movieDetails }: Props) => {

  const { vote_average, overview, genres, budget } = movieDetails

  return (
    <>

      <View style={{ marginHorizontal: 14 }}>

        {/* Header */}
        <View style={styles.container}>
          <Icon name="star-border" size={20} color="gray" />
          <Text style={detailStyles.subTitle}> {vote_average}</Text>
          <Text style={{...detailStyles.subTitle, marginLeft: 8}}>
            - {genres.map(g => g.name).join(', ')}
          </Text>
        </View>

        {/* Overview */}
        <Text style={{...detailStyles.title, marginTop: 8}}>Overview</Text>
        <Text style={detailStyles.text}>{overview}</Text>

        {/* Budget */}
        <View style={{ ...styles.container, marginTop: 8 }}>
          <Text style={{ ...detailStyles.text, fontWeight: 'bold' }}>Budget:</Text>
          <Text style={{...detailStyles.text, marginLeft: 8}}>
            {currencyFormat(budget)}
          </Text>
        </View>


        {/* Cast */}
        <Text style={{...detailStyles.title, marginTop: 8}}>Cast</Text>
      </View>
      <CastHorizontalSlider cast={cast} />

    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row', alignItems: 'center' 
  }
});