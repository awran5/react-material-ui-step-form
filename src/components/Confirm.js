import React, { Fragment } from 'react'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Divider from '@material-ui/core/Divider'
import Button from '@material-ui/core/Button'

// Destructure props
const Confirm = ({ handleNext, handleBack, values: { firstName, lastName, email, gender, date, phone, city } }) => {
	return (
		<Fragment>
			<List disablePadding>
				<ListItem>
					<ListItemText primary="First Name" secondary={firstName} />
				</ListItem>

				<Divider />

				<ListItem>
					<ListItemText primary="Last Name" secondary={lastName} />
				</ListItem>

				<Divider />

				<ListItem>
					<ListItemText primary="Email Address" secondary={email} />
				</ListItem>

				<Divider />

				<ListItem>
					<ListItemText primary="Gender" secondary={gender} />
				</ListItem>

				<Divider />

				<ListItem>
					<ListItemText primary="Date of birth" secondary={date} />
				</ListItem>

				<Divider />

				<ListItem>
					<ListItemText primary="City" secondary={city} />
				</ListItem>

				<Divider />

				<ListItem>
					<ListItemText primary="phone" secondary={phone.length > 0 ? phone : 'Not Provided'} />
				</ListItem>
			</List>

			<div style={{ display: 'flex', marginTop: 50, justifyContent: 'flex-end' }}>
				<Button variant="contained" color="default" onClick={handleBack}>
					Back
				</Button>
				<Button style={{ marginLeft: 20 }} variant="contained" color="secondary" onClick={handleNext}>
					Confirm & Continue
				</Button>
			</div>
		</Fragment>
	)
}

export default Confirm
