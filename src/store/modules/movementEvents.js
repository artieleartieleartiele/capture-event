import axios from "axios";

const state = {
  commonValuesChoices: [],
  commonValues: [],
  events: [
    {
      customer: "",
      eqpType: "",
      authNo: "",
      vgmMethod: "",
      eventDate: "",
      condition: "",
      authType: "",
      eventType: "",
      vgmDate: "",
      carrier: "",
      facility: "",
      vgmResParty: "",
      ladenEmpty: "",
      sealType: "",
      vgmOfficial: "",
    },
  ],
};
const getters = {
  commonValuesChoices: (state) => state.commonValuesChoices,
  commonValues: (state) => state.commonValues,
  inputtedEvents: (state) => {
    for (const event of state.events) {
      event.customer = state.commonValues.customer;
      event.eqpType = state.commonValues.eqpType;
      event.authNo = state.commonValues.authNo;
      event.vgmMethod = state.commonValues.vgmMethod;
      event.eventDate = state.commonValues.eventDate;
      event.condition = state.commonValues.condition;
      event.authType = state.commonValues.authType;
      event.eventType = state.commonValues.eventType;
      event.vgmDate = state.commonValues.vgmDate;
      event.carrier = state.commonValues.carrier;
      event.facility = state.commonValues.facility;
      event.vgmResParty = state.commonValues.vgmResParty;
      event.ladenEmpty = state.commonValues.ladenEmpty;
      event.sealType = state.commonValues.sealType;
      event.vgmOfficial = state.commonValues.vgmOfficial;
    }
    return state.events;
  },
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
