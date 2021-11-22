import React from 'react'
import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from "yup"


export default function Form3() {
  const  initialValues = {
        name: "",
        email: "",
        channel: "",
        comments: ""
  };
   
    const onSubmit = values => console.log(values)
    const validationSchema = Yup.object({
        name: Yup.string().required("Required"),
        email: Yup.string().email("Invalid Email").required("Required"),
        channel: Yup.string().required("Required"),
        comments: Yup.string().required("Required")
    })
    return (
        <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}>
            validateOnMount
            <Form action="">
                <div className="form">
                <label htmlFor="name">Name</label>
                    <Field type="text" name="name" placeholder="Please input your Name."  />
                    <ErrorMessage name="name"
                    component="text"/>
                </div>
                <div className="form">
                <label htmlFor="email">Email</label>
                    <Field type="email" name="email" id="email" placeholder="Please input your Email." />
                    <ErrorMessage name="email" component="text" />
                </div>
                <div className="form">
                <label htmlFor="channel">Channel</label>
                    <Field type="text" name="channel" id="channel" placeholder="Please input a Channel." />
                    <ErrorMessage name="channel" component="text" />
                </div>
                <div className="form">
                <label htmlFor="comments">Comments</label>
                    <Field className="comment" as="textarea" type="text" name="comments" id="comments" placeholder="Please input your Comment." />
                    <ErrorMessage name="comments" component="text" />
                </div>
                <button type="submit">Submit</button>
            </Form>
        </Formik>
    )
}
