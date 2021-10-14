import React,{Component, useState,useEffect} from 'react'
import { View,Text,StyleSheet, ScrollView , Dimensions,Image,Alert} from 'react-native'
import { StatusBar } from 'expo-status-bar';
import Carousel from 'react-native-snap-carousel';
import { color } from 'react-native-reanimated';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { MaterialIcons } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';
import { useBottomModal, BottomModal,BottomModalRef } from 'react-native-lightning-modal';
import {Collapse,CollapseHeader, CollapseBody, AccordionList} from 'accordion-collapse-react-native';
import 'intl';
import 'intl/locale-data/jsonp/en';
import { connect } from 'react-redux';

const Data = require('../DATA/Data.json');
const DataCart = require('../DATA/CartItem.json');

import ReviewComponent from '../Component/ReviewComponent'
const SectionTypeItem = ({IMG,Price,Sale})=>{
    return(
        <TouchableOpacity style = {styles.SectionItem}>
            <Image style = {styles.TypeIMG} source = {{uri : IMG}}/>
            <Text style = {styles.TypePrice}>{Price}</Text>
            <Text style = {styles.TypeSale}>{Sale}</Text>
        </TouchableOpacity>
    )
}
const WindwoWidth = Dimensions.get("window").width;
const WindwoHeight = Dimensions.get("window").height;
const numberFormat = (value) =>
  new Intl.NumberFormat('it-IT', {
    style: 'currency',
    currency: 'VND'
  }).format(value);

