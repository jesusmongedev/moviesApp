import React from 'react'
import { View, ActivityIndicator, StyleSheet, ColorValue } from 'react-native';

type Props = {
    Activitycolor?: ColorValue | undefined,
    Activitysize?: number | "large" | undefined,
}

export const BasicActivityIndicator = ({ Activitycolor, Activitysize }: Props) => {
  return (
    <View style={{ ...styles.container}}>
      <ActivityIndicator
        color={Activitycolor}
        size={Activitysize}
      />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

