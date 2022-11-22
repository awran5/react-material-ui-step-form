import React, { memo } from 'react'
import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'

function Footer() {
  return (
    <Typography variant='body2' color='textSecondary' align='center'>
      {'Fork © '}
      <Link color='inherit' href='https://github.com/awran5/react-material-ui-step-form-ts'>
        Github
      </Link>
    </Typography>
  )
}

export default memo(Footer)
