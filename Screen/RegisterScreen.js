import React  from "react";
import { View,StyleSheet,Text, Alert, Button } from "react-native";
import {Formik} from 'formik';
import FormField from "../Component/FormFieldComponent";
import SignupSchema from '../Component/Validate';
const Register = ()=>{
    function onSubmitHandler(values){
        Alert.alert(
            "Register Successfully !!",
            "Data : " + JSON.stringify(values),
        );
    }
    function isFormValid(isValid, touched) {
        return isValid && Object.keys(touched).length > 0;
    }
    return (
        <View style = {styles.Container}>
            <Formik
                initialValues = {
                    {
                        email : '',
                        Password : '',
                        FirstName : '',
                        LastName : '',
                        ConFirmPassword : '',
                    }
                }
                validationSchema = {SignupSchema}
                onSubmit = {onSubmitHandler}
            >{({ handleChange, handleBlur, handleSubmit, values, errors, touched, isValid })=>(
                <>
                    <View style = {styles.FormFieldContainer}>
                        {/* FirstName */}
                        <FormField
                            lable = 'First Name'
                            Field = 'FirstName' 
                            handleBlur = {handleBlur} 
                            handleChange = {handleChange} 
                            values = {values}
                            errors = {errors}
                            touched = {touched}
                            secureTextEntry = {false}
                        />
                        {/* LastName */}
                        <FormField
                            lable = 'Last Name'
                            values = {values}
                            Field  = 'LastName'
                            handleChange = {handleChange}
                            handleBlur = {handleBlur}
                            errors = {errors}
                            touched = {touched}
                            secureTextEntry = {false}
                        />
                        {/* Email */}
                        <FormField
                            lable = 'Email Address'
                            values = {values}
                            Field  = 'email'
                            handleChange = {handleChange}
                            handleBlur = {handleBlur}
                            errors = {errors}
                            touched = {touched}
                            secureTextEntry = {false}
                        />
                        {/* Password */}
                        <FormField
                            lable = 'Password'
                            values = {values}
                            Field  = 'Password'
                            handleChange = {handleChange}
                            handleBlur = {handleBlur}
                            errors = {errors}
                            touched = {touched}
                            secureTextEntry = {true}
                        />
                        {/* Confirm Password */}
                        <FormField
                            lable = 'Confirm Password'
                            values = {values}
                            Field  = 'ConFirmPassword'
                            handleChange = {handleChange}
                            handleBlur = {handleBlur}
                            errors = {errors}
                            touched = {touched}
                            secureTextEntry = {true}
                        />
                    </View>
                    <View style = {styles.Button}>
                        <Button
                            title = 'Submit' 
                            color="#4da5e9"
                            borderRadius = {10}
                            onPress = {handleSubmit}
                            disabled = {!isFormValid(isValid,touched)}
                        >
                        </Button>
                    </View>
                </>
                )
             }
            </Formik>
        </View>
    )
}
export default Register;
const Color = '#1e88e5';
const BGColor_Opacity =  '#D7E9F7';
const styles = StyleSheet.create({
    Container :{
        flex :1
    },
    FormFieldContainer : {
        paddingHorizontal  :10
    },
    Button : {
        position : 'absolute',
        bottom : 10,
        width : '100%',
        minHeight : 30
    }
})