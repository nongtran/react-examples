import React from 'react'
import { connect } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import { usersActions } from "../../state/ducks/users";

const AddUser = props => {
	const initialFormState = { id: null, name: '', username: '' }

	const validationSchema = Yup.object().shape({
		name: Yup.string()
		  .required('Required'),
		username: Yup.string()
		  .required('Required'),
	  });

	return (
		<Formik
			initialValues = {initialFormState}
			validationSchema = {validationSchema}
			onSubmit = {(values, {resetForm} ) => {
				props.onAddUser(values)
				props.history.push({
                    pathname: '/users'
                })
				resetForm(initialFormState)
			}}
			>
			{({ errors, touched }) => (
				<Form>
					<label>Name</label>
					<Field name="name"/>
					<ErrorMessage name="name" />
					<label>Username</label>
					<Field name="username"/>
					<ErrorMessage name="username" />
					<label></label>
					<button>Add new user</button>
				</Form>
			)}
		</Formik>
	)
}

const mapStateToProps = (state, ownProps) => ({
	
});
  
const mapDispatchToProps = (dispatch, ownProps) => ({
	onAddUser: (user) =>{
		dispatch(usersActions.addUser(user));
	}
});
  

export default connect(mapStateToProps, mapDispatchToProps)(AddUser);