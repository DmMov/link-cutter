import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { Form } from '../Form/Form';
import initial from './initial';
import { useHttp } from '../../hooks/http.hook';
import { useForm } from '../../hooks/form.hook';
import { AuthContext } from '../../context/AuthContext';

import './CreateLinkForm.scss';

export const CreateLinkForm = () => {
  const { push } = useHistory();
  const auth = useContext(AuthContext);
  const { loading, request } = useHttp();
  const { form, fields, validate, reset } = useForm(initial.state, initial.fields);

  const onSubmit = async e => {
    e.preventDefault();

    const isValid = validate(initial.fieldsValidationSet);

    if (isValid) {
      try {
        const data = await request(
          'http://localhost:5000/api/link/generate',
          'post',
          { from: form.link },
          { Authorization: `Bearer ${auth.token}`}
        );
        reset();
        push(`/detail/${data.link._id}`)
      } catch (error) { }
    }
  };

  return <Form
    title="create link"
    spin={loading}
    classes={['createLinkForm']}
    onSubmit={onSubmit}
    fields={fields}
  />;
}
