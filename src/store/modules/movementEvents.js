import axios from "axios";

const state = {
  commonValuesList: [],
};
const getters = {
  commonValuesList: (state) => state.commonValuesList,
};
const actions = {
  async fetchCommonValuesList({ commit }) {
    const res = await axios.get(`dummyData.json`);
    commit("FETCH_COMMONVALUESLIST", res.data);
  },
};
const mutations = {
  FETCH_COMMONVALUESLIST: (state, commonValuesList) =>
    (state.commonValuesList = commonValuesList),
  // ADD_TODO: (state, todo) => state.todos.unshift(todo),
  // DELETE_TODO: (state, id) =>
  //   (state.todos = state.todos.filter((todo) => todo.id !== id)),
  // UPDATE_TODO: (state, updTodo) => {
  //   const idx = state.todos.findIndex((todo) => todo.id === updTodo.id);
  //   state.todos.splice(idx, 1, updTodo);},
};

export default {
  state,
  getters,
  actions,
  mutations,
};
