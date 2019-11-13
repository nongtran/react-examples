import types from "./types";

export const addUser = user => ({
  type: types.ADD_USER,
  user
});

export const updateUser = (id, user) => ({
  type: types.UPDATE_USER,
  id,
  user
});

export const deleteUser = id => ({
  type: types.DELETE_USER,
  id
});

export const editUser = (user) => ({
  type: types.EDIT_USER,
  user
});

export const cancelEditUser = (id) => ({
  type: types.CANCEL_EDIT_USER,
  id
});

export default {
  addUser,
  updateUser,
  deleteUser,
  editUser,
  cancelEditUser
};
