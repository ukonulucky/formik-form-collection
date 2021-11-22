import React from 'react'
import { Field, ErrorMessage } from "formik"
import TextError from './TextError'
function RadioButton(props) {
    const {label, name, options, ...rest } = props
    return (
        <div className="form-control">
            <label htmlFor={name}>{label}</label>
            <Field name={name} {...rest}>
                {
                    ({ field }) => {
                        return options.map(option => {
                            return (
                                <div key={option.value}  className="radioList">
                                <input id={option.value} type="radio"
                                    {...field} value={option.value}
                                        checked={field.value === option.value} />
                                    <label htmlFor={option.value}>{ option.key}</label>
                                    </div>
                            )
                        })
                    }
                }
            </Field>
            <ErrorMessage name={name} component={ TextError}/>
        </div>
    )
}

export default RadioButton
 