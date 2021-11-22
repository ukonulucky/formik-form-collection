import React from 'react'
import { Field, ErroMeassage, ErrorMessage} from "formik"
import TextError from '../TextError'
function PassWord(props) {
    const { name, label, ...rest} = props
    return (
        <div className="form-control2">
            <label htmlFor={name} className="label">{label}</label>
            <Field type="password" className="field" name={name} id={name} {...rest} />
            <ErrorMessage name={name} className="error" component={ TextError} />
        </div>
    )
}

export default PassWord
