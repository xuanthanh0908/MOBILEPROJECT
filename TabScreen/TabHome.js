import React,{Component} from "react";
import { StatusBar } from 'expo-status-bar';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import DetailScreen from '../Screen/DetailScreen';
import HomeScreen from '../Screen/HomeScreen';
import DetailScreeen from "../Screen/DetailScreen";

const HomeStack = createStackNavigator();

export default function TabHome()
{
    return(
        <HomeStack.Navigator screenOptions = {{headerShown : false }} >
            <HomeStack.Screen name = 'Home' component = {HomeScreen}></HomeStack.Screen>
        </HomeStack.Navigator>
    )
}
