import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TaskList from '../component/Task/TaskList';
import AddTask from '../component/Task/AddTask';
import ProfilePage from '../component/Screen/ProfilePage';
import {MaterialCommunityIcons} from "@expo/vector-icons";


const Tab = createBottomTabNavigator();

export default function MyTabs() {
  return (
    <Tab.Navigator screenOptions={{headerShown:false,
    tabBarStyle:{backgroundColor: "#ffe4b5"},
    tabBarActiveBackgroundColor: "green",
    tabBarActiveTintColor: "white"
    }}>

 <Tab.Screen name="TaskList" component={TaskList} 
 options={{tabBarIcon:({size}) => (<MaterialCommunityIcons 
   name="home" color={"black"} size={size}/>)}}/>

 <Tab.Screen name="AddTask" component={AddTask} 
      options={{
        tabBarIcon:({size}) => (<MaterialCommunityIcons 
         name="plus" color={"black"} size={size} /> )}}/>

<Tab.Screen name="ProfilePage" component={ProfilePage} 
  options={{ tabBarIcon:({size}) => (<MaterialCommunityIcons 
   name="account-circle" color={"black"} size={size} />)}}/>
    </Tab.Navigator>
  );
}