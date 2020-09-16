import React from 'react';
import classnames from 'classnames';
import { arrayOf, func, string, array } from 'prop-types';

// * Components
import { Field } from '../Field/Field';
import { Spinner } from '../Spinner/Spinner';

// * Sass
import './Form.scss';

export const Form = ({ onSubmit, classes, title, buttonText = 'submit', fields, spin }) =>
  <form onSubmit={onSubmit} className={classnames('form', classes)}>
    {spin && <Spinner />}
    {title && <h2 className="form__title">{title}</h2>}
    {
      fields.map(
        ({component: Component, ...field}) =>
          Component ? <Component key={field.name} {...field} /> : <Field key={field.name} {...field} />
      )
    }
    <button
      type="submit"
      className={
        classnames('btn', 'form__submitBtn', ...classes.map(cl => `${cl}__submitBtn`))
      }
    >
      {buttonText}
    </button>
  </form>;

Form.propTypes = {
  classes: arrayOf(string),
  onSubmit: func.isRequired,
  title: string,
  buttonText: string,
  fields: array,
};