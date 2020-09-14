import React from "react";

const initialFormState = { id: null, name: "", username: "" };

class AddUserForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: initialFormState,
    };
  }

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

          if (!user.name || !user.username) return;

          this.props.onAddUser(user);
          this.setState({
            user: initialFormState,
          });
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

export default AddUserForm;
