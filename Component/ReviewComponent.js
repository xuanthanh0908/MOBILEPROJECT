import React,{Component} from "react";
import { View,Text,StyleSheet,Image,ScrollView,Dimensions } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
const WindowWidth = Dimensions.get("window").width;
const WindowHeight = Dimensions.get("window").height;

const ReviewItem = ({IMG,name,Content,Objects})=>{
    return(
        <View style = {styles.ViewCMT}>
            <View style = {styles.ViewIMG}>
                <Image style = {styles.IMG} source = {{uri : IMG}} />
                </View>
                <View style = {styles.SectionContent}>
                    <View style = {styles.TextName}>
                        <Text>{name}</Text>
                        <View style ={styles.ViewRight}>
                            <View style = {{flexDirection : 'row',alignItems : 'center',width : 50,justifyContent : 'space-between'}}>
                                <AntDesign name="like2" size={24} color="black" />
                                <Text style = {styles.ButtonTextMount}>(1)</Text>
                            </View>
                            <View style = {{width : 15}}></View>
                            <View style = {styles.RightSetting}>
                                <MaterialCommunityIcons name="settings-helper" size={26} color="black" style = {{marginBottom : 15}} />
                            </View>
                        </View>
                    </View>
                    <View style = {styles.ViewStart}>
                    {
                    Objects.map((e,index)=>{
                        if(e.Type == 1)
                        {
                            return(
                                e.Type == 1 && (<AntDesign key = {index.toString()} name="star" size={24} color="#FFC947" />)
                            )
                        }
                        else return(
                            e.Type == 2 && (<AntDesign key = {index.toString()} name="star" size={24} color="#C8C6C6" />)
                        )
                    })
                }
                    </View>
                    <View style = {styles.Content}>
                        <Text>{Content}</Text>
                    </View>
            </View>
        </View>
    )
}
export default function ReviewComponent()
{
    return(
        <View style = {styles.Container}>
            <ReviewItem
                IMG = "https://cdn4.buysellads.net/uu/1/50174/1564282856-carbon.png"
                name = "kudasz"
                Content = "ASMR Applying Lipsticks on You with Mouth Sounds💄"
                Objects = {
                    [
                        {Type : 1},
                        {Type : 1},
                        {Type : 1},
                        {Type : 1},
                        {Type : 2},
                    ]
                }
            />
            <ReviewItem
                IMG = "https://meta.vn/Data/image/2020/10/09/dat-ten-tieng-anh-cho-be-gai-1.jpg"
                name = "mungoosda"
                Content = "ASMR Applying Lipsticks on You with Mouth Sounds💄"
                Objects = {
                    [
                        {Type : 1},
                        {Type : 1},
                        {Type : 1},
                        {Type : 2},
                        {Type : 2},
                    ]
                }
            />
            <ReviewItem
                IMG = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvfQlELv-dwt8pphAhUJc9qRvPpSZmo206f2CujkFng495yaJrd_golAMBuykK8IRL_2s&usqp=CAU"
                name = "thanos"
                Content = "ASMR Applying Lipsticks on You with Mouth Sounds💄"
                Objects = {
                    [
                        {Type : 1},
                        {Type : 1},
                        {Type : 2},
                        {Type : 2},
                        {Type : 2},
                    ]
                }
            />
            <ReviewItem
                IMG = "https://lh3.googleusercontent.com/proxy/QQalKYElttRYSyz0ra80MVcN_0DoNl0Vk9kAtgwX48wFsg7-l1-sO6lhcDct6_1qs4Tb6AQzlrkE9HGs9cGwVcT8tSV9pYtBDFUMPzu2ePUr1onA-sATMFgj10i_U2q0NdKlRhLM0EreAP0"
                name = "iron man"
                Content = "ASMR Applying Lipsticks on You with Mouth Sounds💄"
                Objects = {
                    [
                        {Type : 1},
                        {Type : 1},
                        {Type : 1},
                        {Type : 1},
                        {Type : 2},
                    ]
                }
            />
        </View>
    )
}
const styles = StyleSheet.create({
    Container : {
        flex : 1,
        width : WindowWidth
    },
    Tabview: {
        flexDirection : 'row',
        height : 70,
        width: '100%',
        justifyContent : 'space-evenly',
        marginVertical : 10
    },
    ButtonALL: {
        flex : 1,
        paddingHorizontal : 35,
        justifyContent : 'center',
        backgroundColor : '#DDDDDD',
        borderRadius : 5
    },
    ButtonCMT: {
        flex : 1,
        paddingHorizontal : 25,
        justifyContent : 'center',
        backgroundColor : '#DDDDDD',
        borderRadius : 5
    },
    ButtonWithIMG: {
        flex : 1,
        paddingHorizontal : 10,
        justifyContent : 'center',
        backgroundColor : '#DDDDDD',
        borderRadius : 5
    },
    ButtonText :{
        maxWidth : 100,
        fontSize : 14,
        fontWeight : 'bold',
        color : 'black',
        textAlign : 'center',
    },
    ButtonTextMount :{
        maxWidth : 100,
        fontSize : 14,
        fontWeight : 'bold',
        color : '#949494',
        textAlign : 'center',
    },
    ViewStart: {
        flexDirection : 'row',
        paddingHorizontal : 10,
        marginBottom : 5
    },
    StartDisplay: {
        flexDirection : 'row',
    },
    ViewMountStart : {
        height : 50,
        width : '100%',
        alignItems : 'center',
        justifyContent : 'center',
        backgroundColor : '#DDDDDD',
        marginHorizontal : 3,
    },
    ViewCMT: {
        flexDirection : 'row',
        height : 100,
        marginVertical : 10,
        paddingHorizontal : 10
    },
    ViewIMG: {
        flex : 1,
        alignItems : 'center' 
    },
    SectionContent: {
        flex : 8,
    },
    IMG: {
        height : 35,
        width : 35,
        borderRadius : 17.5,
        marginTop : 20
    },
    TextName: {
        paddingHorizontal : 10,
        marginVertical : 5,
        flexDirection : 'row',
        justifyContent :'space-between',
        alignItems : 'center',
        height : 30
    },
    Content : {
        paddingHorizontal : 10,
        marginVertical : 5
    },
    ViewRight : {
        flexDirection : 'row',
        alignItems : 'center',
    }
})