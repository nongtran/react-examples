import React from 'react'
import AddUser from '../../components/users/AddUser'
import { withRedux } from '../../lib/redux'

const AddUserPage = props => (
	<AddUser></AddUser>
)

AddUserPage.getInitialProps = ({ reduxStore }) => {

	const { dispatch } = reduxStore

	return {}
}

export default withRedux(AddUserPage)
