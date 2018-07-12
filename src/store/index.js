import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    txtStore: ''
  },
  mutations: {
    updateStore: function (state, content) {
      // console.log(state);
      // console.log(content);
      state.txtStore = content;
    }
  }
});
