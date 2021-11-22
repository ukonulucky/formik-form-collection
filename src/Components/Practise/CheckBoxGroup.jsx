import React from 'react'
import { Field, ErrorMessage} from "formik"  
function CheckBoxGroup(props) {
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
                                <input id={option.value} type="checkbox"
                                    {...field} value={option.value}
                                        checked={field.value.includes(option.value)} />
                                    <label htmlFor={option.value}>{ option.key}</label>
                                    </div>
                            )
                        })
                    }
                }
            </Field>
            <ErrorMessage name={ name } component="text"/>
        </div>
    )
}

export default CheckBoxGroup
 