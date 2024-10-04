import {ActivityIndicator, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import Home from '../../screens/Home';
import About from '../../screens/About';
import Profile from '../../screens/Profile';
import Services from '../../screens/Chats';
import AddPost from '../../screens/AddPost';
import Posts from '../../screens/Posts';
import {useSelector} from 'react-redux';
import Chats from '../../screens/Chats';

const Tab = createBottomTabNavigator();

const Bottom_Navigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#6f64ea',
        headerShown:false,
        tabBarShowLabel:false,
        tabBarStyle: {
          backgroundColor: '#fff',
          borderTopWidth: 0,
          height: 100, // Increase the height
          paddingBottom: 1, // Add some padding at the bottom
        },
        
       
      }}>
      <Tab.Screen
        options={{
          tabBarIcon: ({color, size}) => (
            <AntDesign name="home" color={color} size={size} />
          ),
          headerStyle: {
            backgroundColor: '#6f64ea',
          },
          headerTintColor: 'white', // Sets header text color to white
        }}
        name="Home"
        component={Home}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({color, size}) => (
            <Feather name="folder-minus" color={color} size={size} />
          ),
          headerStyle: {
            backgroundColor: '#66baf2',
          },
          headerTintColor: 'white', // Sets header text color to white
        }}
        name="Projects"
        component={Posts}
      />

      <Tab.Screen
        options={{
          tabBarIcon: ({color, size}) => (
            <AntDesign name="pluscircle" color={color} size={size + 30} />
          ),
          headerStyle: {
            backgroundColor: '#66baf2',
          },
          headerTintColor: 'white', // Sets header text color to white
        }}
<<<<<<< HEAD
        name="AddPost"
=======
        name="Create"
>>>>>>> eba1012eb85b6cb0392de1dd432a57dfdeebde70
        component={AddPost}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({color, size}) => (
            <Feather name="message-circle" color={color} size={size} />
          ),
          headerStyle: {
            backgroundColor: '#66baf2',
          },
          headerTintColor: 'white', // Sets header text color to white
        }}
        name="Chats"
        component={Chats}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({color, size}) => (
            <Feather name="user" color={color} size={size} />
          ),
          headerStyle: {
            backgroundColor: '#66baf2',
          },
          headerTintColor: 'white', // Sets header text color to white
        }}
        name="Profile"
        component={Profile}
      />
    </Tab.Navigator>
  );
};

export default Bottom_Navigation;
