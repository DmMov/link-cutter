import { required } from '../../validators/required.validator';
import { minLength } from '../../validators/minLength.validator';

export default ({
  state: {
    link: ''
  },
  fields: [
    {
      name: 'link',
      label: 'link',
      placeholder: 'Paste a link to cut...'
    }
  ],
  fieldsValidationSet: {
    link: [
      [required, 'link is required.'],
      [minLength(12), 'link must contain at least 12 characters.']
    ]
  }
});