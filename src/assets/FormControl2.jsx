import React from 'react'
import RadioButton from '../Components/Practise/RadioButton'
import Email from './LoginForm/Email'
import PassWord from './LoginForm/PassWord'
import Input from "./Input"

function FormControl(props) {
    const { control, ...rest} = props
            switch (control) {
                case "email": return <Email {...rest} />
                    break;
                    case "password": return <PassWord {...rest} />
                    break;
                case "button": return <RadioButton  {...rest} />
                    break;
                    case "phoneNumber": return <Input  {...rest} />
                    break;
            
                default: return null
                    break;
            }
    
}

export default FormControl
