import React, { useState, useEffect } from 'react'
import { connect } from "react-redux";

import { usersActions } from "../../state/ducks/users";

const EditUserForm = props => {
  const [ user, setUser ] = useState(props.currentUser)

  useEffect(
    () => {
      setUser(props.currentUser)
    },
    [ props ]
  )
  // You can tell React to skip applying an effect if certain values haven’t changed between re-renders. [ props ]

  const handleInputChange = event => {
    const { name, value } = event.target

    setUser({ ...user, [name]: value })
  }

  return (
    <form
      onSubmit={event => {
        event.preventDefault()

        props.onUpdateUser(user.id, user)
      }}
    >
      <label>Name</label>
      <input type="text" name="name" value={user.name} onChange={handleInputChange} />
      <label>Username</label>
      <input type="text" name="username" value={user.username} onChange={handleInputChange} />
      <button>Update user</button>
      <button onClick={() => props.onCancelEditing()} className="button muted-button">
        Cancel
      </button>
    </form>
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
