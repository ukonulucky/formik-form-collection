import React from 'react'
import Datepicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import { Field, ErrorMessage} from "formik"
function DatePicker(props) {
    const { label, name, ...rest} = props
    return (
        <div className="form-control">
            <label htmlFor={name}>{label}</label>
            <Field name={ name}>
                {
                    ({ form, field }) => {
                        const { setFieldValue } = form
                        const { value } = field
                        return <Datepicker id={name} {...field}
                             {...rest} selected={value}
                            onChange={ val => setFieldValue(name, val)}
                        />
                    }
                }
            </Field>
            <ErrorMessage name={name} component="text" />
        </div>
    )
}

export default DatePicker
