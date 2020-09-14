import React from "react";

class EditUserForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: props.currentUser,
    };
  }

  // You can tell React to skip applying an effect if certain values haven’t changed between re-renders. [ props ]

  handleInputChange = (event) => {
    const { name, value } = event.target;

    this.setState((prevState, preProps) => ({
      user: { ...prevState.user, [name]: value },
    }));
  };

  render() {
    const { user } = this.state;
    return (
      <form
        onSubmit={(event) => {
          event.preventDefault();

          this.props.onUpdateUser(user.id, user);
        }}
      >
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={user.name}
          onChange={this.handleInputChange}
        />
        <label>Username</label>
        <input
          type="text"
          name="username"
          value={user.username}
          onChange={this.handleInputChange}
        />
        <button>Save Changes</button>
        <button onClick={this.props.onCancel} className="button muted-button">
          Cancel
        </button>
      </form>
    );
  }
}

export default EditUserForm;
