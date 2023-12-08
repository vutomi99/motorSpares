import {View,Text} from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';

const Tab = createBottomTabNavigator();//function return a navigation component thatrenders tab bar

const screenOptions ={
    //properties to manupulate 
    tab
}

const BottomTabNavigation = () => {
    return (
        //screens to render
       <Tab.Navigator>
        <Tab.Screen name="Home" component={Home}/>
        <Tab.Screen name="Search" component={Home}/>
        <Tab.Screen name="Profile" component={Home}/>

       </Tab.Navigator>
    )
}

export default BottomTabNavigation