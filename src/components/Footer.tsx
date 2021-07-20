import React from 'react'
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'

export default function Footer() {
  return (
    <Typography variant='body2' color='textSecondary' align='center'>
      {'Fork © '}
      <Link color='inherit' href='https://github.com/awran5/react-material-ui-step-form-ts'>
        Github
      </Link>
    </Typography>
  )
}
