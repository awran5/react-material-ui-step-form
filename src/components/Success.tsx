import React from 'react'
import Typography from '@mui/material/Typography'

export default function Success() {
  return (
    <>
      <Typography variant='h2' align='center' sx={{ py: 4 }}>
        Thank you!
      </Typography>
      <Typography component='p' align='center'>
        You will get an email with further instructions
      </Typography>
    </>
  )
}
