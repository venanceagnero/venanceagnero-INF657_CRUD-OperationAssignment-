import React from 'react'
import { Text, StyleSheet, View, Image, TouchableOpacity } from "react-native";
import { Swipeable } from 'react-native-gesture-handler';


export default function Task({ image, title, description, onPress, renderRightActions }) {
    return ( < Swipeable renderRightActions = { renderRightActions }  renderLeftActions={renderLeftActions}>
        <TouchableOpacity onPress = { onPress } >
        <>
        <View style = { styles.mainContainer } >
        <Image style = { styles.image }
        source = { image }/>  
        <Text style = { styles.title } > Title: { title } </Text>  
         <Text style = { styles.description } > Description: { description } </Text> 
         </View> 
         </>  
         </TouchableOpacity>
          </Swipeable>

    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 3,
        backgroundColor: "orange",
        flexDirection: "column",
        padding: 25,
        paddingTop: 10

    },

    image: {
        height: 70,
        width: 70,
        borderRadius: 35,
        marginRight: 10,
        padding: 20,
    },

    title: {
        fontWeight: "bold",
        fontSize: 25,
        padding: 5,
        color: "white",
    },

    description: {
        fontWeight: "bold",
        fontSize: 25,
        padding: 5,
        color: "white",
    }

});