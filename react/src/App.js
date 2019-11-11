import React, {Fragment } from 'react'
import AddUserForm from './forms/AddUserForm'
import EditUserForm from './forms/EditUserForm'
import UserTable from './tables/UserTable'

// Data
const usersData = [
	{ id: 1, name: 'Tania', username: 'floppydiskette' },
	{ id: 2, name: 'Craig', username: 'siliconeidolon' },
	{ id: 3, name: 'Ben', username: 'benisphere' },
]

const initialFormState = { id: null, name: '', username: '' }

class App extends React.Component{

	constructor(props){
		super(props)

		// Setting state
		this.state = {
			users: usersData,
			currentUser: initialFormState,
			editing: false
		}
	}

	// CRUD operations
	addUser = user => {
		user.id = this.state.users.length + 1

		this.setState((preState, preProps)=>({
			users: [ ...preState.users, user ]
		}))
	}

	deleteUser = id => {
		this.setState({
			editing: false
		})

		this.setState((preState, preProps)=>({
			users: preState.users.filter(user => user.id !== id)
		}))
	}

	updateUser = (id, updatedUser) => {
		this.setState({
			editing: false
		})

		this.setState((preState, preProps)=>({
			users: preState.users.map(user => (user.id === id ? updatedUser : user))
		}))
	}

	editUser = user => {
		this.setState({
			editing: true
		})

		this.setState({
			currentUser: { id: user.id, name: user.name, username: user.username }
		})
	}

	cancelEditing = () => {
		this.setState({
			editing: false
		})
	}

	render(){
		return(
		<div className="container">
			<h1>CRUD App</h1>
			<div className="flex-row">
				<div className="flex-large">
					{this.state.editing ? (
						<Fragment>
							<h2>Edit user</h2>
							<EditUserForm
								currentUser={this.state.currentUser}
								onCancelEditing={this.cancelEditing}
								onUpdateUser={this.updateUser}
							/>
						</Fragment>
					) : (
						<Fragment>
							<h2>Add user</h2>
							<AddUserForm onAddUser={this.addUser} />
						</Fragment>
					)}
				</div>
				<div className="flex-large">
					<h2>View users</h2>
					<UserTable users={this.state.users} onEditUser={this.editUser} onDeleteUser={this.deleteUser} />
				</div>
			</div>
		</div>
		)
	}
}

export default App
