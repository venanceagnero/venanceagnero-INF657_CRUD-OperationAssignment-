import { Image, StyleSheet, Text, View, useWindowDimensions } from 'react-native';
import React from 'react';
import { useState } from 'react';
import logo from "../../../assets/Cimg3.png";
import CustomInput from '../shared/CustomInput';
import CustomButton from '../shared/CustomButton';
import { UserAuth } from '../../context/AuthContext';
import { useNavigation } from '@react-navigation/native';


export default function SigninScreen() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { height } = useWindowDimensions();
    const { signIn, logOut } = UserAuth();

    const navigation = useNavigation(); 


    const onSignIn = async(e) => {
        e.preventDefault();
        try {
            await signIn(email, password);
            console.log("User signed in !");
            navigation.navigate("AddTask");

        } catch (err) { console.log(err) }
    };

    const OnLogOut = async (e) => {
        try{
           await logOut();
           alert("You are logged out"); 
           navigation.navigate("SignIn");
        }
        catch(err){
            console.log(err);
        }

    };

    const OnForgotPassword = () => {
        console.warn("Sign In Pressed")
    };

    const OnSignInGoogle = () => {
        console.warn("Sign In with Google")
    };


    const OnSignInApple = () => {
        console.warn("Sign In with Apple")
    };

    const OnSignUp = () => {
        console.warn("Sign up");
        navigation.navigate("SignUp")
    };
   
    return ( < View style = { styles.container } >
        <Text > Input Screen </Text> 
        <Image source = { logo }
        style = { styles.logo }
        />  
        <CustomInput placeholder = "Email"
        value = { email }
        setValue = { setEmail }
        secureTextEntry = { true }
        /> 
        <CustomInput placeholder = "Password"
        value = { password }
        setValue = { setPassword }
        secureTextEntry = { true }
        />

        <CustomButton text = "Sign In"
        onPress = { onSignIn }
        />

<CustomButton bgColor = "red"
        text = "Logout"
        onPress = { OnLogOut }
        />   


        <CustomButton bgColor = "blue"
        text = "Forgot Password"
        onPress = { OnForgotPassword }
        /> 
         <CustomButton bgColor = "orange"
        text = "Sign in with Google"
        onPress = { OnSignInGoogle }
        />  
       
       <CustomButton bgColor = "purple"
        text = "Sign in with Apple"
        onPress = { OnSignInApple }
        />  


   <CustomButton bgColor = "gray"
        text = "Don't have an account? Create One!"
        onPress = { OnSignUp }
        />  

        </View>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: "#ffe4b5",
        padding: 40,
       paddingBottom: 80,
       
    },

    logo: {
        width: "20%",
        height: 100,
        maxHeight: 100,
        maxWidth: "20%"
    }
})