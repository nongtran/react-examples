import React, { Fragment, Suspense } from 'react'
import { connect } from "react-redux";
import AddUserForm from './components/users/AddUserForm'
import EditUserForm from './components/users/EditUserForm'
import UserTable from './components/users/UserTable'

//const EditUserForm = React.lazy(() => import('./components/users/EditUserForm'));

const App = (props) => {
	return (
		<div className="container">
			<h1>CRUD App with Redux</h1>
			<div className="flex-row">
				<div className="flex-large">
					{props.editing ? (
						<Fragment>
							<h2>Edit user</h2>
							{/* <Suspense fallback={<div>Loading...</div>}>
								<EditUserForm/>
      						</Suspense> */}
							<EditUserForm/>
						</Fragment>
					) : (
						<Fragment>
							<h2>Add user</h2>
							<AddUserForm/>
						</Fragment>
					)}
				</div>
				<div className="flex-large">
					<h2>View users</h2>
					<UserTable/>
				</div>
			</div>
		</div>
	)
}

const mapStateToProps = (state, ownProps) => ({
	editing: state.usersState.usersCRUD.editing
});
  
const mapDispatchToProps = (dispatch, ownProps) => ({
});
  

export default connect(mapStateToProps, mapDispatchToProps)(App);
