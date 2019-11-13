import React from 'react'
import { connect, useDispatch } from "react-redux";
// import { Link } from 'react-router-dom'
import Link from 'next/link'

import { usersActions } from "../../state/ducks/users";

const ListUser = ({ history, users, onEditUser, onDeleteUser }) => {
  const dispatch = useDispatch()

  return (
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Username</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {users.length > 0 ? (
        users.map(user => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.username}</td>
            <td>
              <Link href="/users/edit/[id]" as={`/users/edit/${user.id}`}>
                <a className="button muted-button">Edit</a>
              </Link>

              <button
                onClick={() => {
                  onDeleteUser(user.id)
                }}
                className="button muted-button"
              >
                Delete
              </button>
            </td>
          </tr>
        ))
      ) : (
          <tr>
            <td colSpan={3}>No users</td>
          </tr>
        )}
    </tbody>
  </table>
)
      }

const mapStateToProps = (state, ownProps) => ({
  users: state.usersState.usersCRUD.usersData
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onDeleteUser: (id) => {
    dispatch(usersActions.deleteUser(id));
  },
  onEditUser: (user) => {
    dispatch(usersActions.editUser(user));
  }
});


export default connect(mapStateToProps, mapDispatchToProps)(ListUser);
