import React from 'react'
import EditUser from '../../../components/users/EditUser'
import { withRedux } from '../../../lib/redux'
import { useRouter } from 'next/router'

const EditUserPage = props => {
  const router = useRouter()
  const { id } = router.query

  return(
    <EditUser id={id}></EditUser>
  )
}

EditUserPage.getInitialProps = ({ reduxStore }) => {
  
  const { dispatch } = reduxStore

  return {}
}

export default withRedux(EditUserPage)
