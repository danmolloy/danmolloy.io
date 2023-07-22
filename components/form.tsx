import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import React from 'react';
import { useState } from 'react';

export default function ContactForm() {
  const [sendStatus, setSendStatus] = useState<any>(null)
  const [recieved, setRecieved] = useState<any>(false)

  const sendFail = (<div><h2 className="text-2xl">Message failed to send.</h2> <p>Please try again or <a href='mailto:danmolloy91@gmail.com' className='text-blue-500'>send an email</a>.</p></div>)
  const sendSuccess = (<div><h2 className="text-2xl">Message recieved!</h2><p>I will get back to you as soon as possible.</p></div>)
  const sendingMsg = (<div><h2 className="text-2xl">Message sending...</h2></div>)

  /* const logKey = (e) => {
    if (e.keyCode === 13) {
      e.preventDefault();
    } 
  }

  useEffect(() => {
    window.addEventListener("keydown", logKey)
    return () => {
      window.removeEventListener("keydown",logKey)
    }
  }, [logKey]) */



  return (
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
          setRecieved(true)
          actions.setSubmitting(false)
          actions.resetForm()
        } else {
          setSendStatus(sendFail)
        }
        })
      }}> 
    {(props) => (
      <Form className=" flex flex-col">
        <h1 className='px-2'>Contact</h1>
        <div className=' px-2 py-4 flex flex-col '>
          <label htmlFor='name-input'>Name</label>
          <Field 
            id="name-input" 
            className="border border-zinc-400 rounded p-1 "
            type="text"
            name="name"/>
          <ErrorMessage name="name">
            { msg => <div className=" text-red-500 text-sm">{msg}</div> }
          </ErrorMessage>
          </div>
          <div className=' px-2 py-4 flex flex-col '>
          <label htmlFor='email-input' >Email</label>
          <Field
            id="email" 
            className="border border-zinc-400 rounded p-1  "
            type="email"
            name="email"/>
          <ErrorMessage name="email">
          { msg => <div className=" text-red-500 text-sm">{msg}</div> }
          </ErrorMessage>
          </div>
          <div className=' px-2 py-4 flex flex-col '>
          <label htmlFor='msg-text' >Message</label>
          <Field 
            multiline
            maxLength="500"
            rows="4"
            component="textarea"
            id="msg-text" 
            className="border border-zinc-400 rounded p-1"
 
            type="textarea"
            name="message"/>
          <ErrorMessage name="message">
            { msg => <div className=" text-red-500 text-sm">{msg}</div> }
          </ErrorMessage>
          <div className='h-5'>
            {props.values.message.length > 0 && <p className='self-start text-sm mx-2 opacity-40'>{`${props.values.message.length}/500`}</p>}
            </div>
          </div>
        <button id="submit-button" type='submit' className="border w-24 py-1 m-2 self-end rounded text-emerald-500 border-emerald-500 dark:hover:bg-zinc-800 shadow hover:bg-emerald-50">Submit</button>
        <div>
        {sendStatus}
      </div>
      </Form> )}
    </Formik>
  )
}