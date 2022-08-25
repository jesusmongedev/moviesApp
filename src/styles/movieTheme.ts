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
        width: 55,
        height: 55,
        position: 'absolute',
        top: 30,
        left: 14,
        backgroundColor: 'rgba(0,0,0, 0.3)',
        borderRadius: 50,
        justifyContent: 'center',
    },
    returnText: {
        fontSize: 24,
        color: colors.black
    }
})