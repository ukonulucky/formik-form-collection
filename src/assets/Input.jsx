import React from 'react'
import {Field, ErrorMessage} from "formik"
import TextError from './TextError'
function Input(props) {
    const {type, label, name, ...rest} = props
    return (
        <div className="form-control2">
            <label htmlFor={name} className="label">{label}</label>
            <Field name={name} type={type} {...rest} className="field" />
            <ErrorMessage name={name} component={ TextError} />
        </div>
    )
}

export default Input
