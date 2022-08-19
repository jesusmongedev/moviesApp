import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    imageContainer: {
        shadowColor: "#000",
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
    }
})