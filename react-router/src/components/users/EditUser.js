import React, {useState} from 'react'
import { connect } from "react-redux";
import { useParams} from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';


import { usersActions, usersSelectors } from "../../state/ducks/users";


const EditUser = props => {

	//const {id} = props.match.params;
	const {id} = useParams();
	const [currentUser] = usersSelectors.getUser(props.usersState, id);
	const [user, setUser] = useState(currentUser);

	const validationSchema = Yup.object().shape({
		name: Yup.string()
		  .required('Required'),
		username: Yup.string()
		  .required('Required'),
	  });

	return (
		<Formik
			initialValues = {user}
			validationSchema = {validationSchema}
			onSubmit = {(values, {resetForm} ) => {
				setUser(values)
				props.onUpdateUser(values.id, values)
				props.history.push({
                    pathname: '/users'
                })
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
