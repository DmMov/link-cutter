// * Helpers
import { isEmpty } from '../helpers/isEmpty.helper';

export const required = value => {
  switch (typeof(value)) {
    case 'string':
      return value !== '';
    case 'boolean':
      return value === true;
    case 'number':
      return value > 0;
    case 'object':
      return !!value && !isEmpty(value);
  }

  return false;
}