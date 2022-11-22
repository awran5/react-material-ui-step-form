import { ValidationSchema } from './Context'

export const initialValues: ValidationSchema = {
  firstName: {
    value: '',
    error: '',
    required: true,
    validate: 'text',
    minLength: 2,
    maxLength: 20,
    helperText: 'Custom error message'
  },
  lastName: {
    value: '',
    error: '',
    required: true,
    validate: 'text',
    minLength: 2,
    maxLength: 20
  },
  email: {
    value: '',
    error: '',
    validate: 'email'
  },
  gender: {
    value: '',
    error: '',
    validate: 'select'
  },
  date: {
    value: '',
    error: ''
  },
  city: {
    value: '',
    error: '',
    validate: 'text',
    minLength: 3,
    maxLength: 20
  },
  agreenemt: {
    value: false,
    error: '',
    required: true,
    validate: 'checkbox',
    helperText: 'Please accept our terms and conditions'
  },
  phone: {
    value: '',
    error: '',
    validate: 'phone',
    maxLength: 15
  }
}
