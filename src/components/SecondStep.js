import React, { Fragment } from 'react'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

// Destructure props
const SecondStep = ({ handleNext, handleBack, handleChange, values: { date, phone, city }, filedError, isError }) => {
	// Check if all values are not empty
	const isEmpty = date.length > 0 && city.length > 0
	return (
		<Fragment>
			<Grid container spacing={2}>
				<Grid item xs={12}>
					<TextField
						fullWidth
						label="City"
						name="city"
						placeholder="Enter your city"
						defaultValue={city}
						onChange={handleChange('city')}
						margin="normal"
						error={filedError.city !== ''}
						helperText={filedError.city !== '' ? `${filedError.city}` : ''}
						required
					/>
				</Grid>
				<Grid item xs={12}>
					<TextField
						fullWidth
						InputLabelProps={{
							shrink: true
						}}
						label="Date of birth"
						name="birthday"
						type="date"
						defaultValue={date}
						onChange={handleChange('date')}
						margin="normal"
						required
					/>
				</Grid>
				<Grid item xs={12}>
					<TextField
						fullWidth
						label="Phone number"
						name="phone"
						placeholder="i.e: xxx-xxx-xxxx"
						defaultValue={phone}
						onChange={handleChange('phone')}
						margin="normal"
						error={filedError.phone !== ''}
						helperText={filedError.phone !== '' ? `${filedError.phone}` : ''}
					/>
				</Grid>
			</Grid>
			<div style={{ display: 'flex', marginTop: 50, justifyContent: 'flex-end' }}>
				<Button variant="contained" color="default" onClick={handleBack} style={{ marginRight: 20 }}>
					Back
				</Button>
				<Button variant="contained" disabled={!isEmpty || isError} color="primary" onClick={handleNext}>
					Next
				</Button>
			</div>
		</Fragment>
	)
}

export default SecondStep
