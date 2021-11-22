import React from 'react'
import * as Yup from "yup"
import { Formik, Form} from "formik"
import FormControl from './FormControl2'
import "../assets/formStyles.css"
function Login() {
    const initialValues = {
        email: "",
        password:""
    }
  const validationSchema = Yup.object({
        email: Yup.string().email("invalid Email Format").required("Required"),
        password: Yup.string().required("Required").min(5)
  })
    const onSubmit = (values) => {
        console.log(values)
    }

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={ onSubmit}
        >
            {
                formikProps => {
                    return (
                        <Form>
                        <FormControl name="email" control="email" label="Email" />
                        <FormControl name="password"  control="password" label="Password" />
                        <button type="submit" className="button">Submit</button> 
                        </Form>
                    )
                }
           }
            
        </Formik>
    )
}

export default Login
