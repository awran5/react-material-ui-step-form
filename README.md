# React Material-UI Step Form

React Material UI multi step form with basic form `onChange` validation logic. inspired by [Traversy Media](https://www.youtube.com/watch?v=zT62eVxShsY) tutorial and using Material-ui [checkout](https://material-ui.com/getting-started/templates/checkout/) free template.

<hr />

![screenshot](./screenshot.gif)

### Instructions

- Download or clone the repo:

```sh
git clone https://github.com/awran5/react-material-ui-step-form.git
```

### Dependencies

- [Material-UI](https://material-ui.com/) v4.11.0 or higher
- React version supports [Hooks](https://reactjs.org/docs/hooks-intro.html)

### Changelog - 07/2021

- Converted to Typescript
- Update dependencies
- Added: React Context provides to manage Components state
- Added: Option to change all fields `variant` and `margin` that applied to [TextField](https://material-ui.com/api/text-field/)

```jsx
/**
 * src/Context.tsx
 *
 * Variant: `filled` | `outlined` | `standard`
 * Margin: `dense` | `none` | `normal`
 */
const variant = 'standard'
const margin = 'normal'
```

- Added: eslint with [airbnb](https://www.npmjs.com/package/eslint-config-airbnb) style
- Added: [Checkbox](https://material-ui.com/components/checkboxes/) field
- Added: `Required` field logic
- Imporved: Validation logic, now you can control all validaton logic inside `src/initialValues.tsx` file

### Example

```tsx
// src/initialValues.tsx
const initialValues: ValidationSchema = {
  yourFieldname: {
    value: '',                          // will be filled with field value
    error: '',                          // will be filled with error message
    required: true,                     // if `false` field will be still validated but will not enable the `next` button
    validate: 'text',                   // field validation logic (see types below)
    minLength: 2,                       // validate min length
    maxLength: 20,                      // validate max length
    helperText: 'custom error message'  // change the default error message (applied to `validate` methods only)
  },
  {
    // another field
  }
}
```

### Available properties

```tsx
type ValidationSchema = Record<
  string, // field name
  {
    value?: any
    error?: string
    required?: boolean
    validate?: 'text' | 'number' | 'email' | 'phone' | 'zip' | 'checkbox' | 'select'
    minLength?: number
    maxLength?: number
    helperText?: string
  }
>
```

### Changelog - 10/2020

- Update dependencies
- Imporved validation method
- Fixed some bugs
- cleaning up unnecessary code

### [Demo](https://react-material-ui-step-form.vercel.app/)

### [codeSandbox](https://codesandbox.io/s/react-material-ui-step-form-ui788)
