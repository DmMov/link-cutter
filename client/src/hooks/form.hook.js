import { useState, useEffect } from 'react';

export const useForm = (initialState, initialFields) =>  {
  const [form, setForm] = useState(initialState);

  let initialErrors = {};

  for (const key in initialState) {
    initialErrors[key] = '';
  }

  const [errors, setErrors] = useState(initialErrors);

  useEffect(() => () => {
    reset();
  }, []);

  const onChange = ({ target: { value, name, checked, type, files } }) => {
    const typedValue = type === 'checkbox' ? checked : type === 'file' ? files[0] : value;
    setForm(form => ({
      ...form,
      [name]: typedValue
    }));
    setErrors(errors => ({
      ...errors,
      [name]: ''
    }));
  };

  const reset = () => {
    setForm(initialState);
    setErrors(initialErrors);
  }

  const validate = (fieldsValidationSet, formValidators = null) => {
    let validationResults = [];

    for (const key in fieldsValidationSet) {
      for (const valitationItem of fieldsValidationSet[key]) {
        const [validator, message] = valitationItem;
        const validationResult = validator(form[key]);

        if (!validationResult)
          setErrors(errors => ({
            ...errors,
            [key]: !!errors[key] ? errors[key] : message
          }));

        validationResults = [
          ...validationResults,
          validationResult
        ];
      }
    }

    if(!!formValidators)
      validationResults = [...validationResults, ...formValidators.map(formValidator => formValidator(form, setErrors))];

    return validationResults.find(value => value == false) != false && true;
  };

  const buildFields = () => initialFields.map(
    field => ({
      ...field,
      value: form[field.name],
      error: errors[field.name],
      onChange
    })
  );

  return { form, fields: buildFields(), onChange, reset, validate, setErrors };
}