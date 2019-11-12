import React, { useState } from 'react'
import { connect } from "react-redux";

import { usersActions } from "../../state/ducks/users";

const AddUserForm = props => {
	const initialFormState = { id: null, name: '', username: '' }
	const [ user, setUser ] = useState(initialFormState)

	const handleInputChange = event => {
		const { name, value } = event.target

		setUser({ ...user, [name]: value })
	}

	return (
		<form
			onSubmit={event => {
				event.preventDefault()
				if (!user.name || !user.username) return

				props.onAddUser(user)
				setUser(initialFormState)
			}}
		>
			<label>Name</label>
			<input type="text" name="name" value={user.name} onChange={handleInputChange} />
			<label>Username</label>
			<input type="text" name="username" value={user.username} onChange={handleInputChange} />
			<button>Add new user</button>
		</form>
	)
}

const mapStateToProps = (state, ownProps) => ({
	
});
  
const mapDispatchToProps = (dispatch, ownProps) => ({
	onAddUser: (user) =>{
		dispatch(usersActions.addUser(user));
	}
});
  

export default connect(mapStateToProps, mapDispatchToProps)(AddUserForm);