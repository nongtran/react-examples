import React from 'react'

class EditUserForm extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			user:  props.currentUser
		}
  }
  
  static getDerivedStateFromProps(props, state) {
    return {
      ...state,
      user: props.currentUser
    }
  }

  // You can tell React to skip applying an effect if certain values haven’t changed between re-renders. [ props ]

  handleInputChange = event => {
    const { name, value } = event.target

    this.setState((prevState, preProps)=> ({
			user: {...prevState.user, [name]: value }
		}))
  }

  render() {
    return(
    <form
      onSubmit={event => {
        event.preventDefault()

        this.props.onUpdateUser(this.state.user.id, this.state.user)
      }}
    >
      <label>Name</label>
      <input type="text" name="name" value={this.state.user.name} onChange={this.handleInputChange} />
      <label>Username</label>
      <input type="text" name="username" value={this.state.user.username} onChange={this.handleInputChange} />
      <button>Update user</button>
      <button onClick={() => this.props.onCancelEditing} className="button muted-button">
        Cancel
      </button>
    </form>
    )
  }
}

export default EditUserForm
