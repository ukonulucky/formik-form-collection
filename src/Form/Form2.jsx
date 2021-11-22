import React from 'react'
import { Formik, Form, Field, ErrorMessage, FieldArray} from "formik"
import * as Yup from "yup"
const initialValues = {
    name: "",
    email: "",
    channel: "",
    comments: "",
    social: {
        facebook: "",
        twitter:""
    },
    phonenumber: ["", ""],
    phNumbers:[""]
}
const onSubmit = (values, onsubmittingprops) => {
    onsubmittingprops.setSubmitting(false)
     onsubmittingprops.resetForm()
}

const validationSchema = Yup.object({
    name: Yup.string().required("name required"),
    email: Yup.string().email("invalid email").required("Email Required"),
    channel: Yup.string().required("Required"),
    comments: Yup.string().required("Required")
})

function Form2() {

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
            validateOnMount={ true }
        >
            {
                formikProps => {
                    console.log("formikProps:", formikProps)
                    
                    return (

            <Form action="">
            <div className="form-control">
            <label htmlFor="name">Name</label>
                <Field type="text" id="name" name="name" />
                <ErrorMessage name='name' />
          </div>
            <div className="form-control">
                <label htmlFor="email">Email</label>
                <Field type="email" id="email" name="email" />
                <ErrorMessage name="email"/>
            </div>
        
            <div className="form-control">
            <label htmlFor="channel">Channel</label>
                <Field type="text" id="channel" name="channel" />
                <ErrorMessage name="channel" />
            </div>
            <div className="form-control">
            <label htmlFor="comments">Comments</label>
                <Field as="textarea" type="text" id="comments" name="comments" />
                <ErrorMessage name="comments" />
            </div>
            <div className="form-control">
            <label htmlFor="comments">Facebook</label>
                <Field as="input" type="text" id="facebook" name="social.facebook" />
                <ErrorMessage name="facebook" />
            </div>
            <div className="form-control">
            <label htmlFor="twitter">Twitter</label>
                <Field as="input" type="text" id="twitter" name="social.twitter" />
                <ErrorMessage name="twitter" />
            </div>
            <div className="form-control">
            <label htmlFor="primary number">Primary Number</label>
                <Field as="input" type="text" id="primary number" name="phonenumber[0]" />
                <ErrorMessage name="twitter" />
            </div>
            <div className="form-control">
            <label htmlFor="secondary number">Secondary Number</label>
                <Field as="input" type="text" id="secondary phonenumber" name="phonenumber[1]" />
                <ErrorMessage name="secondary number" />
            </div>
            <FieldArray name="phNumbers">
                {
                    (props) => {
                        const { remove, push, form } = props
                        const { values } = form
                        const { phNumbers } = values
                        return (
                            <div>
                                 {
                                phNumbers.map((item, index) => {
                                    return (
                                        <div key={index} className="form-control">
                                            <Field type="text"  name={`phNumbers[${index}]`} />
                                        <button type="button" onClick={ () => index > 0 && remove(index)}> - </button>
                                        <button type="button" onClick={ () =>  phNumbers[index] !== "" && phNumbers[index+1] !== "" && push("")}> + </button>
                                        </div>
                                        )
                                })
                            } 
                                
                                
                           </div>
                        )
                    }
                }
            </FieldArray>
         <button type="submit" disabled={ !formikProps.isValid || formikProps.isSubmitting }>Submit</button>
         <button type="reset">Reset</button>
        </Form>
   
                    )
                }
          }
           </Formik>
    )
}

export default Form2
