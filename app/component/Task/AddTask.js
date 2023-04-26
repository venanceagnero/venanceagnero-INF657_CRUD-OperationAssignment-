import { StyleSheet, Text, View, Button } from 'react-native';
import { useState } from 'react';
import { SafeAreaView } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { categories } from './TaskData';
import DropDownPicker from 'react-native-dropdown-picker';
import DateTimePicker from 'react-native-modal-datetime-picker';
import { TouchableOpacity } from 'react-native';
import TaskContext from '../../context/TaskContext';





export default function AddTask() {
    const { AddTask } = useContext(TaskContext);

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    //usestate for dropdown picker
    const [open, setOpen] = useState(false);
    const [category, setCategory] = useState(null);
    const categoryItems = categories.map((item) => ({
        value: item.value,
        label: item.label,
    }));

    //DateTimePicker
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [selectedDate, setSelectedDate] = useState(null);

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (date) => {
        setSelectedDate(date);
        console.log("A date has been picked: ", date);
        hideDatePicker();
    };
    // to add task with category, date, title, and description
    const handleSubmit = () => {
        if (title && category) {
            const task = {
                title,
                description,
                category,
                date: selectedDate.toString(),
            };
            AddTask(task);
            console.log(task);
            setTitle("");
            setDescription("");
            setCategory(null);
            setSelectedDate(null)
        } else {
            alert("Please enter all the fields")
        }
    }
    return ( <SafeAreaView style = { styles.screen } >
        <View style = { styles.viewContainer } >
        <Text style = { styles.title } > Create Task </Text>  
        <TextInput style = { styles.inputfield }
        placeholder = "Enter Task"
        onChangeText = {
            (title) => setTitle(title)
        }
        value = { title }
        /> 
         <TextInput style = { styles.inputfield }
        placeholder = "Enter Description"
        onChangeText = {
            (description) => setDescription(description)
        }
        value = { description }
        />  
        <DropDownPicker open = { open }
        value = { category }
        items = { categoryItems }
        setOpen = { setOpen }
        setValue = { setCategory }
        placeholder = "Task Category"
        placeholderStyle = { styles.dropdownText }
        containerStyle = { styles.dropdown }
        dropDownContainerStyle = { styles.dropdownContainer }
        />


        <View >
        <Button title = "Show Date Picker"
        onPress = { showDatePicker }/> 
         <DateTimePicker isVisible = { isDatePickerVisible }
        mode = "datetime"
        onConfirm = { handleConfirm }
        onCancel = { hideDatePicker }
        style = { styles.date }
        /> 
        </View> 

        <TouchableOpacity onPress = { handleSubmit }
        style = { styles.button } >
        <Text style = { styles.buttonText } > Add Task </Text> 
         </TouchableOpacity>

        </View>  
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    screen: {
        backgroundColor: "#ffe4b5",
        alignItems: "center",
        justifyContent: "center"
    },

    viewContainer: {
        flex: 1,
        backgroundColor: "#ffe4b5",
        padding: 50,
    },
    title: {
        color: "black",
        fontSize: 50,
        textAlign: "center"
    },
    inputfield: {
        heught: 60,
        margin: 12,
        borderWidth: 1,
        padding: 20,
        borderColor: "#ffe4b5",
        borderBottomColor: "black"
    },
    dropdownText: {
        color: "black",
        fontWeight: "bold"
    },
    dropdown: {
        height: 100,
        borderRadius: 30,
        marginTop: 30,
    },
    dropdownContainer: {
        backgroundColor: "#dfdfdf",
        borderRadius: 30
    },
    date: {
        paddingTop: 30,
        backgroundColor: "green"
    },
    dateText: {
        fontSize: 10,
    },
    button: {
        backgroundColor: "green",
        borderRadius: 15,
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginTop: 250
    },
    buttonText: {
        color: "white",
        fontSize: 20,
        textAlign: "center",
    }

})