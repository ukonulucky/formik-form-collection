import React from 'react'
import { Field, ErrorMessage } from "formik"
import TextError from '../TextError'
function Email(props) {
    const { label, name, ...rest} = props
    return (
        <div className="form-control2">
            <label htmlFor={name} className="label">{label}</label>
            <Field name={name} id={name} className="field" type="email" />
            <ErrorMessage name={name} component={ TextError }/>
        </div>
    )
}

export default Email
