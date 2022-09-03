import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import { Cast } from '../../types/creditsInterface';
import { CastCardDetails } from '../CastCardDetails/index';

type Props = {
    cast: Cast[]
}

export const CastHorizontalSlider = ({ cast }: Props) => {


    return (
        <View>
              <FlatList
                data={ cast }
                renderItem={ ( { item } ) => (
                    <CastCardDetails cast={item} />
                )}
                keyExtractor={ ( { id } ) => id.toString()  }
                horizontal
                showsHorizontalScrollIndicator={ false }
              />
        </View>
    );
}

const styles = StyleSheet.create({

});