import React,{Component} from "react";
import { View,StyleSheet,Text,TouchableOpacity, Image, Dimensions} from "react-native";
import { StatusBar } from 'expo-status-bar';
import Header from "../Component/HeaderComponent";
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { FlatList } from "react-native-gesture-handler";
import { Ionicons } from '@expo/vector-icons';
const Data = require("../DATA/Notify.json");
const DataSale = require('../DATA/NotifySale.json');

const WindowHeight = Dimensions.get("window").height;
const NotifiItem = ({item})=>{
    return(
        <View style = {styles.ItemContainer}>
            <TouchableOpacity activeOpacity = {0.6} >
                <View style = {styles.SectionICON}>
                    <View style = {[styles.IconContainer]}>
                        <Image style = {{height : 50, width : 50}} source = {{uri : item.Img}}/>
                    </View>
                    <View style = {[styles.itemTopTextContainer]}>
                        <Text >{item.name}</Text>
                        <Text>{item.date}</Text>
                    </View>
                </View>
                <View style = {{borderBottomColor : '#5e5e5e',borderBottomWidth : 0.5,}}>
                    <Text style = {{marginBottom : 12,marginHorizontal : 10,color : '#949494'}}>{item.detail}</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default class NotifyScreen extends Component{
    
    constructor(props)
    {
        super(props)
        this.state = {
                Active : 0,
                ObjectActive : [0,1,2],
            }
        this.ToggleActive = this.ToggleActive.bind(this)
        this.navigation = props.navigation;
    }
    ToggleActive(index)
        {
            this.setState({
                Active : this.state.ObjectActive[index],
            })
            console.log(this.state.Active)
        }
    render()
    {
        return(
            <View style = {styles.Container}>
                <StatusBar barStyle = 'light-content'/>
                {/* Header */}
                <Header title="Thông báo" onPress = {()=>this.navigation.navigate('Cart')}/>
                <View style = {styles.BodyContainer}>
                    <View style = {styles.SectionLeft}>
                        {
                            [
                                'home',
                                'backup-restore',
                                'sale',
                            ].map((e,index)=>(
                                <TouchableOpacity key = {index.toString()}
                                    onPress = {()=>this.ToggleActive(index)}
                                >
                                     <MaterialCommunityIcons 
                                       style = {(this.state.ObjectActive[index] === this.state.Active || index === this.state.Active) ?
                                       styles.IconLeftActive : styles.IconLeftInActive} name={e} size={24} color="#949494" />
                                </TouchableOpacity>
                            ))
                        }
                    </View>
                    <View style = {styles.SectionRight}>
                        {this.state.Active == 0 &&(<FlatList
                            data = {Data.HomeNotify}
                            keyExtractor = {item => item.id.toString()}
                            renderItem = {({item})=><NotifiItem item = {item}/>}
                        />)}
                        {this.state.Active == 1 &&(
                            <View style = {{height : WindowHeight, width : '100%',position : 'relative',top : WindowHeight / 3, alignItems : 'center'}}>
                                <Ionicons name="notifications" size={70} color="#1e88e5" />
                                <Text>Chưa có thông báo mới</Text>
                            </View>
                        )}
                        {this.state.Active == 2 &&(<FlatList
                            data = {DataSale.NotifySale}
                            keyExtractor = {item => item.id.toString()}
                            renderItem = {({item})=><NotifiItem item = {item}/>}
                        />)}
                    </View>
                    
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    Container :{
        backgroundColor : '#ededed',
        flex : 1
    },
    BodyContainer : {
        flexDirection : 'row',
    },
    SectionLeft :{
        
    },
    SectionRight : {
        borderLeftColor : '#5e5e5e',
        borderLeftWidth : 0.5,
        flex : 1,
    },
    IconLeftActive :{
        backgroundColor : '#fff',
        padding : 12,
        justifyContent : 'center',
        borderBottomColor : '#5e5e5e',
        borderBottomWidth : 0.5,
    },
    IconLeftInActive :{
        padding : 12,
        borderBottomColor : '#5e5e5e',
        borderBottomWidth : 0.5,
    },
    Mark : {
        width : 3,
        backgroundColor : '#1e88e5',
    },
    SectionICON :{
        flexDirection :'row',
        marginHorizontal : 10
    },
    IconContainer :{
        marginVertical : 10,
        width: 55,
        height: 55,
        alignItems: 'center',
        justifyContent: 'center',
    },
    itemTopTextContainer :{
        marginVertical : 10,
        marginRight : 40,
        marginLeft : 10
    },
    activeIcon :{
        padding : 12,
        marginLeft : -3
    }
    

})