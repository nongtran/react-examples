import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { connect } from "react-redux";
import * as Yup from 'yup';
import { usersActions } from "../../state/ducks/users";

import { withTranslation } from '../../i18n'

const AddUser = props => {
	const initialFormState = { id: null, name: '', username: '' }

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
			initialValues={initialFormState}
			validationSchema={validationSchema}
			onSubmit={(values, { resetForm }) => {
				props.onAddUser(values)
				router.push('/users')

			}}
		>
			{({ errors, touched }) => (
				<Form>
					<label>{props.t('name')}</label>
					<Field name="name" />
					<ErrorMessage name="name" />
					<label>{props.t('user_name')}</label>
					<Field name="username" />
					<ErrorMessage name="username" />
					<label></label>
					<button>{props.t('add_new_user')}</button>
				</Form>
			)}
		</Formik>
	)
}

const mapStateToProps = (state, ownProps) => ({

});

const mapDispatchToProps = (dispatch, ownProps) => ({
	onAddUser: (user) => {
		dispatch(usersActions.addUser(user));
	}
});


export default connect(mapStateToProps, mapDispatchToProps)(withTranslation('add_user')(AddUser));