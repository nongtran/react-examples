const getUser = (state, id) => {
  return state.users.filter(t => t.id === id);
};

export default {
  getUser
};
