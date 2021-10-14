import React,{Component, useEffect, useState} from "react";
import { StatusBar } from 'expo-status-bar';
import {Dimensions, Image, ScrollView, StyleSheet,Text, TextInput, View } from "react-native";
import { FontAwesome5 } from '@expo/vector-icons'; 
import HomeScreenSection from "../Component/HomeSceenComponet";
import { TouchableOpacity } from "react-native-gesture-handler";
import Slideshow from 'react-native-simple-slideshow';
import { FontAwesome } from '@expo/vector-icons';
import { connect } from 'react-redux';

const Data = require("../DATA/Data.json");
const img_banner2 = require('../assets/banner.png');
const img_banner = require('../assets/section_banner.png');

const ProductItem = ({Logo,Img,Sale,left})=>(
    <View style = {[styles.SectionItem,{marginLeft : left}]}>
        <TouchableOpacity activeOpacity ={0.8} >
            <Image style = {styles.ItemIMG} source = {{uri : Img}}/>
            <Text style ={styles.itemLogo} >{Logo}</Text>
            <Text style ={styles.ItemSale}>{Sale}</Text>
        </TouchableOpacity>
    </View>
)
class HomeScreen extends Component{
    constructor(props) {
        super(props);
     
        this.state = {
          position: 1,
          interval: null,
          dataSource: Data.Slider

        };
        this.navigation = props.navigation;
        this.DATAPHONE = Data.Phone;
        this.DATASMARTPHONE = Data.SmartPhone;
        this.Accesory = Data.AccessoryPhone;
        this.Tablet = Data.Tablet;
      }
     
      componentDidMount() {
        this.setState({
          interval: setInterval(() => {
            this.setState({
              position: this.state.position === this.state.dataSource.length - 1 ? 0 : this.state.position + 1
            });
          }, 4000)
        });
      }
      
      componentWillMount() {
        clearInterval(this.state.interval);
      }
    render()
    {
        const PropsPhone = {
            Data : this.DATAPHONE,
            DataSmart : this.DATASMARTPHONE,
            DataTablet : this.Tablet,
            DataMobile : [],
            Navigation : this.navigation,
            Tilte : 'Điện thoại - Máy tính bảng ',
            Banner : img_banner 
        }
        const AccessoryPhone = {
            Data : this.Accesory,
            DataSmart : [],
            DataTablet : [],
            DataMobile : [],
            Navigation : this.navigation,
            Tilte : 'Phụ kiện',
            Banner : img_banner2 
        }
        return(
            <View style = {styles.container}>
            <StatusBar barStyle = 'light-content'/>
            <ScrollView >
                <View style = {styles.Header}>
                        <FontAwesome5 style = {styles.searchIcon} name="search" size={24} color="#969696" />
                        <TextInput style = {styles.SearchInput} placeholder = 'Bạn tìm gì hôm nay'/>
                        <TouchableOpacity onPress = {()=>this.navigation.navigate('Cart')}>
                            <FontAwesome5 style = {{marginLeft : 10}} name="shopping-cart" size={24} color="#fff" />
                        </TouchableOpacity>
                        <View style = {{position : 'absolute',height : 20,width : 20, borderRadius : 10, backgroundColor : 'red',right : 10, top : 40}}>
                            <Text style={{ color: 'white', fontWeight: 'bold',textAlign : 'center' }}>{this.props.cartItems.length}</Text>
                        </View>
                </View>
                <View style = {styles.BodyContainer}>
                    <HomeScreenSection 
                        {...PropsPhone}
                    />
                    <View style ={styles.Divide}></View>
                    <View style = {styles.SlideShow}>
                        <View style = {styles.sectionShowText}>
                            <Text style = {styles.NUNmail}>NUN MAIL</Text>
                            <TouchableOpacity style = {styles.ButtonSeeMore}>
                                <Text style = {styles.TextSeeMore}>Xem thêm</Text>
                                <FontAwesome name="angle-right" size={24} color='#949494' />
                            </TouchableOpacity>
                        </View>
                        <Slideshow
                            dataSource={this.state.dataSource}
                            position={this.state.position}
                            onPositionChanged={position => this.setState({ position })} 
                            height  = {230}
                        />
                        <View style = {styles.SliderListItem}>
                            <ScrollView horizontal = {true}>
                                {
                                    Data.SalePhone.map((item,index) =>(
                                        <ProductItem 
                                            key = {index}
                                            Logo = {item.Brand}
                                            Sale = {item.SaleOFF}
                                            Img  = {item.IMG}
                                            left = {(index === 0 ? 0 : 20)}
                                        />
                                    ))
                                }
                            </ScrollView>
                        </View>
                    </View>
                    <View style ={styles.Divide}></View>
                    <HomeScreenSection 
                        {...AccessoryPhone}
                    />
                </View>
            </ScrollView>
    
            </View>
           )
    }
    
}
const Color = '#1e88e5';
const mapStateToProps = (state) => {
    return {
        cartItems: state
    }
}
export default connect(mapStateToProps)(HomeScreen)
const styles = StyleSheet.create({
    container : {
       backgroundColor : '#fff'
    },
    Header :{
        minHeight : 100,
        backgroundColor : '#1e88e5',
        flexDirection : 'row',
        justifyContent : 'flex-start',
        alignItems :'center',
        paddingTop : 25,
    },
    SearchInput :{
        borderWidth : 1,
        borderColor : '#eee',
        width : '80%',
        textAlign : 'center',
        padding : 5,
        height : 40,
        backgroundColor : '#fff'
    },
    searchIcon : {
        position : 'relative',
        top : 0,
        left : 35,
        zIndex : 2
    },
    SlideShow: {
        padding : 10
    },
    sectionShowText : {
        flexDirection  : 'row',
        justifyContent : 'space-between',
        alignItems : 'center',
        height : 40,
    },
    NUNmail : {
        fontSize : 20,
        fontWeight : 'bold',
        color : Color
    },
    ButtonSeeMore: {
        flexDirection : 'row',
        justifyContent : 'center',
        alignItems : 'center'
    },
    TextSeeMore : {
        color : '#949494',
        marginRight : 10,
        fontSize : 16
    },
    Divide : {
        height : 10,
        backgroundColor :'#EEEEEE'
    },
    SliderListItem : {
        minHeight : 130,
        minWidth : 70,
    },
    SectionItem :{
        height : 200,
        width : 140,
        borderWidth : 1,
        borderColor : '#949494' ,
        justifyContent : 'center',
        alignItems : 'center',
        paddingBottom : 10,
        marginTop : 20
    },
    ItemIMG :{
        height : 150,
        width : 90,
        resizeMode : 'contain'
    },
    itemLogo :{
        backgroundColor: '#EEEEEE',
        textAlign : 'center',
        minHeight: 20,
        shadowColor: '#DDDDDD',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        borderRadius : 10,
        paddingVertical :5,
        elevation: 2,
        fontSize : 14,
        fontWeight : '700'
    },
    ItemSale: {
        color : '#F05454',
        fontWeight :'bold',
        fontSize : 15,
        marginVertical : 10
    }
}
)