import React,{useEffect} from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import HomeScreen from './Screen/HomeScreen'
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { MaterialIcons } from '@expo/vector-icons'; 
import TabHome from './TabScreen/TabHome';
import TabNotify from './TabScreen/TabNotify';
import TabProfile from './TabScreen/TabProfile';
import LoginScreen from '../APPBAOCAO/Screen/LoginScreen';
import RegisterScreen from '../APPBAOCAO/Screen/RegisterScreen';
import DetailScreeen from './Screen/DetailScreen';
import { CardStyleInterpolators,
createStackNavigator,} from '@react-navigation/stack';
import CartComponent from "../APPBAOCAO/Component/CartComponent";
const Tab = createBottomTabNavigator();
const HomeStack = createStackNavigator();
const NetworkContext = React.createContext();

function TabNavigator({route}){
    return (
      <NetworkContext.Provider value={route.params.UserName}>
            <Tab.Navigator
                screenOptions  = {{
                tabBarLabelStyle : {
                  color : 'black',
                  fontSize : 14
                },
                tabBarActiveTintColor : '#157cdb',
                tabBarInactiveTintColor : '#262626',
                headerShown : false,
              }
            }
            swipeEnabled
          >
            {/* HOME */}
            <Tab.Screen 
              name = 'Main' 
              component = {TabHome} 
              initialParams = {route.params}
              options = {{
                tabBarLabel : 'Trang chủ',
                tabBarIcon : ({color})=><MaterialIcons name="home" size={24} color={color} />
              }}  
            ></Tab.Screen>
            {/*  */}

            {/* Profile */}
            <Tab.Screen 
              name = 'Profile' 
              component = {TabProfile}
              initialParams = {route.params}
              options = {{
                tabBarLabel : 'Cá nhân',
                tabBarIcon : ({color})=><MaterialIcons name="person" size={24} color={color} />
              }}
            ></Tab.Screen>
            {/* Notify Screen */}
            <Tab.Screen 
              name = 'Notify' 
              component = {TabNotify}
              options = {{
                tabBarLabel : 'Thông báo',
                tabBarIcon : ({color})=><MaterialIcons name="notifications-none" size={24} color={color} />
              }}
            ></Tab.Screen>
      </Tab.Navigator>
      </NetworkContext.Provider>
    )
}
export default function App() {
  return ( 
    <NavigationContainer independent = {true}>
        <HomeStack.Navigator
            screenOptions = {
              {
                headerTitleAlign : 'center',
                headerStyle : {
                  backgroundColor : Color,
                },
                headerTitleStyle :{
                  color : '#fff',
                  fontSize : 22
                },
              }
            }
        >
            <HomeStack.Screen name = 'Login' component = {LoginScreen}></HomeStack.Screen>
            <HomeStack.Screen name = 'Tab' component = {TabNavigator} 
                  options = {
                    {
                      headerShown : false
                    }
                  }
            ></HomeStack.Screen>
            <HomeStack.Screen name = 'Register' component = {RegisterScreen}></HomeStack.Screen>
            <HomeStack.Screen name = 'Detail' component = {DetailScreeen}></HomeStack.Screen>
            <HomeStack.Screen name = 'Cart' component = {CartComponent}></HomeStack.Screen>
        </HomeStack.Navigator>
        {/*  */}
    </NavigationContainer>
  );
}
const Color = '#1e88e5';
const BGColor_Opacity =  '#D7E9F7';
const styles = StyleSheet.create({
  container: {
    backgroundColor : '#fff',

  },
});