import IndexSection from "./indexDiv";
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from "next/image";
import IndexDiv from "./indexDiv";

export default function ContactSection() {
  const [sendStatus, setSendStatus] = useState(null)

  const sendFail: any = (<div><h2 className="text-2xl">Message failed to send.</h2> <p>Please <a href='mailto:fiokelly@gmail.com' className='text-blue-500'>send an email</a>.</p></div>)

  const sendSuccess: any = (<div><h2 className="text-2xl">Message recieved!</h2><p>I will get back to you as soon as possible.</p></div>)

  const sendingMsg: any = (<div><h2 className="text-2xl">Message sending...</h2></div>)

  return (
    <IndexDiv title="Contact" name="contact">
      <div className="flex flex-row w-full justify-between  h-[30rem]">
    <Formik    
    initialValues={{
      name: '',
      email: '',
      message: '',
    }}
    validationSchema={Yup.object({
      name: Yup.string()
        .max(30, 'Must be 30 characters or less')
        .required('Required'),
      email: Yup.string()
        .email('Invalid email address')
        .required('Required'),
      message: Yup.string()
        .max(500, 'Must be 200 characters or less')
        .required('Required')
    })}
    onSubmit={async (values, actions ) => {
      console.log('Sending')
      setSendStatus(sendingMsg)
      await new Promise(resolve => setTimeout(resolve, 1000))
        
      fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(values)
      }).then((res) => {
        console.log('Response received')

        if (res.status === 200) {
          setSendStatus(sendSuccess)
          actions.setSubmitting(false)
          actions.resetForm()
        } else {
          setSendStatus(sendFail)
        }
        })
      }}> 
      {(props) => (
      <Form className="font-sans flex flex-col w-screen lg:w-1/2 ">

          <div className="flex flex-col m-2">
          <label htmlFor='name-input' className="form-label">Name</label>
          <Field 
            id="name-input" 
            className="text-black border border-zinc-400 rounded-md w-full p-1"
            type="text"
            name="name"/>
            <div className="h-6">
          <ErrorMessage name="name">
            { msg => <div className="text-sm text-red-500 h-6">{msg}</div> }
          </ErrorMessage>
          </div>
          </div>
          <div className="flex flex-col m-2">
          <label htmlFor='email-input' className="form-label">Email</label>
          <Field
            id="email" 
            className="text-black border border-zinc-400 rounded-md w-full p-1" 
            type="email"
            name="email"/>
            <div className="h-6">
          <ErrorMessage name="email" >
          { msg => <div className="text-sm text-red-500 h-6">{msg}</div> }
          </ErrorMessage>
          </div>
          </div>
          <div className="flex flex-col m-2 mb-0">
          <label htmlFor='msg-text' className="form-label">Message</label>
          <Field 
          multiline="6"
          maxLength="500"
          rows="4"
          component="textarea"
            id="msg-text" 
            className=" text-black border border-zinc-400 rounded-md w-full p-1"
            type="textarea"
            name="message"/>
            <div className="h-6">
            {props.values.message.length > 0 && <p className='self-center text-sm mx-2 opacity-40'>{`${props.values.message.length}/500`}</p>}

          <ErrorMessage name="message">
            { msg => <div className="text-sm text-red-500">{msg}</div> }
          </ErrorMessage>
          </div>
          </div>
        <button id="submit-button" type='submit' className="hover:bg-blue-50 border shadow-sm border-blue-500 text-blue-500 m-2 p-1 w-24 rounded self-end">Submit</button>
        <div>
        {sendStatus}
      </div>
      </Form> )}
    </Formik>
    <div className="hidden lg:flex mx-12">
{/*       <Image alt="Fiona profile photo with flute" src={"/images/fiona-profile.jpg"} width="325" height="425" />
 */}    </div>
    </div>
    </IndexDiv>
  )
}