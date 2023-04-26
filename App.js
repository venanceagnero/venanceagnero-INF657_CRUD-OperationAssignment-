import { AuthContextProvider } from './app/context/AuthContext';
import { SafeAreaView } from 'react-native';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import MyTabs from './app/Navigation/BottomNavigation';
import {TaskProvider}  from './app/context/TaskContext';



export default function App() {
    return ( 
      <SafeAreaView style={styles.home}>
     <AuthContextProvider>
<TaskProvider>  
<NavigationContainer>
   <MyTabs/>
</NavigationContainer> 
</TaskProvider>
      </AuthContextProvider>
      </SafeAreaView>
    );
}


const styles = StyleSheet.create({
home:{
  flex: 1,
  backgroundColor: "#ffe4b5",
}

})