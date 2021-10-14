import React,{Component} from "react";
import { StatusBar } from 'expo-status-bar';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import NotifiyScreen from '../Screen/NotifyScreen';
import HomeScreen from '../Screen/HomeScreen';

const HomeStack = createStackNavigator();

export default function TabNotify()
{
    return(
        <HomeStack.Navigator screenOptions = {{headerShown : false }} >
            <HomeStack.Screen name = 'Home' component = {NotifiyScreen}></HomeStack.Screen>
            {/* <HomeStack.Screen name = 'Detail' component = {HomeScreen}></HomeStack.Screen> */}
        </HomeStack.Navigator>
    )
}