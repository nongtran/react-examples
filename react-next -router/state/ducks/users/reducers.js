import { combineReducers } from "redux";
import types from "./types";
/* State shape
state: {
  users: [],
  currentUser,
  editing
}
*/

// Data
const usersData = [
  { id: '1', name: 'Tania', username: 'floppydiskette' },
  { id: '2', name: 'Craig', username: 'siliconeidolon' },
  { id: '3', name: 'Ben', username: 'benisphere' },
]

const initialFormState = { id: null, name: '', username: '' }

const intialState = {
  nextUserId: 3,
  usersData: usersData,
  currentUser: initialFormState,
  editing: false
}

const usersCRUD = (state = intialState, action) => {
  switch (action.type) {
    case types.ADD_USER:
      
      return {...state, editing: false, 
          nextUserId:  state.nextUserId + 1, 
          usersData: [...state.usersData, {...action.user, id: (state.nextUserId + 1).toString()}]
        };

    case types.DELETE_USER:
      return {...state, editing: false, usersData: state.usersData.filter(user => user.id !== action.id)};

    case types.UPDATE_USER:
      return {...state, editing: false, usersData: state.usersData.map(user => (user.id === action.id ? action.user : user))};

      case types.EDIT_USER:
        const currentUser = { id: action.user.id, name: action.user.name, username: action.user.username }
        return {...state, editing: true, currentUser: currentUser};

      case types.CANCEL_EDIT_USER:
        return {...state, editing: false, currentUser: initialFormState};
    default:
      return state;
  }
};

const usersReducer = combineReducers({
  usersCRUD
});

export default usersReducer;
