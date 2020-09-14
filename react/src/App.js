import React, { Fragment, Suspense } from "react";
import UserTable from "./tables/UserTable";
//import AddUserForm from "./forms/AddUserForm";
//import EditUserForm from "./forms/EditUserForm";
const EditUserForm = React.lazy(() => import("./forms/EditUserForm"));
const AddUserForm = React.lazy(() => import("./forms/AddUserForm"));

// Data
const usersData = [
  { id: 1, name: "Tania", username: "floppydiskette" },
  { id: 2, name: "Craig", username: "siliconeidolon" },
  { id: 3, name: "Ben", username: "benisphere" },
];

const initialFormState = { id: null, name: "", username: "" };

class App extends React.Component {
  constructor(props) {
    super(props);

    // Setting state
    this.state = {
      users: usersData,
      currentUser: initialFormState,
      editing: false,
      inserting: false,
    };
  }

  // CRUD operations
  addUser = (user) => {
    user.id = this.state.users.length + 1;

    this.setState((preState, preProps) => ({
      users: [...preState.users, user],
      inserting: false,
    }));
  };

  deleteUser = (id) => {
    this.setState({
      editing: false,
      inserting: false,
    });

    this.setState((preState, preProps) => ({
      users: preState.users.filter((user) => user.id !== id),
    }));
  };

  updateUser = (id, updatedUser) => {
    this.setState({
      editing: false,
      inserting: false,
    });

    this.setState((preState, preProps) => ({
      users: preState.users.map((user) =>
        user.id === id ? updatedUser : user
      ),
    }));
  };

  editUser = (user) => {
    this.setState({
      editing: true,
      inserting: false,
    });

    this.setState({
      currentUser: { id: user.id, name: user.name, username: user.username },
    });
  };

  cancelEditing = () => {
    this.setState({
      editing: false,
      inserting: false,
    });
  };

  onInserting = () => {
    this.setState({
      editing: false,
      inserting: true,
    });
  };

  cancelInserting = () => {
    this.setState({
      editing: false,
      inserting: false,
    });
  };

  render() {
    return (
      <div className="container">
        <h1>CRUD App</h1>
        <div className="flex-row">
          <div className="flex-large">
            {this.state.editing && (
              <Fragment>
                <h2>Edit user</h2>
                <Suspense fallback={<div>Loading...</div>}>
                  <EditUserForm
                    currentUser={this.state.currentUser}
                    onCancel={this.cancelEditing}
                    onUpdateUser={this.updateUser}
                  />
                </Suspense>
                {/* <EditUserForm
                  currentUser={this.state.currentUser}
                  onCancelEditing={this.cancelEditing}
                  onUpdateUser={this.updateUser}
                /> */}
              </Fragment>
            )}
            {this.state.inserting && (
              <Fragment>
                <h2>Add user</h2>
                <Suspense fallback={<div>Loading...</div>}>
                  <AddUserForm
                    onAddUser={this.addUser}
                    onCancel={this.cancelInserting}
                  />
                </Suspense>
              </Fragment>
            )}
          </div>
          <div className="flex-large">
            <h2>View users</h2>
            <button onClick={this.onInserting}>Add new user</button>
            <UserTable
              users={this.state.users}
              onEditUser={this.editUser}
              onDeleteUser={this.deleteUser}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
