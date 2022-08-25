import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import { colors } from '../../constants/colors';

import { Cast } from '../../types/creditsInterface';

type Props = {
    cast: Cast
}

export const CastCardDetails = ({ cast }: Props) => {

    const uri = `https://image.tmdb.org/t/p/w500/${cast.profile_path}`  

    return (
      <View style={styles.container}>
        
        {cast.profile_path && <Image source={{uri}} style={styles.image} />}

        <View style={styles.castInfo}>
          <Text style={styles.castTitle}>{cast.name}</Text>

          <Text style={styles.castSubTitle}>{cast.character}</Text>
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 50,
        flexDirection: 'row', 
        marginHorizontal: 14, 
        marginTop: 6,
        marginBottom: 24,
        backgroundColor: 'white',
        borderRadius: 10,
        shadowColor: colors.black,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 4,
    },
    image: {
        borderRadius: 10,
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0,
        width: 50,
        height: 50,
    },
    castInfo: {
        marginVertical: 2,
        marginHorizontal: 16
    },
    castTitle: {
        fontSize: 18,
        fontWeight: 'bold', 
        color: colors.black
    },
    castSubTitle: {
        opacity: 0.7 
    },
});