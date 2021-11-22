import React from 'react'
import { Formik, Form} from "formik"
import * as Yup from "yup"
import FormikControl from './FormikControl'
function FormikContainer() {
    const listOfGrades = [
        { key:"List Of Grades", value:""},
        { key:"A", value:"70-100"},
        {key:"B", value:"60-69"},
        { key: "C", value: "50-59" },
        {key:"D", value:"45-49"},
        { key: "E", value: "40-44" },
        {key:"F", value:"0-35"}
    ]
    const radioOptions = [
        { key:"option 1", value:"radio 1"},
        {key:"option 2", value:"radio 2"},
        { key: "option 3", value: "radio 3 " }
       
    ]
    const checkBoxOptions = [
        { key:"option 1", value:"checked1"},
        {key:"option 2", value:"checked 2"},
        { key: "option 3", value: "checked 3 " },
       
    ]
    const initialValues = {
        email: "",
        text: "",
        selectOption: "",
        radioOptions: "",
        checkboxOption: [],
        date: null
    }
    const validationSchema = Yup.object({
        email: Yup.string().email("invalid Email").required("Required"),
        text: Yup.string().required("Required")
            // .matches(/^[0-9]+$/, "Must be only digits")
        .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field ")
        .min(5, 'Must be exactly 5 digits')
        .max(5, 'Must be exactly 5 digits'),
        
        selectOption: Yup.string().required("Required"),
        radioOptions: Yup.string().required("Required"),
        checkboxOption: Yup.array().min(1).required("Required"),
        date: Yup.date().required("Required").nullable()
    })
    const onSubmit = (values, onSubmitProps) => {
        console.log(values)
        console.log("sringify values:",JSON.parse(JSON.stringify(values)))
        // onSubmittingProps.setSubmitting(false)
    }
    
    return (
        <Formik
            validationSchema={validationSchema}
            onSubmit={ onSubmit }
            initialValues={initialValues}
            validateOnMount={ true }>
           
            {
                formikProps => {
                    return (
                        <Form >
                            <FormikControl name="email" label="Email" control="input" type="email" />
                            <FormikControl name="text" label="Comments" control="textarea" type="textarea" />
                            <FormikControl name="selectOption" label="Select Subject" control="select" options={listOfGrades} type="text"/>
                            <FormikControl name="radioOptions" label="Radio List" control="radio" options={radioOptions} type="text" />
                            <FormikControl name="checkboxOption" label="Checkbox List" control="checkbox" options={ checkBoxOptions} type="text"/>
                            {/* <button type='submit' disabled={ !formik.isValid  || formikisSubmitting}>Submit</button> */}
                            <FormikControl name="date" label="Choose A Date" control="date"/>
                            <button type='submit'>Submit</button>
                        </Form>
                    )
                }
            }
        </Formik>
    )
}

export default FormikContainer
