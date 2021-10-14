import React ,{Component, useState} from "react";
import {AppState, Dimensions, Image, ScrollView, StyleSheet,Text, TextInput, View } from "react-native";
import { TouchableHighlight, TouchableOpacity } from "react-native-gesture-handler";
import 'intl';
import 'intl/locale-data/jsonp/en';

const WindowHeight = Dimensions.get('window').height;
const WindowWidth = Dimensions.get('window').width;

const numberFormat = (value) =>
  new Intl.NumberFormat('it-IT', {
    style: 'currency',
    currency: 'VND'
  }).format(value);

const SectionMore = ({Mount})=>(
    <View style = {styles.sectionSeemore}>
        <TouchableOpacity activeOpacity = {0.6}>
            <Text style = {styles.TextSeeMore}>XEM TẤT CẢ {Mount} SẢN PHẨM</Text>
        </TouchableOpacity>
    </View>
)
const HomeScreenSection =({...PropsPhone})=>{
    const ProductItem = ({name,Img,Price,Objects})=>(
        <View style = {styles.SectionItem}>
            <TouchableOpacity activeOpacity ={0.8} onPress = {()=>PropsPhone.Navigation.navigate('Detail',Objects)}>
                <Image style = {styles.ItemIMG} source = {{uri : Img}}/>
                <Text style ={styles.itemText} numberOfLines = {2}>{name}</Text>
                <Text style ={styles.ItemPrice}>{Price}</Text>
            </TouchableOpacity>
        </View>
    )
    const [AppState,ChangeState]= useState({
        activeObject : 0,
        Objects : [0,1,2,3],
    });
    function ToggleActive(index)
    {
        ChangeState({...AppState, activeObject : AppState.Objects[index]})
    }
    return(
        <View>
            <View style = {styles.sectionContainer}>
                    <Text style ={styles.sectionTitle}>{PropsPhone.Tilte}</Text>
                    <Image style ={styles.sectionIMG} source = {PropsPhone.Banner}/>
                </View>

                {/* ScrollView for ListTab */}
                <ScrollView horizontal = {true} showsHorizontalScrollIndicator = {false} style = {{paddingHorizontal : 10}}>
                
                {
                    [
                        'Tất cả',
                        'Điện thoại SmartPhone',
                        'Máy tính bảng',
                        'Điện thoại'
                    ].map((e,index)=>(
                        <View key = {index.toString()}  style = {styles.ListTab}>
                                <TouchableOpacity 
                                    onPress = {()=>{
                                        ToggleActive(index)
                                    }}
                                >
                                    <Text  style = {(AppState.Objects[index]===AppState.activeObject || index  === AppState.activeObject) ?styles.FilterActive:styles.FilterInActive }>{e}</Text>
                                </TouchableOpacity>
                        </View>
                    ))
                }
            
            
                </ScrollView>
                {/* ListItemContainer */}
                <View style = {styles.ListItemContainer}>
                    <ScrollView horizontal = {true} showsHorizontalScrollIndicator = {false}>
                    {
                         AppState.activeObject === 0&&PropsPhone.Data.length == 0 &&(
                            <View style = {{justifyContent : 'center',alignItems: 'center',width : WindowWidth,marginVertical : 30}}>
                                <Text style ={{fontSize : 16,fontWeight : 'bold'}}>Hiện tại đang cập nhật thêm</Text>
                            </View>
                         )
                    }
                    {
                    
                        AppState.activeObject === 0 && (
                        PropsPhone.Data.map((e,index)=>(
                            <View key ={index.toString()}>
                                <ProductItem
                                    name = {e.n1}
                                    Img = {e.img1}
                                    Price = {numberFormat(e.p1)}
                                    Objects = {
                                       {
                                           DetailImg : e.img1,
                                           DetailName : e.n1,
                                           DetailPrice : e.p1,
                                           DetaiTradeMask : e.trademark1,
                                           DetailDescription : e.description1,
                                           DetailCost : numberFormat(e.cost1),
                                           DetailNote : e.note1,
                                           DetailFrom : e.From1,
                                           DetailID : e.id1
                                       }
                                    }
                                />
                                <ProductItem
                                    name = {e.n2}
                                    Img = {e.img2}
                                    Price = {numberFormat(e.p2)}
                                    Objects = {
                                        {
                                            DetailImg : e.img2,
                                            DetailName : e.n2,
                                            DetailPrice : e.p2,
                                            DetaiTradeMask : e.trademark2,
                                            DetailDescription : e.description2,
                                            DetailCost : numberFormat(e.cost2),
                                            DetailNote : e.note2,
                                            DetailFrom : e.From2,
                                            DetailID : e.id2
                                        }
                                     }
                                />
                        </View>
                        ))
                            )
                    }
                    {
                         AppState.activeObject === 1 &&PropsPhone.DataSmart.length == 0 && (
                            <View style = {{justifyContent : 'center',alignItems: 'center',width : WindowWidth,marginVertical : 30}}>
                                <Text style ={{fontSize : 16,fontWeight : 'bold'}}>Hiện tại đang cập nhật thêm</Text>
                            </View>
                         )
                    }
                    {
                        AppState.activeObject === 1 && (
                        PropsPhone.DataSmart.map((e,index)=>(
                            <View key ={index.toString()}>
                                <ProductItem
                                    name = {e.n1}
                                    Img = {e.img1}
                                    Price = {numberFormat(e.p1)}
                                    Objects = {
                                        {
                                            DetailImg : e.img1,
                                            DetailName : e.n1,
                                            DetailPrice : (e.p1),
                                            DetaiTradeMask : e.trademark1,
                                            DetailDescription : e.description1,
                                            DetailCost : numberFormat(e.cost1),
                                            DetailNote : e.note1,
                                            DetailFrom : e.From1,
                                            DetailID : e.id1
                                        }
                                     }
                                />
                                <ProductItem
                                    name = {e.n2}
                                    Img = {e.img2}
                                    Price = {numberFormat(e.p2)}
                                    Objects = {
                                        {
                                            DetailImg : e.img2,
                                            DetailName : e.n2,
                                            DetailPrice : (e.p2),
                                            DetaiTradeMask : e.trademark2,
                                            DetailDescription : e.description2,
                                            DetailCost : numberFormat(e.cost2),
                                            DetailNote : e.note2,
                                            DetailFrom : e.From2,
                                            DetailID : e.id2
                                        }
                                     }
                                />
                        </View>
                        ))
                            )
                    }
                     {
                         AppState.activeObject === 2&&PropsPhone.DataTablet.length == 0 &&(
                            <View style = {{justifyContent : 'center',alignItems: 'center',width : WindowWidth,marginVertical : 30}}>
                                <Text style ={{fontSize : 16,fontWeight : 'bold'}}>Hiện tại đang cập nhật thêm</Text>
                            </View>
                         )
                    }
                     {
                        AppState.activeObject === 2 &&(
                        PropsPhone.DataTablet.map((e,index)=>(
                            <View key ={index.toString()}>
                                <ProductItem
                                    name = {e.n1}
                                    Img = {e.img1}
                                    Price = {numberFormat(e.p1)}
                                    Objects = {
                                        {
                                            DetailImg : e.img1,
                                            DetailName : e.n1,
                                            DetailPrice : (e.p1),
                                            DetaiTradeMask : e.trademark1,
                                            DetailDescription : e.description1,
                                            DetailCost : numberFormat(e.cost1),
                                            DetailNote : e.note1,
                                            DetailFrom : e.From1,
                                            DetailID : e.id1
                                        }
                                     }
                                />
                                <ProductItem
                                    name = {e.n2}
                                    Img = {e.img2}
                                    Price = {numberFormat(e.p2)}
                                    Objects = {
                                        {
                                            DetailImg : e.img2,
                                            DetailName : e.n2,
                                            DetailPrice : (e.p2),
                                            DetaiTradeMask : e.trademark2,
                                            DetailDescription : e.description2,
                                            DetailCost : numberFormat(e.cost2),
                                            DetailNote : e.note2,
                                            DetailFrom : e.From2,
                                            DetailID : e.id2
                                        }
                                     }
                                />
                        </View>
                        ))
                            )
                    }
                    {
                         AppState.activeObject === 3&&PropsPhone.DataMobile.length == 0 &&(
                            <View style = {{justifyContent : 'center',alignItems: 'center',width : WindowWidth,marginVertical : 30}}>
                                <Text style ={{fontSize : 16,fontWeight : 'bold'}}>Hiện tại đang cập nhật thêm</Text>
                            </View>
                         )
                    }
                    </ScrollView>
                </View>
                {
                        AppState.activeObject === 0 && PropsPhone.Data.length >0 &&(
                            <SectionMore Mount = {14}/>
                        )
                }
                {
                        AppState.activeObject === 1 && PropsPhone.DataSmart.length >0 &&(
                            <SectionMore Mount = {24}/>
                        )
                }
                {
                        AppState.activeObject === 2 && PropsPhone.DataTablet.length >0 &&(
                            <SectionMore Mount = {25}/>
                        )
                }
                {
                        AppState.activeObject === 3 && PropsPhone.DataMobile.length >0 &&(
                            <SectionMore Mount = {10}/>
                        )
                }
        </View>
    )
}
export default HomeScreenSection;
const styles = StyleSheet.create({
    sectionContainer : {
       backgroundColor : '#fff',
       padding : 10,
    },
    sectionTitle : {
        fontSize : 20,
        fontWeight : 'bold',
        marginVertical : 10
    },
    sectionIMG :{
        height : 130,
        borderRadius : 4,
        resizeMode : "stretch",
        width : WindowWidth - 20,
    },
    ListItemContainer : {
        flexDirection : 'row',
        paddingHorizontal : 10
    },
    SectionItem :{
        width :100,
        marginRight : 10,
        marginVertical : 5
    },
    itemText : {
        fontSize: 14,
        color: '#484848',
        marginVertical: 4,
    },
    ItemPrice : {
        fontSize: 16,
        fontWeight: '500',
        color: '#2a2a2a',
    },
    ItemIMG : {
        width: 100,
        height: 100,
    },
    ListTab : {
        marginVertical : 10,
        flexDirection : 'row',
    },
    FilterActive : {
        borderWidth : 1,
        borderColor : '#5a5a5a',
        borderRadius : 4,
        backgroundColor : 'black',
        color : '#fff',
        paddingVertical : 5,
        paddingHorizontal : 10,
        marginRight : 10
    },
    FilterInActive : {
        borderRadius : 4,
        borderWidth : 1,
        borderColor : '#5a5a5a',
        backgroundColor : '#fff',
        color : 'black',
        paddingVertical : 5,
        paddingHorizontal : 10,
        marginRight : 10
    },
    sectionSeemore :{
        marginTop : 20,
        alignItems : 'center',
        borderTopColor : '#ededed',
        borderTopWidth : 0.7,
        padding : 12,
    },
    TextSeeMore :{
        color : '#0e45b4',
        fontSize : 17,
    }
}
)