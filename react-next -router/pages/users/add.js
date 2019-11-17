import React from 'react'
import AddUser from '../../components/users/AddUser'
import { withRedux } from '../../lib/redux'

import i18n, { withTranslation } from '../../i18n'

const AddUserPage = props => (
	<div>
		currentLanguage: {props.currentLanguage}
	
		<AddUser></AddUser>
	</div>
)

AddUserPage.getInitialProps = ({ reduxStore, req }) => {

	const { dispatch } = reduxStore

	const currentLanguage = req ? req.language : i18n.language

	return {currentLanguage}
}

export default withRedux(withTranslation('add_user')(AddUserPage))
