import { StyleSheet, TextInput} from 'react-native'
import React from 'react'
import { Button } from 'react-native'

export default function CustomInput({placeholder, value, setValue, secureTextEntry}) {
  return (
    <TextInput style={styles.inputfield} placeholder={placeholder} onChangeText = {setValue} value={value} secureTextEntry={secureTextEntry}/>
  )
}

const styles = StyleSheet.create({

    inputfield:{
        height:60,
        width:"100%",
        margin:12,
        borderWidth: 1,
        padding: 20,
        borderColor:"#ffe4b5",
        borderBottomColor:"black"
    },
})