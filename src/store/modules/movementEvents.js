import axios from "axios";

const state = {
  commonValuesChoices: [],
  commonValues: [],
  events: [],
};
const getters = {
  commonValuesChoices: (state) => state.commonValuesChoices,
  commonValues: (state) => state.commonValues,
  inputtedEvents: (state) => {
    for (event of state.events) {
      event.dumbKey =
        new Date().getFullYear() +
        new Date().getMilliseconds() +
        new Date().getTime() +
        state.events.indexOf(event);
      event.customer = event.customer
        ? event.customer
        : state.commonValues.customer;
      event.eqpType = event.eqpType
        ? event.eqpType
        : state.commonValues.eqpType;
      event.authNo = event.authNo ? event.authNo : state.commonValues.authNo;
      event.vgmMethod = event.vgmMethod
        ? event.vgmMethod
        : state.commonValues.vgmMethod;
      event.eventDate = event.eventDate
        ? event.eventDate
        : state.commonValues.eventDate;
      event.condition = event.condition
        ? event.condition
        : state.commonValues.condition;
      event.authType = event.authType
        ? event.authType
        : state.commonValues.authType;
      event.eventType = event.eventType
        ? event.eventType
        : state.commonValues.eventType;
      event.vgmDate = event.vgmDate
        ? event.vgmDate
        : state.commonValues.vgmDate;
      event.carrier = event.carrier
        ? event.carrier
        : state.commonValues.carrier;
      event.facility = event.facility
        ? event.facility
        : state.commonValues.facility;
      event.vgmResParty = event.vgmResParty
        ? event.vgmResParty
        : state.commonValues.vgmResParty;
      event.ladenEmpty = event.ladenEmpty
        ? event.ladenEmpty
        : state.commonValues.ladenEmpty;
      event.sealType = event.sealType
        ? event.sealType
        : state.commonValues.sealType;
      event.vgmOfficial = event.vgmOfficial
        ? event.vgmOfficial
        : state.commonValues.vgmOfficial;
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
  addRows({ commit }, value) {
    if (value < 1) return;
    while (value !== 0) {
      state.events.unshift({
        dumbKey: "",
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
      });
      value--;
    }
    commit("ADD_ROWS", state.events);
  },
  resetRows({ dispatch }) {
    let temp = state.events;
    let idx = temp.length;
    state.events.length = 0;
    dispatch("addRows", idx);
  },
  removeRows({ commit }, checked) {
    if (checked.length < 1) return;

    let poolDumbKeys = [];
    let checkedDumbKeys = [];

    Object.values(state.events).map((v) => poolDumbKeys.push(v.dumbKey));
    Object.values(checked).map((v) => checkedDumbKeys.push(v.dumbKey));

    const results = poolDumbKeys.filter(
      (key1) => !checkedDumbKeys.some((key2) => key1 === key2)
    );

    let events = state.events.filter((event) =>
      results.includes(event.dumbKey)
    );

    console.log(events);
    commit("REMOVE_ROWS", events);
  },
};
const mutations = {
  FETCH_COMMONVALUESCHOICES: (state, commonValuesChoices) => {
    state.commonValuesChoices = commonValuesChoices;
  },
  UPDATE_COMMONVALUES: (state, values) => {
    state.commonValues = values;
  },
  ADD_ROWS: (state, value) => {
    state.events = value;
  },
  REMOVE_ROWS: (state, value) => {
    state.events = value;
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
