import { StyleSheet, Text, View, Image, useWindowDimensions} from 'react-native';
import { UserAuth } from '../../context/AuthContext';
import React, { useState } from 'react';
import logo from "../../../assets/Cimg3.png";
import CustomInput from '../shared/CustomInput';
import CustomButton from '../shared/CustomButton';
import { NavigationContainer, useNavigation } from '@react-navigation/native';

export default function SignUpScreen() {
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const {height} = useWindowDimensions();
    const {createUser} = UserAuth(); 
    const navigation = useNavigation(); 

    const onRegister = async (e) =>{
       e.preventDefault(); 
       const data = {username, email, password, confirmPassword};
       console.log(data); 
       try{
        await createUser(email, password).then((userCredential) => {
            const user = userCredential.user; 
            console.log(user); 
            navigation.navigate("TaskList"); 
        })
       } catch(err){
        console.log(err);
       }
       setUsername("");
       setEmail("");
       setPassword("");
       setConfirmPassword(""); 
    };

   

  return (
    < View style={styles.container}>
      <Text>Sign Up Screen</Text>
      <Image source={logo} style={styles.logo}/>


      <Text style={styles.formTitle}>Create an Account</Text>
  <CustomInput placeholder= "Email" value={email} setValue={setEmail} secureTextEntry={true}/>
  <CustomInput placeholder= "Username" value={username} setValue={setUsername} secureTextEntry={true}/>
  <CustomInput placeholder= "Password" value={password} setValue={setPassword} secureTextEntry={true}/>
  <CustomInput placeholder= "Confirm Password" value={confirmPassword} setValue={setConfirmPassword} secureTextEntry={true}/>
 
  <CustomButton text="Sign Up" onPress={onRegister}/>

    </View>
  )
}

const styles = StyleSheet.create({

    container:{
        flex:1,
        alignItems: "center",
 backgroundColor: "#ffe4b5",
 padding: 40,
    },

    logo:{
     width: "20%",
     height: 100,
     maxHeight:100, maxWidth:"20%"
    },

    formTitle:{
     fontSize: 15,
     fontWeight: "bold",
     marginTop: 85,
    }
})

