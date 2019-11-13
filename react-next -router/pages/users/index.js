import React from 'react'
import { useDispatch } from 'react-redux'
import { withRedux } from '../../lib/redux'

import ListUser from '../../components/users/ListUser'

const ListUserPage = props => (
  <ListUser></ListUser>
)

ListUserPage.getInitialProps = ({ reduxStore }) => {
  
  const { dispatch } = reduxStore

  return {}
}

export default withRedux(ListUserPage)
