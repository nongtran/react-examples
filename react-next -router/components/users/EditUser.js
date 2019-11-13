import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';
import { connect } from "react-redux";
import * as Yup from 'yup';
import { usersActions, usersSelectors } from "../../state/ducks/users";

const EditUser = props => {

	const { id } = props;
	const [currentUser] = usersSelectors.getUser(props.usersState, id);
	const [user, setUser] = useState(currentUser);

	const validationSchema = Yup.object().shape({
		name: Yup.string()
			.required('Required'),
		username: Yup.string()
			.required('Required'),
	});

	const router = useRouter()

	useEffect(() => {
		router.prefetch('/users')
	})

	return (
		<Formik
			initialValues={user}
			validationSchema={validationSchema}
			onSubmit={(values, { resetForm }) => {
				setUser(values)
				props.onUpdateUser(values.id, values)
				router.push('/users')
			}}
		>
			{({ errors, touched }) => (
				<Form>
					<label>Name</label>
					<Field name="name" />
					<ErrorMessage name="name" />
					<label>Username</label>
					<Field name="username" />
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
	usersState: state.usersState
});

const mapDispatchToProps = (dispatch, ownProps) => ({
	onUpdateUser: (id, user) => {
		dispatch(usersActions.updateUser(id, user));
	},
	onCancelEditing: () => {
		dispatch(usersActions.cancelEditUser());
	}
});


export default connect(mapStateToProps, mapDispatchToProps)(EditUser);
