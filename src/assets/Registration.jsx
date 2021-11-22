import React from 'react'
import { Form, Formik} from "formik"
import * as Yup from "yup"
import "../assets/formStyles.css"
import FormControl from './FormControl2'

function Registration() {
    const modeOfContact = [{ key: "Email", value: "e  mailmoc" },
    { key: "Telephone", value: "telephonemoc" }]
    const initialValues = {
        email: "",
        password: "",
        confirmPassWord: "",
        modeOfContact:"",
        phoneNumber: ""
        
    }
    const validationSchema = Yup.object({
        email: Yup.string().email("Invalid Email Format").required("Required"),
        password: Yup.string().required("Required").min(5),
        confirmPassWord: Yup.string().oneOf([Yup.ref("password"), ""], "Password Must Match").required("Required"),
        modeOfContact: Yup.string().required("Required"),
        phoneNumber: Yup.string().when("modeOfContact", {
            is: "telephonemoc",
            then: Yup.string().required("Required")
        })

    }) 
    const onSubmit = values => {
        console.log("Form data",values)
    }
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
            >
            {
                (formikProps) => {
                    return (
                        <Form> 
                        <FormControl name="email" label="Email" control="email" />
                        <FormControl name="password" label="Pass Word" control="password" type="password" />
                        <FormControl name="confirmPassWord" label="Confirm PassWord" control="password" />
                        <FormControl name="modeOfContact" label="Select Button" control="button" options={modeOfContact} />
                        <FormControl name="phoneNumber" label="Phone Number" control="phoneNumber" type="text" />
                        <button type="submit" className="button">Submit</button>
                        </Form>
                    )
                }
            }
        </Formik>
    )
}

export default Registration
