const getUser = (state, id) => {
  return state.usersCRUD.usersData.filter(t => t.id === id);
};

export default {
  getUser
};
