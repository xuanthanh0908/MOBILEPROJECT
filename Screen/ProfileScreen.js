import React,{Component, useEffect} from "react";
import { View, Text, StyleSheet,Image } from "react-native";
import { StatusBar } from 'expo-status-bar';
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons'; 
import Header from "../Component/HeaderComponent";

export default function ProfileScreen ({navigation,route}){
    const Item =({nameIcon,TextName})=>{
        return (
                <TouchableOpacity style = {styles.sectionItem}>
                    <MaterialIcons  name={nameIcon} size = {26} color='#484848'/>
                    <Text style = {{marginLeft : 20,flex : 1}}>{TextName}</Text>
                    <FontAwesome name="angle-right" size={24} color='#484848' />
                </TouchableOpacity>
        )
    }
    const ItemNoneBoder =({nameIcon,TextName})=>{
        return (
               <TouchableOpacity style = {styles.sectionItemNone} >
                <MaterialIcons  name={nameIcon} size = {26} color='#484848'/>
                    <Text style = {{marginLeft : 20,flex : 1}}>{TextName}</Text>
                    <FontAwesome name="angle-right" size={24} color='#484848' />
               </TouchableOpacity>
            
        )
    }
        return(
            <View style = {styles.Container}>
                 <StatusBar barStyle = 'light-content'/>
                 <ScrollView>
                     {/* Header */}
                      <Header title = 'Cá nhân' onPress = {()=>navigation.navigate('Cart')}/>
                      {/*USer information  */}
                      <View style = {styles.BodyContainer}>
                          <View style = {styles.sectionInF}>
                              <View style = {styles.IconPerson}>
                                <Image source = {{uri : route.params.IMG }} style = {{height: 50, width : 50}}/>
                              </View>
                              <View style ={styles.TextInfor} >
                                    <Text style = {styles.GreetingText}>Chào mừng {route.params.UserName} đến với NUN</Text>
                                    {route.params.UserName&&(<TouchableOpacity onPress = { ()=>navigation.navigate("Login")
                                    }>
                                        <Text style = {styles.LoginText}>Đăng xuất</Text>
                                    </TouchableOpacity>)}
                              </View>
                              <FontAwesome name="angle-right" size={24} color='#1e88e5' />
                          </View>
                      </View>
                      {/*  */}

                      {/* List Item */}
                      <View style = {styles.ItemContainer}>
                          <Item nameIcon ='format-list-bulleted' TextName = 'Quản lý đơn hàng'/>
                          <Item nameIcon = "shopping-cart" TextName="Sản phẩm đã mua" />
                          <Item nameIcon = "remove-red-eye" TextName="Sản phẩm đã xem" />
                          <Item nameIcon = "favorite-outline" TextName="Sản phẩm yêu thích" />
                          <Item nameIcon = "bookmark-outline" TextName="Sản phẩm mua sau" />
                          <Item nameIcon = "star-outline" TextName="Sản phẩm đánh giá" />
                          {/* Divider */}
                          <View style = {styles.Divider}></View>
                          {/*  */}
                          <TouchableOpacity style = {styles.ItemPlus}>
                            <Text style = {{flex : 1}}>Ưu đãi cho thẻ ngân hàng</Text>
                            <FontAwesome name="angle-right" size={24} color='#484848' />
                          </TouchableOpacity>
                          <TouchableOpacity style = {styles.ItemPlus}>
                            <Text style = {{flex : 1}}>Cài đặt</Text>
                            <FontAwesome name="angle-right" size={24} color='#484848' />
                          </TouchableOpacity>
                          {/* Divider */}
                          <View style = {styles.Divider}></View>
                          {/*  */}
                          
                          {/* Item */}
                          <ItemNoneBoder nameIcon = "headset" TextName="Hỗ trợ"/>
                      </View>
                      
                 </ScrollView>
            </View>
        )
}
const ItemStyle = {
    flexDirection : 'row',
    paddingHorizontal : 29,
    alignItems : 'center',
    height : 50,
    backgroundColor : '#fff'
}
const styles = StyleSheet.create({
    Container :{
        backgroundColor : '#ededed',
        flex : 1,
    },
    BodyContainer: {
        backgroundColor : '#fff'
    },
    sectionInF : {
        flexDirection : 'row',
        justifyContent :'space-around',
        alignItems : 'center',
        height : 100
    },
    IconPerson : {
        height : 50,
        width : 50,
        alignItems : 'center',
        justifyContent :'center',
        borderRadius : 30
    },
    GreetingText : {
        color : '#828282'
    },
    LoginText :{
        color : '#1e88e5',
        fontSize : 18
    },
    ItemContainer :{
        backgroundColor : '#ededed'
    },
    sectionItem :{
        ...ItemStyle,
        borderTopWidth : 0.6,
        borderTopColor : '#484848',
    },
    sectionItemNone :{
        ...ItemStyle
    },
    Divider :{
        height : 10
    },
    ItemPlus :{
        flexDirection : 'row',
        paddingHorizontal : 29,
        alignItems : 'center',
        height : 50,
        backgroundColor : '#fff'
    }
})
