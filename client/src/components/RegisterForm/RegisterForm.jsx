import React from 'react';
import { Form } from '../Form/Form';
import { fieldsValidationSet } from './fieldsValidationSet';
import { initialFields } from './initialFields';
import { initialState } from './initialState';
import { useHttp } from '../../hooks/http.hook';
import { useForm } from '../../hooks/form.hook';

import './RegisterForm.scss';

export const RegisterForm = () => {
  const { loading, request } = useHttp();
  const { form, fields, validate } = useForm(initialState, initialFields);

  const onSubmit = async e => {
    e.preventDefault();

    const isValid = validate(fieldsValidationSet);

    if (isValid) {
      try {
        const data = await request('http://localhost:5000/api/auth/register', 'post', form);
        console.log('data', data);
      } catch (error) { }
    }
  };

  return <Form
    title="register"
    spin={loading}
    classes={['registerForm']}
    onSubmit={onSubmit}
    buttonText="register"
    fields={fields}
  />;
}