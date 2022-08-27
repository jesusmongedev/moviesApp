import React from 'react';
import {StyleSheet, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

type Props = {
    children: JSX.Element | JSX.Element[]
}

export const BackgroundGradient = ({ children }: Props) => {
    return (
        <View style={{ flex: 1 }}>

            <LinearGradient 
                colors={[ '#1798DE', '#75CEDB', 'white' ]}
                style={ StyleSheet.absoluteFillObject }
                start={{ x: 0.1, y: 0.1 }}
                end={{ x: 0.5, y: 0.7 }}
            />

                { children }
        </View>
    );
}
