import React from 'react'
import { useFormik } from "formik"
import * as Yup from "yup"
const initialValues = {
    name: "",
    email: "",
    channel: ""
};
const onSubmit = values => console.log(values);
// const validate = values => {
//    const errors = {}
//     if (!values.name) {
//         errors.name = "Required"
//     }
//     if (!values.email) {
//         errors.email = "Required"
//     }
//     if (!values.channel) {
//         errors.channel = "Required"
//     }
//     return errors
// }
const validationSchema = Yup.object({
    name: Yup.string().required("name required"),
    email: Yup.string().email("invalid email").required("Email Required"),
    channel: Yup.string().required("Required")
})

function Form1() {
    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema
    })
console.log(formik.values, formik.errors, formik.touched)
    return (
        <div>
            <form action="" onSubmit={ formik.handleSubmit}>
                <div className="form-control">
                <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" onChange={formik.handleChange} value={formik.values.name} onBlur={ formik.handleBlur}/>
                    {formik.errors.name && formik.touched.name ? <div className="error">{ formik.errors.name}</div> : null}
              </div>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" onChange={formik.handleChange} value={formik.values.email} onBlur={ formik.handleBlur}/>
                    {formik.errors.email && formik.touched.email && <div className="error">{ formik.errors.email}</div> }
                </div>
            
                <div className="form-control">
                <label htmlFor="channel">Channel</label>
                    <input type="text" id="channel" name="channel" onChange={formik.handleChange} value={formik.values.channel} onBlur={ formik.handleBlur}/>
                    {formik.errors.channel && formik.touched.channel ? <div className="error">{ formik.errors.channel}</div> : null}
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Form1
