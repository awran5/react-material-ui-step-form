import React, { useCallback, useContext } from 'react'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormHelperText from '@mui/material/FormHelperText'
import Checkbox from '@mui/material/Checkbox'
import { AppContext } from '../Context'

export default function SecondStep() {
  const { formValues, handleChange, handleBack, handleNext, variant, margin } = useContext(AppContext)
  const { city, date, phone, agreenemt } = formValues

  const isError = useCallback(
    () =>
      Object.keys({ city, date, phone, agreenemt }).some(
        (name) => (formValues[name].required && !formValues[name].value) || formValues[name].error
      ),
    [formValues, city, date, phone, agreenemt]
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
                checked={agreenemt.value}
                onChange={handleChange}
                name='agreenemt'
                color='primary'
                required={agreenemt.required}
              />
            }
            label='Agree to terms and conditions'
          />
          <FormHelperText error={!!agreenemt.error}>{agreenemt.error}</FormHelperText>
        </Grid>
      </Grid>

      <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 3 }}>
        <Button onClick={handleBack} sx={{ mr: 1 }}>
          Back
        </Button>
        <Button variant='contained' disabled={isError()} color='primary' onClick={!isError() ? handleNext : () => null}>
          Next
        </Button>
      </Box>
    </>
  )
}
