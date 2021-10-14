import React from "react";
import { View,Text,StyleSheet } from "react-native";
import { TextInput } from "react-native-gesture-handler";

export default function  FormField({
                        lable,
                        values,
                        Field,
                        handleBlur,
                        handleChange,
                        secureTextEntry,
                        touched,
                        errors
}) {
    return(
        <View style = {styles.Input}>
            <Text style = {styles.TextLabel}>{lable}</Text>
            <TextInput style = {styles.InputField}
                onChangeText={handleChange(Field)}
                onBlur={handleBlur(Field)}
                value ={values[Field]}
                secureTextEntry = {secureTextEntry} 
            />
            {
                (errors[Field] && touched[Field]) ? (<Text style = {{color : 'red'}}>{errors[Field]}</Text> ): null   
            }
        </View>
    )
}
const styles = StyleSheet.create({
    Input : {
        flexDirection  : 'column',

    },
    TextLabel : {
        color : 'black',
        fontSize : 17,
        marginVertical : 10
    },
    InputField : {
        height : 50,
        borderWidth : 1,
        borderColor  : '#949494',
        padding  : 10
    },

})