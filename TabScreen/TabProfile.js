import React,{Component} from "react";
import { StatusBar } from 'expo-status-bar';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import ProfileScreen from '../Screen/ProfileScreen';
const ProfileStack = createStackNavigator();

export default function TabProfile({route})
{

    return(
        <ProfileStack.Navigator screenOptions = {{headerShown : false }} >
            <ProfileStack.Screen name = 'Home' component = {ProfileScreen} initialParams = {route.params}></ProfileStack.Screen>
        </ProfileStack.Navigator>
    )
}