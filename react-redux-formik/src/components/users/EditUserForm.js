import React from 'react'
import { connect } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import { usersActions } from "../../state/ducks/users";

const EditUserForm = props => {

	const validationSchema = Yup.object().shape({
		name: Yup.string()
		  .required('Required'),
		username: Yup.string()
		  .required('Required'),
	  });

	return (
		<Formik
			initialValues = {props.currentUser}
			validationSchema = {validationSchema}
			onSubmit = {(values, {resetForm} ) => {
				props.onUpdateUser(values.id, values)
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
					<button>Update user</button>
          <button onClick={() => props.onCancelEditing()} className="button muted-button">
            Cancel
        </button>
				</Form>
			)}
		</Formik>
	)
}

const mapStateToProps = (state, ownProps) => ({
	currentUser: state.usersState.usersCRUD.currentUser
});
  
const mapDispatchToProps = (dispatch, ownProps) => ({
  onUpdateUser: (id, user) => {
    dispatch(usersActions.updateUser(id, user));
  },
  onCancelEditing: () => {
    dispatch(usersActions.cancelEditUser());
  }
});
  

export default connect(mapStateToProps, mapDispatchToProps)(EditUserForm);
