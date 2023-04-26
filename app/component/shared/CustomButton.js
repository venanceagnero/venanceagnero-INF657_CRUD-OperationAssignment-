import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function CustomButton({onPress, text, type="Primary", bgColor}) {
  return (
    <Pressable onPress={onPress} style={[
        styles.container,
        styles[`container_${type}`],
        bgColor ? {backgroundColor: bgColor}: {},
    ]}>
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
container:{
    width: "100%", 
    padding: 15,
    marginVertical: 5,
    borderRadius: 5
},
text:{
fontWeight:"bold",
color:"black",
textAlign:"center"
},
container_Primary:{
    backgroundColor: "green",
}

})