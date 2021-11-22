import React from 'react'
import { Field, ErrorMessage} from "formik"

function Select(props) {
    const { label,options, name, ...rest} = props 
    return (
        <div className="form-control">
            <label htmlFor={name}>{label}</label>
            <Field as="select" name={name} id={name} {...rest} className="commentTwo">
                {
                    options.map(option => {
                        return (
                            <option key={option.key} value = { option.value }>
                                {option.key}
                            </option>
                        )
                    })
                }
            </Field>
            <ErrorMessage name={ name } component="text" />
            
        </div>
    )
}

export default Select
