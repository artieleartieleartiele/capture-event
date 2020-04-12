import Vue from "vue";
import Vuex from "vuex";
import movementEvents from "./modules/movementEvents";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    movementEvents,
  },
});
