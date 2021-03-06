import React, { useContext } from 'react';
import { Form } from '../Form/Form';
import { fieldsValidationSet } from './fieldsValidationSet';
import { initialFields } from './initialFields';
import { initialState } from './initialState';
import { useHttp } from '../../hooks/http.hook';
import { useForm } from '../../hooks/form.hook';
import { AuthContext } from '../../context/AuthContext';

import './LoginForm.scss';

export const LoginForm = () => {
  const auth = useContext(AuthContext);
  const { loading, request } = useHttp();
  const { form, fields, validate } = useForm(initialState, initialFields);

  const onSubmit = async e => {
    e.preventDefault();

    const isValid = validate(fieldsValidationSet);

    if (isValid) {
      try {
        const data = await request('http://localhost:5000/api/auth/login', 'post', form);
        console.log('data:', data);
        auth.login(data.token, data.userId);
      } catch (error) { }
    }
  };

  return <Form
    title="login"
    spin={loading}
    classes={['loginForm']}
    onSubmit={onSubmit}
    buttonText="login"
    fields={fields}
  />;
}
