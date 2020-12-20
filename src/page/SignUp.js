import { ErrorMessage, Field, Form, Formik, useFormik } from 'formik';
import React, { useState } from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import firebase from '../config/firebase';
import * as Yup from 'yup';

export default function SignUp() {
  const history = useHistory();

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      //adding new user
      onSubmit={(value, formikBag) => {
        firebase
          .auth()
          .createUserWithEmailAndPassword(value.email, value.password)
          .then(res => {
            history.replace('/');
          })
          .catch(e => {
            formikBag.setFieldError('email', e.message);
          });
      }}
      validationSchema={Yup.object({
        email: Yup.string().required('Email is required').email(),
        password: Yup.string().required('Password is required').min(6),
      })}
    >
      <div className='flex h-screen lg bg-gradient-to-r from-red-100 via-red-200 to-red-100'>
        <div className='m-auto w-1/3 text-white flex flex-wrap justify-center shadow-lg rounded-3xl bg-gradient-to-r from-red-300 via-red-400 to-red-300'>
          <Form className='m-5 w-10/12'>
            <h1 className='w-full text-4xl tracking-widest text-center my-6 '>
              Sign Up Here
            </h1>
            <div className='w-full my-6'>
              <Field
                name='email'
                type='email'
                className='p-2 rounded shadow w-full text-black'
                placeholder='Email or Username'
              />

              <ErrorMessage name='email' />
            </div>
            <div className='w-full my-6'>
              <Field
                name='password'
                type='password'
                className='p-2 rounded shadow w-full text-black'
                placeholder='Password'
              />

              <ErrorMessage name='password' />
            </div>
            <div className='w-full my-10'>
              <button
                type='submit'
                className='p-2 rounded shadow w-full bg-gradient-to-r from-gray-700 to-red-400 hover:from-pink-500 hover:to-yellow-500  text-white'
              >
                {/* {isLoading ? (
                <i className='fas fa-circle-notch fa-spin'></i>
              ) : ( */}
                Sign Up
                {/* )} */}
              </button>
            </div>
          </Form>
        </div>
      </div>
    </Formik>
  );
}
