import React from 'react'
import { makeStyles, Theme } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles((theme: Theme) => ({
  box: {
    padding: theme.spacing(3)
  },
  title: {
    marginTop: 30
  }
}))

export default function Success() {
  const classes = useStyles()
  return (
    <div className={classes.box}>
      <Typography variant='h2' align='center'>
        Thank you!
      </Typography>
      <Typography component='p' align='center' className={classes.title}>
        You will get an email with further instructions
      </Typography>
    </div>
  )
}
