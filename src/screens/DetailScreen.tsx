import { View, Text, Button } from 'react-native'
import React from 'react'
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../routes/Navigation';
import { styles } from '../styles/movieTheme';

interface DetailProps extends StackScreenProps<RootStackParams, any>{}

export const DetailScreen = ({ navigation: { pop } }: DetailProps) => {
  return (
    <View style={ styles.globalMargin }>
      <Text>MovieDetailsScreen</Text>

      <Button
        title='Return'
        onPress={() => pop()}
      />

    </View>
  )
}

