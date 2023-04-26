import React from 'react';
import { Text, StyleSheet } from "react-native";

export default function Card({ children }) {
    return ( <Text style = { styles.text } > { children } </Text>
    )
}
const styles = StyleSheet.create({
    text: {
        borderRadius: 15,
        backgroundColor: "green",
        marginBottom: 20,
        overflow: "hidden"
    }
});