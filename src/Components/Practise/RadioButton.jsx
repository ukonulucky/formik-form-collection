import React from 'react'
import { Field, ErrorMessage} from "formik"  
function RadioButton(props) {
    const {label, name, options, ...rest } = props
    return (
        <div className="form-control3">
            <label htmlFor={name} className="label">{label}</label>
            <div className="form-control4">
            <Field name={name} {...rest}  className="form-control4">
                {
                    ({ field }) => {
                        return options.map(option => {
                            return (
                                <div key={option.value} className="buttonElement" >
                                <input id={option.value} type="radio" className="buttonLogo"
                                    {...field} value={option.value}
                                        checked={field.value === option.value} />
                                    <label htmlFor={option.value}>{ option.key}</label>
                                    </div>
                            )
                        })
                    }
                }
            </Field>
            </div>
            <ErrorMessage name={name} component="text"/>
        </div>
    )
}

export default RadioButton
 