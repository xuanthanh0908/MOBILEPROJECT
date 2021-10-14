import React,{Component} from "react";
import { Text,View,StyleSheet } from "react-native";
import { FontAwesome } from '@expo/vector-icons';
import { TouchableOpacity } from "react-native-gesture-handler";
import { connect } from 'react-redux';

const Header = (props) => (
    <View style={styles.headerContainer}>
      {/*  */}
      <View style={styles.cartContainer}>
        <View style={styles.cartIcon} />
      </View>
      {/*  */}
      <Text style={styles.headerText}>{props.title}</Text>
      {/*  */}
      <View style={styles.cartContainer}>
        <TouchableOpacity onPress = {props.onPress}>
          <FontAwesome name="shopping-cart" size={HEADER_ICON_SIZE} color="#fff" />
        </TouchableOpacity>
        <View style = {{position : 'absolute',height : 20,width : 20, borderRadius : 10, backgroundColor : 'red',right : 10, top : -7}}>
            <Text style={{ color: 'white', fontWeight: 'bold',textAlign : 'center' }}>{props.cartItems.length}</Text>
        </View>
      </View>
    </View>
  );
  const mapStateToProps = (state) => {
    return {
        cartItems: state
    }
}
  export default connect(mapStateToProps)(Header);
  
  const HEADER_ICON_SIZE = 24;
  
  const styles = StyleSheet.create({
    screenContainer: {
      flex: 1,
    },
    headerContainer: {
      flexDirection: 'row',
      paddingTop: 50,
      backgroundColor: '#1e88e5',
      justifyContent: 'space-between',
      paddingBottom: 12,
    },
    cartContainer: {
      paddingHorizontal: 20,
      alignItems: 'center',
      justifyContent: 'center',
    },
    cartIcon: {
      width: HEADER_ICON_SIZE,
    },
    headerText: {
      color: '#fff',
      fontSize: 20,
      fontWeight: '500',
    },
  });