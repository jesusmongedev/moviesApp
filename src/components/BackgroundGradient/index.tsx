import React, { useContext, useEffect } from 'react';
import {Animated, StyleSheet, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { GradientContext } from '../../context/GradientContext';
import { useFade } from '../../hooks/useFade';

type Props = {
    children: JSX.Element | JSX.Element[]
}

export const BackgroundGradient = ({ children }: Props) => {

    const { colors, prevColors, setPrevColors } = useContext(GradientContext)
    const { primary, secondary } = colors

    const { primary: prevPrimary, secondary: prevSecondary } = prevColors
    const { opacity, fadeIn, fadeOut } = useFade()


    useEffect(() => {
        fadeIn( () => {
            setPrevColors( colors )
            fadeOut(0)
        } )
    }, [colors])
    

    return (
        <View style={{ flex: 1 }}>

            <LinearGradient 
                colors={[ prevPrimary, prevSecondary, 'white' ]}
                style={ StyleSheet.absoluteFillObject }
                start={{ x: 0.1, y: 0.1 }}
                end={{ x: 0.5, y: 0.6 }}
            />

            <Animated.View
                style={{
                    ...StyleSheet.absoluteFillObject,
                    opacity
                }}
            >

                <LinearGradient 
                    colors={[ primary, secondary, 'white' ]}
                    style={ StyleSheet.absoluteFillObject }
                    start={{ x: 0.1, y: 0.1 }}
                    end={{ x: 0.5, y: 0.7 }}
                />

            </Animated.View>

                { children }
        </View>
    );
}
