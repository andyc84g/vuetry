import Vue from 'vue';
import Vuex, { Store } from 'vuex';
import F from '@/store/F'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 1,
  },
  getters: {
    rgetter(){
      return 'rgetter'
    }
  },
  mutations: {
    add(state,payload){
      state.count++
      console.log(payload.des,payload.author)
    }
  },
  actions: {
    addone(commit){
     /*  commit('add') */
      console.log(commit)
    }
  },
  modules: {
    F
  },
});
