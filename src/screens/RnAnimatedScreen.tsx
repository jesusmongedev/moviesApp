import React from 'react';
import {StyleSheet, Button, View, Animated, Text} from 'react-native';
import { useFade } from '../hooks/useFade';

const PRIMARY_COLOR = '#1798DE';

export const RnAnimatedScreen = () => {

    const { opacity, fadeIn, fadeOut } = useFade();

    return (
        <View style={ styles.container } >

            <Animated.View style={{ ...styles.box, opacity }} />

            <Text/>

            <Button
                title='Fade in'
                onPress={ () => fadeIn() }
            />

            <Text/>

            <Button
                title='Fade out'
                onPress={ () => fadeOut() }
            />


        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'gray'
    },
    box: {
        borderColor: 'white',
        borderWidth: 10,
        width: 150,
        aspectRatio: 1,
        backgroundColor: PRIMARY_COLOR
    },
    button: {
        marginTop: 20
    }
});