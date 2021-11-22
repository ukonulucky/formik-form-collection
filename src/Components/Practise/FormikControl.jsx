import React from 'react'
import Input from "./Input"
import Textarea from './Textarea'
import Select from './Select'
import RadioButton from './RadioButton'
import CheckBoxGroup from './CheckBoxGroup'
import DatePicker from './DatePicker'

function FormikControl(props) {
    const { control, ...rest } = props
    switch (control) {
        case "textarea": return <Textarea {...props}/>
            break;
        case "input": return <Input {...rest}/>
            
            break;
        case "select": return <Select {...rest} />
            
            break;
        case "radio": return <RadioButton  {...rest}/>
            
            break;
        case "checkbox": return <CheckBoxGroup {...rest} />
            
            break;
        case "date": return <DatePicker {...rest} />
            
            break;
    
        default: return null
            break;
    }
}

export default FormikControl
