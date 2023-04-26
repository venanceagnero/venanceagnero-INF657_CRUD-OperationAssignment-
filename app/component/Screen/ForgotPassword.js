import { StyleSheet, Text, View} from 'react-native';
import { useState } from 'react';
import React from 'react'
import CustomInput from '../shared/CustomInput';
import CustomButton from '../shared/CustomButton';

export default function ForgotPassword() {

    const [email, setEmail] = useState("");
    const onConfirm = () => {
        console.log("Sending the link")
    };
    const onHandle= () => {
        console.log("Sending the link")
    }


    return ( <View style = { styles.container } >
        <Text style = { styles.formTitle } > Resset Password </Text>
        <CustomInput placeholder= "Email" value={email} setValue={setEmail} secureTextEntry={true}/>
        <CustomButton text = "Send" onPress = {onConfirm }/> 
        <CustomButton  bgColor="gray" text = "Back to sign in" onPress = {onHandle }/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: "#ffe4b5",
        padding: 40,
        borderColor: "black",
        borderWidth: 2
    },
    formTitle: {
        fontSize: 15,
        fontWeight: "bold",
        marginTop: 85,
    }


})