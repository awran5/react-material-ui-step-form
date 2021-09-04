import React, { useCallback, useContext } from 'react'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormHelperText from '@material-ui/core/FormHelperText'
import Checkbox from '@material-ui/core/Checkbox'
import { AppContext } from '../Context'

export default function SecondStep() {
  const { formValues, handleChange, handleBack, handleNext, variant, margin } = useContext(AppContext)
  const { city, date, phone, agreement } = formValues

  const isError = useCallback(
    () =>
      Object.keys({ city, date, phone, agreement }).some(
        (name) => (formValues[name].required && !formValues[name].value) || formValues[name].error
      ),
    [formValues, city, date, phone, agreement]
  )

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            variant={variant}
            margin={margin}
            fullWidth
            label='City'
            name='city'
            placeholder='Enter your city'
            value={city.value}
            onChange={handleChange}
            error={!!city.error}
            helperText={city.error}
            required={city.required}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            variant={variant}
            margin={margin}
            fullWidth
            InputLabelProps={{
              shrink: true
            }}
            label='Date of birth'
            name='date'
            type='date'
            defaultValue={date.value}
            onChange={handleChange}
            required={date.required}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            variant={variant}
            margin={margin}
            fullWidth
            label='Phone number'
            name='phone'
            placeholder='i.e: xxx-xxx-xxxx'
            value={phone.value}
            onChange={handleChange}
            error={!!phone.error}
            helperText={phone.error}
            required={phone.required}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={
              <Checkbox
                checked={agreement.value}
                onChange={handleChange}
                name='agreement'
                color='primary'
                required={agreement.required}
              />
            }
            label='Agree to terms and conditions'
          />
          <FormHelperText error={!!agreement.error}>{agreement.error}</FormHelperText>
        </Grid>
      </Grid>
      <div style={{ display: 'flex', marginTop: 50, justifyContent: 'flex-end' }}>
        <Button variant='contained' color='default' onClick={handleBack} style={{ marginRight: 10 }}>
          Back
        </Button>
        <Button variant='contained' disabled={isError()} color='primary' onClick={!isError() ? handleNext : () => null}>
          Next
        </Button>
      </div>
    </>
  )
}
