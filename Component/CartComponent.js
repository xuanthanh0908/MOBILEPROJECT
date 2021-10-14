import React, { useEffect, useState } from "react";
import { View,Text,StyleSheet, CheckBox,Image,Picker,Switch, Dimensions } from "react-native";
import HeaderComponent from '../Component/HeaderComponent';
import SegmentedControlTab from 'react-native-segmented-control-tab';
import { FlatList, ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import Label, {Orientation} from "react-native-label"; // Ribbon
import SelectDropdown from 'react-native-select-dropdown'
import 'intl';
import 'intl/locale-data/jsonp/en';
import { connect } from 'react-redux';

const WindwoWidth = Dimensions.get("window").width;
const WindwoHeight = Dimensions.get("window").height;
const DataCart = require('../DATA/Cart.json');

const numberFormat = (value) =>
new Intl.NumberFormat('it-IT', {
    style: 'currency',
    currency: 'VND'
  }).format(value);
const ProductItem = ({name,Img,PriceFormat,Price,Sold})=>(
    <View style = {styles.SectionItem}>
        <TouchableOpacity activeOpacity ={0.8} >
            <View >
                <Label
                    orientation={Orientation.TOP_LEFT}
                    containerStyle={{
                        height : 200,
                        width : 180,
                    }}
                    title="Giảm 60%"
                    color="orange"
                    distance={80}
                    style = {
                        {
                            fontSize: 15, 
                            color: 'white', textAlign: 'center', 
                            alignItems: 'center', 
                            justifyContent: 'center'}
                    }
                    shadowProps= {
                        {
                            shadowColor: "#000", 
                            shadowOffset: { width: 1, height: 20, }, 
                            shadowOpacity: 1, 
                            shadowRadius: 10, 
                            elevation: 30
                        }
                    }
                >
                    <Image style = {styles.IMGProduct} source = {{uri : Img}}/>
                </Label>
            </View>
            <Text style ={styles.itemText} numberOfLines = {2}>{name}</Text>
            <View style = {styles.ViewSee}>
                <Text style ={styles.ItemPrice}>{PriceFormat}</Text>
                <Text style ={styles.ItemSold}>{Sold}</Text>
            </View>
        </TouchableOpacity>
    </View>
)

function CartComponent(props)
{
    const DataNavigation = props.cartItems;
    useEffect(()=>{
        console.log(DataNavigation)
    },[])
    const [selectedIndex,SetSelectIndex] = useState(0);
    const [isEnabled, setIsEnabled] = useState(false);
    const [isSelected, setSelection] = useState(false);
    const [Money,setMoney] = useState(0);
    const [state, setState] = useState({
        list : DataNavigation,
    })
    function checkThisBox(itemID)
    {
        const data = state.list;
        data[itemID].Checked = !data[itemID].Checked
        setState({list : data})
    }
    function CheckCountAdd(itemID)
    {
        const data = state.list;
        data[itemID].Count = data[itemID].Count + 1;
        setState({list : data})
    }
    function CheckCountMinus(itemID)
    {
        const data = state.list;
        if(data[itemID].Count >= 1)
        {
            data[itemID].Count = data[itemID].Count - 1;
            setState({list : data})
        }
    }
    function CheckBoxALL(value)
    {
        var total = 0;
        if(value == true)
        {
            DataNavigation.map(e=>{
                e.Checked = true;
                total +=e.Count*e.Price;
            })
            setMoney(total)
        }
        else {
            DataNavigation.map(e=>{
                e.Checked = false;
                if(total >=1)
                {
                    total -=e.Count*e.Price;
                }
            })
        }
        setMoney(total)
    }
    // COmponent Item
     const Item = ({Name,Price,PriceFormat,IMG,Options,indexItem,ID,Check,CountSingle})=>{
        
        function Getmoney(value)
        {
            if(value == true )
            {
                setMoney(Money  + CountSingle*Price)
            }
            else{
                 setMoney(Money - CountSingle*Price)
            }
            
        }
    return(
        <View style = {styles.ItemContainer} >
            <View style = {styles.HeaderItem}>
                <CheckBox
                    value={Check}
                    onValueChange={(value)=>{
                        checkThisBox(ID)
                        Getmoney(value)
                    }}
                    style={styles.checkbox}
                    tintColors={{ true: Color, false: 'black' }}
                />
                <Text style = {styles.TextLove}>Yêu thích</Text>
                <Text style = {styles.TextName}>Cửa hàng A</Text>
                <View style = {{flex : 1}}></View>
                <TouchableOpacity onPress = {()=>{
                        props.removeItem(DataNavigation[ID])
                        console.log("DataUpdate : ",DataNavigation)
                    }}> 
                    <Text style = {styles.TextEdit}>Xóa</Text>
                </TouchableOpacity>
            </View>
            <View style = {{flexDirection :'row',paddingHorizontal : 10,paddingVertical : 10}}>
                <CheckBox
                   value={Check}
                   onValueChange={(value)=>{
                        checkThisBox(ID)
                        Getmoney(value)
                    }}
                   style={styles.checkbox}
                   tintColors={{ true: Color, false: 'black' }}
                />
                <View style = {styles.ItemIMGContainer}>
                    <Image style = {styles.ItemIMG} source = {{uri : IMG}} />
                </View>
                <View style = {styles.ItemContent}>
                    <Text style = {styles.PhoneName}>{Name}</Text>
                    <SelectDropdown 
                        data={Options}
                        onSelect={(selectedItem, index) => {
                            console.log(Options)
                        }}
                        defaultButtonText ={Options[0]}
                        buttonStyle ={{
                            borderWidth : 1,
                            borderColor : '#949494',
                            height : 45,
                            backgroundColor : '#fff'
                        }}
                        dropdownButton = {{
                            flexDirection : 'row',
                            justifyContent: "space-between",
                            alignItems: "center",
                            backgroundColor: "#EFEFEF",
                            width: WindwoWidth / 2,
                            height: 50,
                            paddingHorizontal: 8,
                            overflow: "hidden",
                          }}
                        dropdownButtonText = {{
                            flex: 1,
                            fontSize: 18,
                            color: "#fff",
                            textAlign: "center",
                            marginHorizontal: 8
                        }}
                        
                        dropdownStyle = {{
                            marginTop : -27,

                        }}
                          
                    />

                    <View style = {styles.TextContainer}>
                        <Text style = {styles.TextPrice}>{PriceFormat}</Text>
                    </View>
                    <View style = {styles.Button}>
                        <TouchableOpacity onPress = {()=>{
                                    CheckCountMinus(ID)
                             }}>
                            <Text style = {{fontSize : 18,fontWeight : 'bold',paddingRight : 10}}>-</Text>
                        </TouchableOpacity>
                        <Text style = {styles.TextCount}>{CountSingle}</Text>
                        <TouchableOpacity onPress = {()=>{
                                        CheckCountAdd(ID)
                                    }}>
                            <Text style = {{fontSize : 18,fontWeight : 'bold',paddingLeft : 10}}>+</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            {DataNavigation&&indexItem < DataNavigation.length - 1 &&(
                    <View style ={styles.Divide}></View>
            )}
        </View>
    )
}
    return(
        <View style = {styles.Container}>
            <View style = {styles.BodyContainer}>
                    <View style = {styles.BodyHeader}>
                        <FontAwesome5 name="shipping-fast" size={30} color = {Color} />
                        <Text style = {styles.TextFree}>Nhấn vào mục Mã giảm giá ở cuối trang để hưởng miễn phí vận chuyển bạn nhé</Text>
                    </View>
                    <View style = {styles.Tabs}>
                        <SegmentedControlTab
                            values = {['Tất cả', 'Mua lại   ']}
                            selectedIndex = {selectedIndex}
                            onTabPress = {index => {
                                SetSelectIndex(index)
                                console.log(index)
                            }}
                            tabTextStyle = {
                                {
                                    fontSize : 15,
                                    fontWeight : '600'
                                }
                            }
                        />
                    </View>
                    <ScrollView >
                        {
                            selectedIndex == 0 &&(
                                <View style = {styles.ListItem}>
                                    <View >                  
                                        <View style = {styles.BodyItem}>
                                        {
                                            DataNavigation.length > 0&&(DataNavigation.map((item,index)=>(
                                                <Item
                                                    Name = {item.Name} 
                                                    PriceFormat = {numberFormat(item.Price)}
                                                    Price = {item.Price}
                                                    IMG = {item.IMG}
                                                    Options = {item.Option}
                                                    indexItem = {index}
                                                    key = {index.toString()}
                                                    ID = {index}
                                                    Check = {item.Checked}
                                                    CountSingle = {item.Count}
                                                />
                                            )))
                                        }
                                            {DataNavigation.length == 0&&(<View style = {{flex : 1,height : WindwoHeight/1.5, justifyContent : 'center',alignItems : 'center',backgroundColor : '#fff'}}>
                                                <Image style ={{height : 250,width: 250}} source = {{uri : "https://cdn.dribbble.com/users/1271787/screenshots/4763431/____.png?compress=1&resize=400x300"}}/>
                                                <Text style = {styles.TextNoInfo}>Chưa có thông tin</Text>
                                            </View>)}
                                            
                                                
                                                <View style = {styles.Divide}></View>
                                                <View style = {styles.ShowMoreContainer}>
                                    <View style = {styles.MayBeYL}>
                                        <Text style = {styles.MayBeText}>Có thể bạn cũng quan tâm</Text>
                                        <View style = {styles.ListProduct}>
                                                    {
                                                        DataCart.Cart.map((e,index)=>(
                                                            <View key ={index.toString()}>
                                                                <ProductItem
                                                                    name = {e.name}
                                                                    Img = {e.Img}
                                                                    PriceFormat = {numberFormat(e.Price)}
                                                                    Sold = {e.Sold}
                                                                    Price = {e.Price}
                                                                />
                                                                <ProductItem
                                                                    name = {e.name2}
                                                                    Img = {e.Img2}
                                                                    PriceFormat = {numberFormat(e.Price2)}
                                                                    Sold = {e.Sold2}
                                                                    Price = {e.Price}
                                                                />
                                                            </View>
                                                        ))
                                                    }
                                        </View>
                                    </View>
                                </View>
                                </View>
                            </View>
                        </View>)}
                        {
                            selectedIndex == 1 && (
                                <View style = {{flex : 1,height : WindwoHeight/1.5, justifyContent : 'center',alignItems : 'center',backgroundColor : '#fff'}}>
                                    <Image style ={{height : 250,width: 250}} source = {{uri : "https://cdn.dribbble.com/users/1271787/screenshots/4763431/____.png?compress=1&resize=400x300"}}/>
                                    <Text style = {styles.TextNoInfo}>Chưa có thông tin</Text>
                                </View>
                            )
                        }
                    </ScrollView>
            </View>
            {DataNavigation.length > 0 && selectedIndex == 0 && (<View style = {styles.Fixed}>
                <View style = {styles.Footer}>
                    <View style = {styles.Voucher}>
                        <View style = {{flexDirection : 'row',alignItems : 'center',paddingVertical : 10}}>
                            <Entypo name="v-card" size={30} color = {Color} />
                            <Text style = {styles.NunVoucher}>Nun Voucher</Text>
                        </View>
                        <Text style = {styles.TextVoucher}>Chọn mã </Text>
                    </View>
                    <View style = {styles.HaveMoney}>
                        <View style = {{flexDirection : 'row',alignItems : 'center',paddingVertical : 10}}>
                            <FontAwesome5 name="money-check-alt" size={30} color= {Color} />
                            <Text style = {{...styles.NunVoucher,marginRight: 10}}>Bạn chưa có mã</Text>
                            <AntDesign name="questioncircleo" size={24} color="black" />
                        </View>
                        <View>
                            <Switch
                                trackColor={{ false: "#767577", true: Color }}
                                thumbColor={"#f4f3f4"}
                                ios_backgroundColor="#3e3e3e"
                                onValueChange={setIsEnabled}
                                value={isEnabled}
                                style = {{transform : [{scaleX : 1.3},{scaleY : 1.3}]}}
                            />
                        </View>
                    </View>
                    <View style = {styles.Payment}>
                        <View style = {styles.SelectALL}>
                            <View style = {styles.ALLContainer}>
                                <CheckBox
                                    value={isSelected}
                                    onValueChange={(value)=>{
                                        CheckBoxALL(value)
                                        setSelection(value)
                                    }}
                                    style={styles.checkbox}
                                    tintColors={{ true: Color, false: 'black' }}
                                />
                                <Text style = {{fontSize : 16,fontWeight : '500'}}>Tất cả</Text>
                            </View>
                            <View style ={styles.ByNowContainer}>
                                <View style = {{flexDirection : 'row',alignItems : 'center',marginRight : 10}}>
                                    <Text style = {{fontWeight : '600'}}>Tổng tiền : </Text>
                                    <Text style = {{color : 'red',fontWeight : '600'}}>{numberFormat(Money)}</Text>
                                </View>
                                <TouchableOpacity style={styles.BuyNowButton}>
                                    <Text style = {styles.TextByNow}>Mua ngay</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            </View>)}
        </View>
    )
}
const Color = '#1e88e5';
const BGColor_Opacity =  '#D7E9F7';
const mapDispatchToProps = (dispatch) => {
    return {
        removeItem: (product) => dispatch({ type: 'DELETE_CART', payload: product })
    }
}
const mapStateToProps = (state) => {
    return {
        cartItems: state
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (CartComponent);
const styles = StyleSheet.create({
    Container : {
        flex : 1,
        minHeight : '100%',
    },
    Tabs : {
        marginTop : 2
    },
    BodyHeader : {
        flexDirection : 'row',
        padding : 10,
        alignItems : 'center',
        backgroundColor : BGColor_Opacity
    },
    TextFree : {
        marginLeft : 10,
        fontSize : 17,
        fontWeight : '200'
    },
    ItemContainer: {
        flexDirection : 'column',
        paddingBottom : 20
    },
    HeaderItem :{
        flexDirection : 'row',
        paddingHorizontal : 10,
        minHeight : 15,
        alignItems : 'center',
        borderBottomColor : '#949494',
        borderBottomWidth : 0.4,
        paddingVertical : 15
    },
    TextLove :{
        color : '#fff',
        padding : 5,
        backgroundColor : Color,
        fontWeight : '600',
        fontSize : 15,
        borderRadius : 5
    },
    TextName : {
        fontWeight : '600',
        fontSize : 15,
        marginLeft : 10
    },
    TextEdit : {
        fontWeight : '600',
        fontSize : 15,
        color : '#949494'
    },
    checkbox : {
        alignSelf : 'center',
        marginRight : 10,
        transform : [{scaleX : 1.4},{scaleY : 1.4}]
    },
    BodyItem :{
        flexDirection : 'column',
        alignSelf : 'stretch',
    },
    // May be You Like :
    MayBeYL : {
        height  : WindwoHeight + 1/2 * WindwoWidth,
        paddingHorizontal : 10,
    },
    MayBeText : {
        fontSize : 16,
        fontWeight : '500',
        color : '#949494',
        textAlign : 'center',
        marginVertical : 10,
    },
    ListProduct: {
        flexDirection : 'row',
        justifyContent : 'space-between'
    },
    IMGProduct: {
        height : 200,
        width : 180,
        backgroundColor  : 'transparent'
    },
    ItemContent :{
        flexDirection : 'column',
        flex : 1,
        marginHorizontal : 10
    },
    PhoneName :{
        fontSize : 17,
        fontWeight : '500',
        width : '90%',
        marginLeft : 10,
        marginVertical : 10
    },
    SelectPicker: {
        height: 40,
        minWidth : 50,
        borderColor : '#949494',
        borderWidth : 0.7, 
        justifyContent : 'center',
        marginHorizontal : 10,
        backgroundColor : '#eeeeee',
    },
    TextContainer : {
        height : 30,
        justifyContent : 'center',
    },
    TextPrice : {
        marginLeft : 10,
        color : 'red',
        fontSize : 18,
        fontWeight : 'bold'
    },
    Button: {
        flexDirection : 'row',
        width : 100,
        justifyContent : 'space-around',
        alignItems : 'center',
        borderColor : '#949494',
        borderWidth : 0.7, 
        marginVertical : 10,
        marginLeft : 10,
        paddingHorizontal : 10,
    },
    TextCount: {
        fontSize : 18,
        fontWeight : 'bold',
        borderColor : '#949494',
        borderLeftWidth : 0.7, 
        borderRightWidth : 0.7,
        width : 50,
        paddingVertical : 5,
        textAlign : 'center'
    },
    Divide : {
        height : 10,
        backgroundColor : '#DDDDDD'
    },  
    SectionItem :{
        minWidth :100,
        marginRight : 10,
        marginVertical : 5
    },
    ViewSee : {
        flexDirection : 'row',
        justifyContent : 'space-between'
    },
    itemText : {
        fontSize: 15,
        color: '#484848',
        marginVertical: 4,
        width : 150,
        height : 40
    },
    ItemPrice : {
        fontSize: 16,
        fontWeight: '500',
        color: 'red',
    },
    ItemSold : {
        fontSize: 14,
        fontWeight: '500',
        color : 'black'
    },
    ItemIMG : {
        width: 100,
        height: 120,
    },
    TextNoInfo : {
        fontSize : 20,
        fontWeight : 'bold'
    },
    // 
    Fixed : {
        position : 'absolute',
        bottom : 0,
        height : WindwoHeight  - WindwoWidth - 1/2.5 * WindwoWidth,
        width : '100%',
        shadowColor: "#000",
        backgroundColor : '#fff',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.34,
        shadowRadius: 5,
        elevation: 2,
    },
    Voucher: {
        flexDirection : 'row',
        justifyContent : 'space-between',
        paddingHorizontal : 10,
        alignItems : 'center',
        borderBottomColor : '#dddddd',
        borderBottomWidth : 1
    },
    TextVoucher : {
        fontSize : 16,
        fontWeight : '500',
        color : '#949494'
    },
    NunVoucher : {
        fontSize : 16,
        fontWeight : '500',
        marginLeft : 20
    },
    HaveMoney : {
        flexDirection : 'row',
        alignItems : 'center',
        justifyContent : 'space-between',
        paddingHorizontal : 10
    },
    SelectALL :{
        flexDirection : 'row',
        paddingLeft : 10,
        justifyContent : 'space-between',
    },
    ALLContainer :{
        flexDirection : 'row',
        alignItems : 'center'
    },
    ByNowContainer : {
        flexDirection : 'row'
    },
    BuyNowButton :{
        width : 100,
        backgroundColor : Color,
        paddingVertical : 10,
        justifyContent : 'center',
        alignItems : 'center'
    },
    TextByNow :{
        fontSize : 18,
        fontWeight : 'bold' ,
        color : '#fff'
    }
})