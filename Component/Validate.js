import React from "react";
import * as Yup from 'yup'

export default SignupSchema = Yup.object().shape(
    {
         FirstName: Yup.string()
                    .min(3, 'Ít nhất 3 ký tự!')
                    .max(10, 'Không được vượt quá 10 ký tự !')
                    .required('Vui lòng nhập thông tin'),
        LastName : Yup.string()
                   .min(3, 'Ít nhất 3 ký tự!')
                   .max(10, 'Không được vượt quá 10 ký tự !')
                   .required('Vui lòng nhập thông tin'),
        email : Yup.string()
                   .email("Nhập sai định dạng email !!")
                   .required("Vui lòng nhập thông tin"),
        Password : Yup.string()
                   .min(6, 'Mật khẩu phải lớn hơn 6 kí tự')
                   .max(20, 'Mật khẩu phải nhỏ hơn 20 kí tự')
                   .required('Vui lòng nhập mật khẩu'),
        ConFirmPassword : Yup.string()
                        .when("Password", {
                                is: val => (val && val.length > 0 ? true : false),
                                then: Yup.string()
                                    .oneOf([Yup.ref('Password')],"Mật khẩu nhập lại phải trùng khớp !")})
                                    .required('Vui lòng nhập mật khẩu xác nhận !') 

    }
) 