const DetailScreeen = (props)=> {
    const [ID,setID] = useState(0)
    const { dismiss, show, modalProps } = useBottomModal();
    const {
           DetailImg, 
           DetailName, 
           DetailPrice, 
           DetaiTradeMask, 
           DetailDescription, 
           DetailCost,
           DetailNote,
           DetailFrom,
           DetailID
        } = props.route.params;
    const [SelectLove, setSelectLove] = useState(false);
    return(
        <View style = {styles.Container}>
            <StatusBar barStyle = 'light-content'/>
            <ScrollView>
            <View style = {styles.HeaderIMG}>
                    
                    <View>
                        <Image
                            
                            style={{flex : 1, width: '100%', height: 300 }}
                            resizeMode='contain'
                            source = {{uri : DetailImg}}
                        />
                        {/* <Text style = {styles.NumberImg}>{index + 1}/1</Text> */}
                    </View>
                    
                
            </View>
                <View style = {styles.SectionContent}>
                    <View style = {styles.Tiltle}>
                        <View style = {styles.TiltleItem}>
                            <Text style = {styles.TextTilte} numberOfLines = {3}>{DetailName}</Text>
                            <Foundation style = {styles.IconSale} name="burst-sale" size={50} color="red" />
                        </View>
                        <View style = {styles.PriceContainer}>
                            <Text style = {styles.SalePrice}>{numberFormat(DetailPrice)}</Text>
                            <Text style = {styles.SectionDeal}>Mua kèm Deal Sốc</Text>
                        </View>
                        {Number.isNaN(DetailCost)&&(<Text style = {styles.RootPrice}>{numberFormat(DetailCost)}</Text>)}
                    </View>
                    <View style = {styles.TextContainer}>
                        <TouchableOpacity>
                            <View style = {{flexDirection :'row',width : '80%',alignItems : "center"}}>
                                <Text style = {styles.TextChip}>Ở đâu rẻ hơn, Nun Hoàn tiền</Text>
                                <AntDesign name="bells" size={17} color="black" />
                            </View>
                            <View style = {{flexDirection : 'row',width : '90%'}}>
                                <Text style = {styles.TextVoucher}>Tìm được sản phẩm giá thấp hơn? Nhận Voucher MIỄN PHÍ tại đây </Text>
                                <View style = {{flex : 1}}></View>
                                <MaterialIcons name="chevron-right" size={40} color="#949494" />
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style = {styles.textFlash}>
                        <FontAwesome name="flash" size={30} color="#1e88e5" />
                        <Text style = {{marginLeft : 10,fontWeight : '200',color :'#1e88e5'}}>Flash Sale từ 21:00 ngày 12 Th06</Text>
                        <View style = {{flex : 1}}></View>
                        <MaterialIcons name="chevron-right" size={40} color="#949494" />
                    </View>
                    <View style = {styles.Evaluate}>
                        <Collapse>
                            <CollapseHeader>
                                <View style ={{flexDirection :'row'}}>
                                    {
                                        [
                                            {Type : 1},
                                            {Type : 1},
                                            {Type : 1},
                                            {Type : 1},
                                            {Type : 2},
                                        ].map((e,index)=>{
                                            if(e.Type == 1)
                                            {
                                                return(
                                                    e.Type == 1 && (<AntDesign key = {index.toString()} name="star" size={24} color="#FFC947" />)
                                                )
                                            }
                                            else return(
                                                e.Type == 2 && (<AntDesign key = {index.toString()} name="star" size={24} color="#EEEEEE" />)
                                            )
                                        })
                                    }
                                    <Text style = {styles.ForSale}>Đã bán 5,6k</Text>
                                </View>
                            </CollapseHeader>
                            <CollapseBody>
                                <ReviewComponent/>
                            </CollapseBody>
                        </Collapse>
                        <View style = {{flex : 1}}></View>
                        <TouchableOpacity onPress = {()=>setSelectLove(SelectLove=> !SelectLove)}>
                            {!SelectLove &&(<AntDesign name="hearto" size={25} color="black"/>)}
                            {SelectLove &&(<AntDesign name="heart" size={25} color="#FF6767" />)}
                        </TouchableOpacity>
                    </View>
                    <View style = {styles.ListItem}>
                        <View style = {styles.Item}>
                            <FontAwesome5 name="shipping-fast" size={15} color="black" />
                            <Text style = {styles.TextFree}>Miễn phí vận chuyển</Text>
                        </View>
                        <View style = {styles.Item}>
                            <AntDesign name="qrcode" size={15} color="black" />
                            <Text style = {styles.TextFree}>Chính hãng 100%</Text>
                        </View>
                        <View style = {styles.Item}>
                        <AntDesign name="earth" size={15} color="black" />
                            <Text style = {styles.TextFree}>Miễn phí trả hàng</Text>
                        </View>
                    </View>
                </View>
                <View style = {styles.SectionSeeMore}>
                    <View style = {styles.TextSeeMore}>
                        <Text style = {styles.SeeMoreTitle}>Mua thêm Deal cực sốc</Text>
                        <View style = {styles.SeeMoreTextContainer}>
                            <Text>Xem Thêm</Text>
                            <MaterialIcons name="chevron-right" size={40} color="#949494" />
                        </View>
                    </View>
                   <ScrollView horizontal = {true}>
                    <View style ={styles.TypeItem}>
                            {
                                Data.Recommend.map((item,index)=>{
                                    return (
                                        <SectionTypeItem key = {index.toString()}
                                            IMG = {item.img}
                                            Price = {item.p}
                                            Sale = {item.s}
                                        />
                                    )
                                })
                            }
                            
                        </View>
                   </ScrollView>
                </View>
                   <Collapse>
                    <CollapseHeader>
                            <View style = {styles.sectionSeemores}>
                                <TouchableOpacity activeOpacity = {0.6}>
                                    <Text style = {styles.TextSeeMores}> Xem chi tiết </Text>
                                </TouchableOpacity>
                            </View>
                        </CollapseHeader>
                        <CollapseBody>
                                <View style = {styles.DeTailItem}>
                                    {DetaiTradeMask&&(<Text style ={styles.TilteDetail}>Chi tiết sản phẩm</Text>)}
                                    <View>
                                        <View style ={styles.DetailContent} >
                                            <View style = {styles.TiltleItem}>
                                                <Text style = {{color : '#949494'}}>Kho</Text>
                                                <Text style = {{color : '#949494'}}>Thương hiệu</Text>
                                                <Text style = {{color : '#949494'}}>Gửi từ</Text>
                                            </View>
                                            <View style = {styles.ContentItm}>
                                                <Text>1010</Text>
                                                {DetaiTradeMask&&(<Text>{DetaiTradeMask}</Text>)}
                                                {DetailFrom&&(<Text>{DetailFrom}</Text>)}
                                            </View>
                                        </View>
                                        {DetailDescription&&(<View>
                                            <Text style = {{fontWeight : 'bold',fontSize : 18}}>Mô tả sản phẩm</Text>
                                            <View>
                                                {DetailNote&&<Text>{DetailNote}</Text>}
                                                {DetailNote&&<Text></Text>}
                                                {DetailDescription&&DetailNote&&(<Text style = {{fontSize : 15}}>Tính năng nổi bật :</Text>)}
                                                {DetailNote&&<Text></Text>}
                                                <Text >{DetailDescription}</Text>
                                            </View>
                                        </View>)}
                                    </View>
                                </View>
                        </CollapseBody>
                    </Collapse>
            </ScrollView>
            <TouchableOpacity style = {styles.Button} onPress = {()=>show()}>
                        <Text style = {styles.TextButton}>Mua ngay</Text>
            </TouchableOpacity>
            <BottomModal  height={WindwoHeight-WindwoWidth + 1/10*WindwoWidth} {...modalProps}>
                <View style = {styles.BottomModal}>
                    <View style = {styles.SelectItem}>
                        <Image style = {{height: 80, width : 60,resizeMode : 'contain'}} source = {{uri : DetailImg}}/>
                        <View style = {{flexDirection : 'column',marginLeft : 15,marginTop : 10}}>
                            {!Number.isNaN(DetailCost)&&(<Text style = {styles.TypePrice}>{DetailCost}</Text>)}
                            {!Number.isNaN(DetailPrice)&&(<Text style = {styles.TypeSale}>{numberFormat(DetailPrice)}</Text>)}
                        </View>
                    </View>
                    <View style = {styles.SelectColor}>
                        <Text style = {styles.ColorTilte}>Màu sắc</Text>
                        <View style = {styles.SectionItemColor}>
                            {
                                [
                                    'Đỏ',
                                    'Tím',
                                    'Vàng',
                                    'Xanh',
                                    'Cam',
                                    'Trắng',
                                ].map((item,index)=>(
                                    <TouchableOpacity key = {index.toString()} style = {styles.ItemColor}>
                                        <Text style = {{fontWeight : '400'}}>{item}</Text>
                                    </TouchableOpacity>
                                ))
                            }
                           
                        </View>
                    </View>
                    <View>
                        <TouchableOpacity style = {styles.ButtonSelect}
                            onPress = {()=>{
                                const Data = {
                                    IMG : DetailImg,
                                    Name : DetailName,
                                    Price : DetailPrice,
                                    Option : ["A","B"],
                                    Checked : false,
                                    Count : 1,
                                    Push : true,
                                    id : DetailID
                                }
                                props.addItemToCart(Data)
                                props.navigation.goBack()
                            }}
                        >
                            <Text style = {styles.TextSelect}>Thêm giỏ</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </BottomModal>
        </View>
    )
}
const mapDispatchToProps = (dispatch) => {
    return {
        addItemToCart: (product) => dispatch({ type: 'ADD_CART', payload: product })
    }
}
export default connect(null, mapDispatchToProps)(DetailScreeen);
const styles = StyleSheet.create({

    Container :{
        backgroundColor : '#fff',
        flex : 1
    },
    NumberImg :{
        minHeight : 20,
        minWidth : 20,
        backgroundColor : '#F3F1F5',
        position : 'absolute',
        bottom : 30,
        right : 20,
        color : 'black',
        padding : 5,
        borderRadius : 10
    },
    PriceContainer : {
        flexDirection : 'row',
    },
    SectionDeal : {
        marginLeft : 20,
        padding : 2     ,
        borderWidth : 1,
        borderColor : 'red',
        color : 'red',
    },
    Tiltle: {
        paddingLeft : 7,
    },
    TiltleItem :{
        flexDirection : 'row',
    },
    TextTilte :{
        fontSize : 25,
        marginVertical : 10,
        fontWeight : 'bold',
        width : '85%',
        minHeight : 30,
        
    },
    IconSale : {
        position : 'absolute',
        top : 5,
        right : 15
    },
    SalePrice : {
        fontSize : 20,
        color : 'red',
        fontWeight : '600'
    },
    RootPrice : {
        fontSize : 20,
        marginTop : 10,
        color : '#949494',
        textDecorationLine : 'line-through'
    },
    TextContainer : {
        backgroundColor : '#D7E9F7',
        paddingVertical : 10,
        paddingHorizontal : 5,
        marginTop : 10
    },
    TextChip : {
        color : '#1e88e5',
        fontSize : 20,
        fontWeight : '600',
        marginRight : 10
    },
    TextVoucher :{
        color : '#949494',
    },
    textFlash : {
        flexDirection : 'row',
        paddingVertical : 10,
        borderBottomColor : '#949494',
        borderBottomWidth : 0.4,
        paddingHorizontal : 5,
        alignItems : 'center'
    },
    Evaluate : {
        flexDirection : 'row',
        paddingVertical : 10,
        borderBottomWidth : 0.4,
        paddingHorizontal : 5,
        paddingRight : 12
    },
    ForSale: {
        fontWeight : '900',
        fontSize : 17,
        marginLeft : 10,
    },
    ListItem : {
        flexDirection :'row',
        justifyContent : 'space-around',
        paddingVertical : 10,
        borderBottomWidth : 10,
        borderBottomColor : '#F0F3F3',
        paddingHorizontal : 5,
    },
    Item : {
        flexDirection : 'row',
        
    },
    TextFree :{
        fontSize : 12,
        color : '#949494',
        marginLeft : 5,
        
    },
    Button : {
        height : 30,
        backgroundColor : '#3498DB',
        justifyContent : 'center',
        alignItems : 'center',
        paddingVertical : 20,
        position : 'relative',
        bottom : 0
    },
    TextButton : {
        fontSize : 20,
        fontWeight : 'bold',
        color : '#fff'
    },
    SeeMoreTitle : {
        fontSize : 17,
        fontWeight :'bold',
        paddingVertical : 10
    },
    SeeMoreTextContainer : {
        flexDirection : 'row',
        alignItems : 'center',
    },
    SectionSeeMore :{
        flexDirection : 'column',
    },
    TextSeeMore : {
        flexDirection : 'row',
        alignItems : 'center',
        paddingHorizontal : 5,
        justifyContent : 'space-between'
    },
    TypeItem : {
        flexDirection : 'row',
        justifyContent : 'space-around',
        marginVertical : 10
    },
    SectionItem :{
        alignItems : 'center',
        marginRight : 20
    },
    TypeIMG : {
        height : 85,
        width : 85,
        resizeMode : 'contain',
    },
    TypePrice : {
        textDecorationLine : 'line-through',
        fontSize : 14
    },
    TypeSale : {
        color : 'red',
        fontSize : 14
    },
    BottomModal : {
        flex : 1,
        flexDirection : 'column',
        height : 400,
    },
    ButtonSelect :{
        position : 'relative',
        bottom : 0,
        height : 50,
        width : WindwoWidth,
        padding : 10,
        backgroundColor : '#3498DB',
        justifyContent : 'center',
        alignItems : 'center',
    },
    TextSelect : {
        fontSize : 20,
        fontWeight : 'bold',
        color : '#fff'
    },
    SelectItem : {
        flexDirection : 'row',
        margin : 10
    },
    BorderBottom : {
        height : 0.4,
        backgroundColor : '#EEEEEE',
        width : '100%'
    },
    SelectColor : {
        position : 'relative',
    },
    SectionItemColor : {
        flexDirection : 'row',
        flexWrap : 'wrap',
    },
    ItemColor : {
        minHeight : 20,
        paddingHorizontal : 20,
        paddingVertical : 10,
        backgroundColor : '#EEEEEE',    
        margin : 10
    },
    ColorTilte : {
        fontSize : 18,
        fontWeight : 'bold',
        marginLeft : 10,
        borderBottomWidth : 0.8,
        borderBottomColor : '#eeeeee',
        height : 30
    },
    TilteDetail :{
        borderBottomColor : '#eeeeee',
        borderBottomWidth : 0.4,
        height : 30,
        fontWeight : 'bold',
        fontSize : 18
    },
    DetailContent : {
        flexDirection : 'row',
        minHeight : 100,
        paddingHorizontal : 10,
        marginTop : 20
    },
    DeTailItem : {
         paddingHorizontal : 15
    },
    TiltleItem : {
        flex : 1,
        height : 70,
        justifyContent : 'space-around'
    },
    ContentItm : {
        flex : 2,
        height : 70,
        justifyContent : 'space-around'
    },
    sectionSeemores :{
        marginTop : 20,
        alignItems : 'center',
        borderTopColor : '#ededed',
        borderTopWidth : 0.7,
        padding : 12,
    },
    TextSeeMores :{
        color : '#3498DB',
        fontSize : 19,
        fontWeight : 'bold'
    }
})