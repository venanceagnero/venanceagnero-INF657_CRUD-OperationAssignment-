import { StyleSheet, Text, View, Image, useWindowDimensions } from 'react-native'
import React from 'react'
import { useState } from 'react';
import CustomInput from '../shared/CustomInput';
import CustomButton from '../shared/CustomButton';
import { UserAuth } from '../../context/AuthContext';
import { useNavigation } from '@react-navigation/native';
import photo from "../../../assets/Cimg3.png";
import { auth } from '../../../firebase';


export default function ProfilePage() {

  // const [email, setEmail] = useState(auth.currentUser.email);
 const [email, setEmail] = useState('');
     const [username, setUsername] = useState(""); 

   
    const { height } = useWindowDimensions();
    const {updatesUser} = UserAuth();

    const onEdit = async (e) =>{
 e.preventDefault();
 const data ={username, email};
 console.log(data);
 try{

    await updatesUser(username, email);
    }
    catch (err){
        console.log(err)
      };


};

  return (
    <View style = { styles.container }>
       <Text style = { styles.titletext}> User profile </Text> 
      <Image source = { photo } style = { styles.photo }/>  
        <CustomInput placeholder = "Email"
        value = { email }
        setValue = { setEmail }
        secureTextEntry = { true }
        /> 
        <CustomInput placeholder = "User Name"
        value = { username }
        setValue = { setUsername }
        />

        <CustomButton text = "Edit Profile"
        onPress = { onEdit }
        />
    </View>
  )
}

const styles = StyleSheet.create({


    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: "#ffe4b5",
        padding: 40,
       paddingBottom: 80,
       
    },

    photo: {
        width: "20%",
        height: 100,
        maxHeight: 100,
        maxWidth: "20%",
        alignItems: "left"
    },
    titletext:{
      fontSize:20,
      fontWeight: "bold",
     marginBottom: 50,
    }

})