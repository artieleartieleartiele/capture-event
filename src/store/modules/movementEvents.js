import axios from "axios";

const state = {
  commonValuesChoices: [],
  commonValues: [],
  commonValuesModal: [],
  events: [],
};
const getters = {
  commonValuesChoices: (state) => state.commonValuesChoices,
  commonValues: (state) => state.commonValues,
  commonValuesModal: (state) => state.commonValuesModal,
  events: (state) => {
    for (event of state.events) {
      event.dumbKey =
        new Date().getHours() +
        new Date().getMinutes() +
        new Date().getSeconds() +
        new Date().getMilliseconds() +
        new Date().getFullYear() +
        new Date().getTime() +
        Math.floor(Math.random() * 10000 + 1);
      event.customer = event.customer || state.commonValues.customer;
      event.eqpType = event.eqpType || state.commonValues.eqpType;
      event.authNo = event.authNo || state.commonValues.authNo;
      event.vgmMethod = event.vgmMethod || state.commonValues.vgmMethod;
      event.eventDate = event.eventDate || state.commonValues.eventDate;
      event.condition = event.condition || state.commonValues.condition;
      event.authType = event.authType || state.commonValues.authType;
      event.eventType = event.eventType || state.commonValues.eventType;
      event.vgmDate = event.vgmDate || state.commonValues.vgmDate;
      event.carrier = event.carrier || state.commonValues.carrier;
      event.facility = event.facility || state.commonValues.facility;
      event.vgmResParty = event.vgmResParty || state.commonValues.vgmResParty;
      event.ladenEmpty = event.ladenEmpty || state.commonValues.ladenEmpty;
      event.sealType = event.sealType || state.commonValues.sealType;
      event.vgmOfficial = event.vgmOfficial || state.commonValues.vgmOfficial;
    }
    return state.events;
  },
  events: (state) => state.events,
};
const actions = {
  async fetchCommonValuesList({ commit }) {
    const res = await axios.get(`dummyData.json`);
    commit("FETCH_COMMONVALUESCHOICES", res.data);
  },
  applyCommonValues({ commit }, values) {
    commit("UPDATE_COMMONVALUES", values);
  },
  resetCommonValues({ commit }) {
    for (let o in state.commonValues) state.commonValues[o] = "";
    state.commonValues = [];
    commit("UPDATE_COMMONVALUES", state.commonValues);
  },
  applyCommonValuesModal({ commit }, values) {
    commit("UPDATE_COMMONVALUESMODAL", values);
  },
  resetCommonValuesModal({ commit }) {
    for (let o in state.commonValuesModal) state.commonValuesModal[o] = "";
    state.commonValuesModal = [];
    commit("UPDATE_COMMONVALUESMODAL", state.commonValuesModal);
  },
  addRows({ commit }, value) {
    if (value < 1) return;
    while (value !== 0) {
      state.events.unshift({
        dumbKey:
          new Date().getHours() +
          new Date().getMinutes() +
          new Date().getSeconds() +
          new Date().getMilliseconds() +
          new Date().getFullYear() +
          new Date().getTime() +
          Math.floor(Math.random() * 10000 + 1),
        customer: state.commonValues.customer || "",
        eqpType: state.commonValues.eqpType || "",
        authNo: state.commonValues.authNo || "",
        vgmMethod: state.commonValues.vgmMethod || "",
        eventDate: state.commonValues.eventDate || "",
        condition: state.commonValues.condition || "",
        authType: state.commonValues.authType || "",
        eventType: state.commonValues.eventType || "",
        vgmDate: state.commonValues.vgmDate || "",
        carrier: state.commonValues.carrier || "",
        facility: state.commonValues.facility || "",
        vgmResParty: state.commonValues.vgmResParty || "",
        ladenEmpty: state.commonValues.ladenEmpty || "",
        sealType: state.commonValues.sealType || "",
        vgmOfficial: state.commonValues.vgmOfficial || "",
      });
      value--;
    }
    commit("ADD_ROWS", state.events);
  },
  removeRows({ commit }, checked) {
    if (checked.length < 1) return;

    let poolDumbKeys = [];
    Object.values(state.events).map((v) => poolDumbKeys.push(v.dumbKey));
    const results = poolDumbKeys.filter((key1) => !checked.some((key2) => key1 == key2));
    let events = state.events.filter((event) => results.includes(event.dumbKey));
    commit("REMOVE_ROWS", events);
  },
  removeItem({ commit }, id) {
    let events = state.events.filter((event) => event.dumbKey !== id);
    commit("REMOVE_ROWS", events);
  },
  removeItems({ commit }) {
    for (let o in state.events) state.events[o] = "";
    state.events = [];
    commit("REMOVE_ROWS", state.events);
  },
  resetRows({ dispatch }, checked) {
    if (checked.length < 1) return;
    dispatch("editAdaptor", { checked, cvalues: state.commonValues });
  },
  editRows({ dispatch }, checked) {
    if (checked.length < 1) return;
    dispatch("editAdaptor", { checked, cvalues: state.commonValuesModal });
  },
  editAdaptor({ commit }, payload) {
    const { checked, cvalues } = payload;
    let poolDumbKeys = [];
    let checkedDumbKeys = [];
    const {
      dumbKey,
      customer,
      eqpType,
      authNo,
      vgmMethod,
      eventDate,
      condition,
      authType,
      eventType,
      vgmDate,
      carrier,
      facility,
      vgmResParty,
      ladenEmpty,
      sealType,
      vgmOfficial,
    } = cvalues;

    Object.values(state.events).map((v) => poolDumbKeys.push(v.dumbKey));
    Object.values(checked).map((v) => checkedDumbKeys.push(v.dumbKey));
    state.events.map((event, index) => {
      if (checkedDumbKeys.includes(event.dumbKey)) {
        event.dumbKey = event.dumbKey;
        event.customer = customer ? customer : event.customer;
        event.eqpType = eqpType ? eqpType : event.eqpType;
        event.authNo = authNo ? authNo : event.authNo;
        event.vgmMethod = vgmMethod ? vgmMethod : event.vgmMethod;
        event.eventDate = eventDate ? eventDate : event.eventDate;
        event.condition = condition ? condition : event.condition;
        event.authType = authType ? authType : event.authType;
        event.eventType = eventType ? eventType : event.eventType;
        event.vgmDate = vgmDate ? vgmDate : event.vgmDate;
        event.carrier = carrier ? carrier : event.carrier;
        event.facility = facility ? facility : event.facility;
        event.vgmResParty = vgmResParty ? vgmResParty : event.vgmResParty;
        event.ladenEmpty = ladenEmpty ? ladenEmpty : event.ladenEmpty;
        event.sealType = sealType ? sealType : event.sealType;
        event.vgmOfficial = vgmOfficial ? vgmOfficial : event.vgmOfficial;
      }
    });
    commit("EDIT_ROWS", state.events);
  },
  editItem({ commit }, event) {
    // let updated = state.events.find((e) => e.dumbKey == event.dumbKey);
  },
};
const mutations = {
  FETCH_COMMONVALUESCHOICES: (state, commonValuesChoices) => {
    state.commonValuesChoices = commonValuesChoices;
  },
  UPDATE_COMMONVALUES: (state, values) => {
    state.commonValues = values;
  },
  UPDATE_COMMONVALUESMODAL: (state, values) => {
    state.commonValuesModal = values;
  },
  ADD_ROWS: (state, value) => {
    state.events = value;
  },
  REMOVE_ROWS: (state, value) => {
    state.events = value;
  },
  EDIT_ROWS: (state, value) => {
    state.events = value;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
