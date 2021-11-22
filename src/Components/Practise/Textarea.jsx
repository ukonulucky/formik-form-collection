import React from 'react'
import { Field, ErrorMessage} from "formik"
function Textarea(props) {
    const { label,control, name, type, ...rest} = props
    return (
        <div className="form-control">
            <label htmlFor={name}>{label}</label>
            <Field name={name} id={name} type={type} as="textarea" className="textarea" rows="10" cols="40"/>
            <ErrorMessage name={ name } component="text"/>
        </div>
    )
}

export default Textarea
