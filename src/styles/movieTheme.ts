import { StyleSheet } from "react-native";
import { colors } from "../constants/colors";

export const styles = StyleSheet.create({
    imageContainer: {
        shadowColor: colors.black,
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.25,
        shadowRadius: 8,

        elevation: 8,
        borderRadius: 12,
    },
    image: {
        flex: 1,
        borderRadius: 18,
    },
    returnContainer: {
        position: 'absolute',
        top: 28,
        left: 24,
    },
    returnText: {
        fontSize: 24,
        color: colors.black
    }
})