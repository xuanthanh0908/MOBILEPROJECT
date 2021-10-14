import React, { useEffect, useState } from "react";
import {View, Text, StyleSheet, Image, Button, Alert} from 'react-native';
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

const IMAGES = {
    logo  : require('../assets/Logo.png'),
  };
const Data = require("../DATA/Login.json")



  export default function Login ({navigation})
  {
    const [User,setUser] = useState("");
    const [Password,setPassword] = useState("");
    const [ErrorName, setErrorName] = useState("");
    const [ErrorPW, setErrorPW] = useState("");
    const [data,setData] = useState([])
    useEffect(()=>{
        fetch('https://xuanthanh0908.github.io/Login.json')
        .then(Response=>Response.json())
        .then(json => {
            setData(json.User)
        })
        .catch(error =>console.log(error))
    },[])
    function SubmitForm()
    {
        if(User !="" && Password !="")
        {
            if(ErrorPW === "" && ErrorName === "")
            {
                let dem = 0;
                let Img = "";
                data.map((item)=>{
                    if(item.userName === User && item.Password === Password)
                    {
                        dem++;
                        Img= item.IMG;
                    }
                })
                if(dem > 0)
                {
                    navigation.navigate({
                        name : 'Tab',
                        params : {UserName : User,IMG : Img},
                        merge: true,
                    })
                }
                else Alert.alert("Thông tin User hoặc Password không chính xác")
            }
        }
    }
    const CheckUser = (value)=>{
        if(value == "")
        {
            setErrorName("Vui lòng nhập user")
        }
        else {
            setErrorName("")
        }
    }
    const CheckPassword = (value)=>{
        if(value=="" )
        {
           
            setErrorPW("Vui lòng nhập password")
        }
        else {
            setErrorPW("")
        }
    }
    return(
        <View style = {styles.Container}>
            <View style = {styles.SectionLogo}>
                <Image source = {IMAGES.logo}/>
            </View>
            <View style = {styles.SectionInput}>
                <View style = {styles.UserName}>
                    <FontAwesome5 name="user-alt" size={28} color="black" style = {styles.IconUser}/>
                    <TextInput style = {styles.Input} 
                        autoFocus = {true}
                        keyboardType = 'numeric'
                        placeholder="Tài khoản"
                        value = {User}
                        onChangeText = {(value) => {
                            setUser(value)
                            CheckUser(value)
                        }}
                    ></TextInput>
                    {ErrorName.length > 0  && (<Text style = {{color : 'red',fontSize : 14}}>{ErrorName}</Text>)}
                </View>
                <View style = {styles.Password}>
                    <FontAwesome5 name="lock" size={28} color="black" style = {styles.IconLock} />
                    <TextInput style = {styles.Input} 
                        autoFocus = {true}
                        keyboardType = 'numeric'
                        secureTextEntry = {true}
                        placeholder="Mật khẩu"
                        value = {Password}
                        onChangeText = {(value) => {
                                        setPassword(value)
                                        CheckPassword(value)
                                    }
                                }
                        onBlur = {()=>{
                            if(ErrorPW.length > 0)
                                CheckPassword(User)
                        }}
                    ></TextInput>
                    {ErrorPW.length > 0 && (<Text style = {{color : 'red',fontSize : 14}}>{ErrorPW}</Text>)}
                </View>
            </View>
            <View style = {styles.SectionButton}>
                    <TouchableOpacity 
                        style = {styles.Button} 
                        onPress = {()=>{
                            SubmitForm()
                    }}>
                        <Text style = {styles.TextLogin}>Đăng nhập</Text>
                    </TouchableOpacity>
            </View>
            <View style = {styles.SectionSelect}>
                <TouchableOpacity onPress = {()=>navigation.navigate('Register')}>
                    <Text style = {styles.TextRegister}>Đăng kí</Text>
                </TouchableOpacity>
                <TouchableOpacity >
                    <Text style = {styles.TextRegister}>Đăng nhập bằng SMS</Text>
                </TouchableOpacity>
            </View>
            <View style = {styles.SectionByLogin}>
                <View style = {{justifyContent : 'center',alignItems : 'center'}}>
                    <Text style = {{fontSize : 17,fontWeight : 'bold' ,color : '#949494'}}>Hoặc</Text>
                </View>
                <View>
                    <TouchableOpacity style = {[styles.ButtonWith,{marginTop : 20}]} >
                        <FontAwesome5 name="facebook" size={28} color="#fff" style = {styles.Icon} />
                        <Text style = {styles.TextLoginFor}>Tiếp tục với Facebook</Text>
                    </TouchableOpacity >
                    <TouchableOpacity style = {styles.ButtonWith}>
                    <MaterialCommunityIcons name="gmail" size={28} color="#fff" style = {styles.Icon}/>
                        <Text style = {styles.TextLoginFor}>Tiếp tục với Google</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style = {styles.ButtonWith}>
                    <AntDesign name="apple1" size={28} color="#fff" style = {styles.Icon} />
                        <Text style = {styles.TextLoginFor}>Tiếp tục với ID Apple</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}
const Color = '#1e88e5';
const BGColor_Opacity =  '#D7E9F7';
const styles = StyleSheet.create({
    Container : {
        flex : 1,
        paddingHorizontal : 20
    },
    SectionLogo : {
        height : 150,
        justifyContent : 'center',
        alignItems : 'center'
    },
    SectionInput : {
        height : 100,
        flexDirection : 'column',
        justifyContent : 'space-between',
    },  
    Input: {
        borderBottomColor : '#949494',
        borderBottomWidth : 1,
        padding : 10,
        textAlignVertical: "center",
        textAlign : 'center',
        fontSize : 15
    },
    SectionButton : {
        marginTop : 45,
        minHeight : 50,
    },
    Button : {
        height : 60,
        backgroundColor  : Color,
        justifyContent  :'center',
        alignItems : 'center',
        borderRadius : 10
    },
    TextLogin : {
        color : '#fff',
        fontSize : 20,
        fontWeight : 'bold'
    },
    IconLock : {
        zIndex : 2,
        position  : 'absolute',
        top : 7,
        left : 10
    },
    IconUser : {
        zIndex : 2,
        position  : 'absolute',
        top : 7,
        left : 10 
    },
    SectionSelect : {
        flexDirection : 'row',
        justifyContent : 'space-between'
    },
    TextRegister : {
        color : Color,
        fontWeight : 'bold',
        fontSize : 17,
        marginVertical : 10
    },
    SectionByLogin : {
        marginTop : 20
    },
    TextLoginFor: {
        flex : 5,
        color : '#fff',
        fontWeight : 'bold',
        fontSize : 17,
        marginVertical : 10,
        marginLeft : 60
    },
    ButtonWith : {
        height : 50,
        flexDirection : 'row',
        alignItems : 'center',
        backgroundColor : Color,
        borderRadius : 10,
        marginVertical : 5
    },
    Icon :{
        flex : 1,
        textAlign : 'center'
    }
})