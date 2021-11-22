import React from 'react'
import {Field, ErrorMessage} from "formik"

function Input(props) {
    const {type, label, name, ...rest} = props
    return (
        <div className="form-control">
            <label htmlFor={name}>{label}</label>
            <Field name={name} type={type} {...rest} />
            <ErrorMessage name={ name} component="text" />
        </div>
    )
}

export default Input
