/* eslint-disable prettier/prettier */
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator} from '@react-navigation/stack';
import { } from '@react-navigation/native';

import Home from '../screens/Home';
import Videos from '../screens/Videos/Videos';
import User from '../screens/Users/Users';
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Tabs = () => {
    return(
    <Tab.Navigator>
    <Tab.Screen name = "Home" component = {Home}/>
    <Tab.Screen name = "Videos" component = {Videos} />
    <Tab.Screen name = "Users" component = {User} />
    </Tab.Navigator>
    )
}
const AppRouter = ( ) => {
    return (
        <>
            <Stack.Navigator>
                <Stack.Screen name = "Home" component = {Tabs} />
                <Stack.Screen name= "Users" component = {User} />
            </Stack.Navigator>
            </>
        );
};

export default AppRouter;
