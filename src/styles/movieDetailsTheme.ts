import { StyleSheet } from "react-native";
import { colors } from "../constants/colors";

export const detailStyles = StyleSheet.create({
    container: {
      margin: 18
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
      color: colors.black
    },
    subTitle: {
      fontSize: 16,
      opacity: 0.8
    },
    text: {
      fontSize: 16,
      color: colors.black
    }
});