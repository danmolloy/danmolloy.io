import styles from '../styles/Home.module.css';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useEffect, useState } from 'react';
import Realistic from './realistic';

export default function ContactForm() {
  const [sendStatus, setSendStatus] = useState(null)
  const [recieved, setRecieved] = useState(false)

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
      <Form className="form">
        {recieved && <Realistic />}
          <label htmlFor='name-input' className={styles.formLabel}>Name</label>
          <Field 
            id="name-input" 
            className="form-input"
            type="text"
            name="name"/>
          <ErrorMessage name="name">
            { msg => <div className="form-error">{msg}</div> }
          </ErrorMessage>

          <label htmlFor='email-input' className={styles.formLabel}>Email</label>
          <Field
            id="email" 
            className="form-input" 
            type="email"
            name="email"/>
          <ErrorMessage name="email">
          { msg => <div className="form-error">{msg}</div> }
          </ErrorMessage>

          <label htmlFor='msg-text' className={styles.formLabel}>Message</label>
          <Field 
            multiline
            maxlength="500"
            rows="4"
            component="textarea"
            id="msg-text" 
            className="text-input" 
            type="textarea"
            name="message"/>
            {props.values.message.length > 0 && <p className='self-start text-sm mx-2 opacity-40'>{`${props.values.message.length}/500`}</p>}
          <ErrorMessage name="message">
            { msg => <div className="form-error">{msg}</div> }
          </ErrorMessage>
        <button id="submit-button" type='submit' className="submit-btn">Submit</button>
        <div>
        {sendStatus}
      </div>
      </Form> )}
    </Formik>
  )
}