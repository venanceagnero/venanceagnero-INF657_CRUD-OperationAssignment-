import React, { useState } from 'react';
import { StyleSheet, View, SafeAreaView, FlatList, Modal, TextInput, Text, TouchableOpacity } from "react-native";
import { useContext } from 'react';
import Task from "./Task";
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Constants from "expo-constants";
import TaskContext from '../../context/TaskContext';


export default function TaskList() {
    const {taskList, editTask, deleteTask, updateTask} = useContext(TaskContext); 
    const {modalVisible, setModalVisible} = useState(false);
    const [title, setTitle] = useState(""); 
    const [description, setDescription] = useState("");
    const [taskId, setTaskId] = useState(null);

    const handleEditTask = (task) =>{
        setTaskId(task.id);
        setTitle(task.data.title);
        setDescription(task.data.description);
        setModalVisible(true);
        editTask(task);
    };

    const handleUpdateTask = () =>{
        if(taskId){
          updateTask(taskId, {title, description});
          setModalVisible(false);
        }
      
          }
      
          return (<SafeAreaView style = { styles.screen } >

            <FlatList 
            data = { taskList }
            keyExtractor = {
                (taskList) => taskList.id }
                renderItem = {({item}) => (<Task 
                    title = { item.data.title }
                    description = { item.data.description }
                    image = { item.image }
                    onPress = {() => console.log("Task selected", item) }
                    renderRightActions = {() => ( 
                        <View style = { styles.deletecontainer } >
<TouchableWithoutFeedback onPress = {() => deleteTask(item.id) } >
<MaterialCommunityIcons name = "trash-can" size = { 35 } color = "black"/>
</TouchableWithoutFeedback>
 </View>)}


        renderLeftActions = {() => ( 
<View style = { styles.editcontainer } >
<TouchableWithoutFeedback onPress = { () => handleEditTask(item) } >
<MaterialCommunityIcons name = "pencil" size = { 35 } color = "black" />
 </TouchableWithoutFeedback>
</View>)}
/>)}
/>
<Modal visible={modalVisible} animationType='slide'>
                <View style={styles.modalContent}>
              <Text style = {styles.modalTitle}>Edit Task</Text>
    <TextInput style={ styles.input} placeholder='Task Title' value= {title} onChangeText = {setTitle}/>
 <TextInput style={ styles.input} placeholder='Description' value= {description} onChangeText = {setDescription}/>

<TouchableOpacity style={styles.button} onPress={handleUpdateTask }>
<Text style={styles.buttonText}> Update Task</Text>
</TouchableOpacity>
</View>
</Modal>
</SafeAreaView>

)}

            const styles = StyleSheet.create({
                screen: {
                    paddingTop: Constants.statusBarHeight,
                    flex: 1,
                },
                deletecontainer: {
                    backgroundColor: "red",
                    width: 70,
                    justifyContent: "center",
                    alignItems: "center"
                },

                editcontainer:{
                    backgroundColor: "green",
                    width: 70,
                    justifyContent: "center",
                    alignItems: "center"
                },
                modalContent:{
                    backgroundColor:"",
                    padding:15,
                    borderRadius:10,
                    shadowColor:"grey",
                    shadowOffset:{
                        width: 0,
                        height: 2
                    },
                    shadowOpacity: 0.20,
                    shadowRadius: 3.5,
                    elevation:5,
                    justifyContent: "center",
                    alignItems: "center", 
                },

                modalTitle:{
                    fontSize:15,
                    fontWeight: "bold",
                    marginBottom:10,
                },

                input:{
                    borderWidth: 1,
                    borderColor: "green",
                    borderRadius: 5,
                    padding: 10,
                    marginBottom: 15,
                    width: "100"
                },

                button:{
                    backgroundColor: "green",
                    padding: 10,
                    borderRadius: 5,
                    marginTop: 20,
                    width: "100",
                    justifyContent: "center",
                    alignItems: "center",
                },

                buttonText:{
                    color: "white",
                    fontWeight: "bold",
                    fontSize: 16,
                },

            })