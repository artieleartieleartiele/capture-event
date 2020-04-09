import axios from "axios";

const state = {
  commonValuesChoices: [],
  commonValues: [],
};
const getters = {
  commonValuesChoices: (state) => state.commonValuesChoices,
  commonValues: (state) => state.commonValues,
};
const actions = {
  async fetchCommonValuesList({ commit }) {
    const res = await axios.get(`dummyData.json`);
    commit("FETCH_COMMONVALUESCHOICES", res.data);
  },
  applyCommonValues({ commit }, values) {
    commit("UPDATE_COMMONVALUES", values);
  },
};
const mutations = {
  FETCH_COMMONVALUESCHOICES: (state, commonValuesChoices) => {
    state.commonValuesChoices = commonValuesChoices;
  },
  UPDATE_COMMONVALUES: (state, values) => {
    state.commonValues = values;
  },
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
