import React, { useState, Fragment } from 'react'
import AddUserForm from '../components/forms/AddUserForm'
import EditUserForm from '../components/forms/EditUserForm'
import UserTable from '../components/tables/UserTable'

const App = ({usersData}) => {

	const initialFormState = { id: null, name: '', username: '' }

	// Setting state
	const [ users, setUsers ] = useState(usersData)
	const [ currentUser, setCurrentUser ] = useState(initialFormState)
	const [ editing, setEditing ] = useState(false)

	// CRUD operations
	const addUser = user => {
		user.id = users.length + 1
		setUsers([ ...users, user ])
	}

	const deleteUser = id => {
		setEditing(false)

		setUsers(users.filter(user => user.id !== id))
	}

	const updateUser = (id, updatedUser) => {
		setEditing(false)

		setUsers(users.map(user => (user.id === id ? updatedUser : user)))
	}

	const editUser = user => {
		setEditing(true)

		setCurrentUser({ id: user.id, name: user.name, username: user.username })
	}

	const cancelEdit = () => {
		setEditing(false)
	}

	return (
		<div className="container">
			<h1>CRUD App with NextJs</h1>
			<div className="flex-row">
				<div className="flex-large">
					{editing ? (
						<Fragment>
							<h2>Edit user</h2>
							<EditUserForm
								currentUser={currentUser}
								onCancelEditing={cancelEdit}
								onUpdateUser={updateUser}
							/>
						</Fragment>
					) : (
						<Fragment>
							<h2>Add user</h2>
							<AddUserForm onAddUser={addUser} />
						</Fragment>
					)}
				</div>
				<div className="flex-large">
					<h2>View users</h2>
					<UserTable users={users} onEditUser={editUser} onDeleteUser={deleteUser} />
				</div>
			</div>
		</div>
	)
}

App.getInitialProps = async ({ req, res }) => {
    // const res = await fetch('https://api.github.com/repos/zeit/next.js')
    // const json = await res.json()
    // Data
	const usersData = [
		{ id: 1, name: 'Tania', username: 'floppydiskette' },
		{ id: 2, name: 'Craig', username: 'siliconeidolon' },
		{ id: 3, name: 'Ben', username: 'benisphere' },
    ]
    
    return { usersData: usersData }
}

export default App
